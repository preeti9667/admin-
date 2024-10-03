'use client'
import Layout from "@/app/component/Layout";
import React, { useState } from 'react';
import { Typography,Box,} from '@mui/material';
import styles from '@/app/style/product.module.css'
import {TextField,} from '@mui/material'
import {Button, Input, Option, Select, Sheet, Stack, Table} from '@mui/joy'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Formik, Field, Form, ErrorMessage} from "formik";
import *as Yup from 'yup';


const Schema =  Yup.object({
  start: Yup.string().required('required'),
end: Yup.string().required('required')
})
interface Date{
  startDate: '',
  endDate: '',
}
const Orders: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonAc, setButtonAc] = useState(false)
    const [date,setDate] = useState(false);

  const handleOpen = () =>{
    setDate(!date);
  }
  const handleAdded =()=>{
    setButtonAc(!buttonAc)
  }
  const onSubmit =(values: Date)=>{
    console.log(values)
    setDate(false)
  }
  const initialValues:Date ={startDate: '', endDate: ''}
  return (
    <Layout>
    <div className="product">
    <Typography variant="h5" className='productTitle'>Orders</Typography>
        <Box className={styles.productFlexTop}>
          <Box className={styles.flexTop}>
           
            
            <Button   variant="plain" className={styles.rotateButton} >
              <RotateRightIcon />
            </Button>
            <Button variant="plain" onClick={handleOpen}
             className={styles.categoryFlexTopButton}>
                Filter By Date
              </Button>

              <Input placeholder="search by order id" sx={{border:'1px solid blueviolet'}}  />
              <Stack >
                <Select defaultValue="All" sx={{border:'1px solid blueviolet'}}>
             <Option value='All' >All</Option>
             <Option value='Packed'>Packed</Option> 
             <Option value='Payment Completed'>Payment Completed</Option>
             <Option value='Dispatched'>Dispatched</Option>
             <Option value='Placed'>Placed</Option>
             <Option value='Delivered'>Delivered</Option>
             <Option value='Cancelled'>Cancelled</Option>
             <Option value='Payment Refunded'>Payment Refunded</Option>
             </Select>
              </Stack>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box className={styles.totalProducts}>Total Orders:0</Box>
          </Box>
          
        </Box>
         {
          date && (
            <Box sx={{border:'1px solid black', marginBottom: '15px'}}>
            <Formik validationSchema={Schema} initialValues={initialValues}
            onSubmit={(values)=>{
              onSubmit(values)
            }}>
              {({handleBlur,handleChange,touched,errors,isSubmitting})=>(
                <Form className={styles.formStyleOrder} >

                  <Field as={TextField} 
                  label='StartDate*' type='date' name='startDate'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.startDate && errors.startDate}
                  helperText={<ErrorMessage name='startDate' />} />

                 
<Field as={TextField} 
                  label='endDate*' type='date' name='endDate'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.endDate && errors.endDate}
                  helperText={<ErrorMessage name='startDate' />} />

                  <Button type="submit"  color="success"
                   sx={{height:'fit-content'}}>submit</Button>
             
                </Form>
              )}
            </Formik>
            </Box>
          )
        }
          <hr /><hr />
       
          <Table className='ProductName'>
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Order Id</th>
             
                <th onClick={handleAdded} className={styles.buttonAdded} >
                  Added At {buttonAc?
                   <ArrowUpwardIcon sx={{fontSize:'medium',}}/>
                   :<ArrowDownwardIcon sx={{fontSize:'medium',}}/>}</th> 

                <th>Amount</th>
                <th>Order Status</th>
                <th>Payment</th>
              </tr>
            </thead>
          
            <tbody>
              <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              </tr>
            </tbody>
          </Table>
    </div>
    
    </Layout>
  );
};

export default Orders;
