'use client'
import Layout from "@/app/component/Layout"
import { Dialog, DialogTitle, Typography, Box, DialogContent, TextField, DialogActions,FormControl,InputLabel,MenuItem,Select} from "@mui/material";
import { Button, Table,} from '@mui/joy'
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import React, { useEffect, useState } from 'react';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import styles from '@/app/style/product.module.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import *as Yup from 'yup';
import SettingForm from "@/app/component/SettingForm";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

interface formValue {
    firstOrder: string,
    criteria: string,
    orderMount: string,
    charge450: string,
    charge950: string,
    charge1450: string,
    charge1950: string,
    cashOn: string,
    cashOnDel: string,
}


export default function System() {
    const [open, setOpen] = useState(false);
    const [currentEntry, setCurrentEntry] = useState<formValue>({ firstOrder: '', criteria: '', charge950: '',
        orderMount: '', charge450: '', charge1450: '', charge1950: '', cashOn: '', cashOnDel: '' });
     
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)

    }
    const onSubmit = (values: formValue) => {
        setCurrentEntry(values)
        setOpen(false)
            localStorage.setItem('settings', JSON.stringify(values))
    }
   
useEffect(()=>{
    let data = localStorage.getItem('settings')
        if(data){
            const  datas = JSON.parse(data)
            setCurrentEntry(datas)
        }
},[])
    
     

    return (
        <>
            <Layout>
                <div className="product">
                    <Typography variant="h5" className='productTitle'>Settings</Typography>

                    <Box className={styles.flexTop}>
                        <Button variant="plain" className={styles.rotateButton} >
                            <RotateRightIcon /> </Button>
                        <Button onClick={handleOpen}  variant="plain"
                        className={styles.rotateButton}>Edit</Button>
                      
                    </Box>
                    <SettingForm 
                    open={open}
                     onClose={handleClose} 
                     onSubmit={onSubmit} initialValues={currentEntry}/>
                       <Table className='ProductName' >
                         
                        <thead >
                             {currentEntry && (                    
                            <tr style={{display:'flex',flexDirection:'column'}} >
                                <th 
                                 style={{paddingRight:'16rem',paddingLeft:'24px',}} 
                                className={styles.tableThStyle}> 
                                   First Order Discount
                                   <Typography><CurrencyRupeeIcon sx={{fontSize:'small'}}/>
                                   {currentEntry.firstOrder}.00</Typography>
                                </th>

                                <th style={{paddingRight:'16rem',paddingLeft:'24px',}} 
                                 className={styles.tableThStyle}>
                                    Criteria First Order Discount
                                <Typography><CurrencyRupeeIcon  sx={{fontSize:'small'}}/>
                                {currentEntry.criteria}.00</Typography>
                                </th>

                                <th style={{paddingRight:'16rem',paddingLeft:'24px',}}
                                 className={styles.tableThStyle}>
                                    Free Delivery Order Amount
                                <Typography><CurrencyRupeeIcon  sx={{fontSize:'small'}}/>
                                {currentEntry.orderMount}.00</Typography>
                                </th>

                                <th style={{paddingRight:'16rem',paddingLeft:'24px',}}
                                 className={styles.tableThStyle}>
                                    Delivery Charge 450gm
                                <Typography><CurrencyRupeeIcon  sx={{fontSize:'small'}}/>
                                 {currentEntry.charge450}.00</Typography>
                                </th>

                                <th style={{paddingRight:'16rem',paddingLeft:'24px'}}
                                 className={styles.tableThStyle}>
                                    Delivery Charge 950gm
                                <Typography><CurrencyRupeeIcon  sx={{fontSize:'small'}}/>
                                {currentEntry.charge950}.00</Typography>
                                </th>

                                <th style={{paddingRight:'16rem',paddingLeft:'24px'}}
                                 className={styles.tableThStyle}>
                                    Delivery Charge 1450gm
                                <Typography><CurrencyRupeeIcon  sx={{fontSize:'small'}}/>
                                {currentEntry.charge1450}.00</Typography>
                                </th>

                                <th style={{paddingRight:'16rem',paddingLeft:'24px'}}
                                 className={styles.tableThStyle}>
                                    Delivery Charge 1950gm
                                <Typography><CurrencyRupeeIcon  sx={{fontSize:'small'}}/>
                                {currentEntry.charge1950}.00</Typography>
                                </th>

                                <th style={{paddingRight:'16rem',paddingLeft:'24px',}}
                                 className={styles.tableThStyle}>
                                    Cash On Delivery Charge
                                <Typography>{currentEntry.cashOn}</Typography>
                                </th>

                                <th style={{paddingRight:'16rem',paddingLeft:'24px'}}
                                 className={styles.tableThStyle}>
                                    Cash On Delivery
                                <Typography>{currentEntry.cashOnDel}</Typography>
                                </th>
                            
                            </tr>   )}   
                                 </thead>

                        <tbody>
                           <tr></tr> 
                        </tbody>
                       </Table>

                        <Box >
                    
</Box>
                </div>

            </Layout>

        </>
    )
}