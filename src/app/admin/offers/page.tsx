'use client'
import React,{useState,useEffect} from "react";

import Layout from "@/app/component/Layout"
import styles from '@/app/style/product.module.css'
import {Box, Snackbar, Switch, Typography, } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import { Table, Button} from '@mui/joy'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import OfferForm from "@/app/component/OfferForm";
import EditIcon from '@mui/icons-material/Edit';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useRouter } from "next/navigation";
interface formValue{
  name: string;
  checkType: string;
  offerType: string;
  purchase:string;
  offerDiscount: string;
  maxDiscount: string;
  startDate: string;
  endDate:string;
  description : string;
}
  
export default function Offers(){
  const [open,setOpen]= useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<formValue[]>([]);
    const [editing,setEditing] = useState<number | null>(null);

    const [snackbar,setSnackbar]= useState(false);
    const [message, setMessage] = useState<string>('');

      const router = useRouter();

    const handleOpen =()=>{
      setOpen(true)
    }
    const handleClose=()=>{
      setOpen(false)
      setEditing(null)
    }

    const handleSubmit=(values: formValue)=>{
      
        if(editing !== null){
          let updateData = formData.map((item,index)=>(
            editing === index ? values : item
          ))
          setFormData(updateData)
        }else{
     setFormData([...formData, values])
          
      localStorage.setItem('offerValue',JSON.stringify([...formData, values]))
     }
    }
  useEffect(()=>{
    const offerValue = localStorage.getItem("offerValue")
    if(offerValue){
      const offerValues = JSON.parse(offerValue)
      setFormData(offerValues)
    }

  },[])  


const handleRotate=()=>{
    setIsLoading(true)
    setTimeout(()=>{
        setIsLoading(false)
    },2000)
    }
     const handleCloseSnackbar=()=>{
      setTimeout(() => {
        setSnackbar(false)
      }, 2000);
       
    }
   const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{ 

    setMessage(event.target.checked ? 'offer Activated' : 'offer Deactivated');
      setSnackbar(true)
     
   }
   const action =(
    <Button color="success" variant="plain" >ok</Button>
   )

   const handleApplyOffer = ()=>{
      router.push('../admin/offerSetting')
   }
   
   const handleEdit=(index : number)=>{
      setEditing(index)
      setOpen(true)
   }

 return(
        <>
        <Layout>
       <div className="product">
       <h1 className='productTitle'>Offers</h1>
        <Box className={styles.productFlexTop}>
          <Box className={styles.flexTop}>
            <Box>
              <Button onClick={handleOpen} variant="plain" className={styles.categoryFlexTopButton}>
                + Add New Offer
                <OfferForm open={open}
                 onClose={handleClose} 
                onSubmit={handleSubmit}
                 initialValue={ editing !== null ? formData[editing]: undefined} />
              </Button>     
            </Box>
          
            <Button variant="plain" onClick={handleApplyOffer}
            className={styles.categoryFlexTopButton}>
                Apply Offer  </Button>

            <Button variant="plain" className={styles.rotateButton}
              onClick={handleRotate}>
              <RotateRightIcon />
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box className={styles.totalProducts}>Offers: {formData.length}</Box>

          </Box>
        </Box> 
        
           
        <Box className={styles.buttonCircularProgress}>
          {isLoading && (<CircularProgress
            thickness={2}
            color="secondary" size={70} />)}
        </Box> <hr /><hr />
        <Table className='ProductName'>
            <thead style={{font:''}}>
                <tr >
                <th>S.N.</th>
                <th>Name</th>
                <th>Check Type</th>
                <th>Offer Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Min Purchase</th>
                {/* {
                  formData.some(data => data.maxDiscount)&&(
                    <th>MaxDiscount</th>
                  )
                } */}
                <th>Status</th>
                <th>Action</th></tr>
            </thead>
            <tbody>
               
                 {
                  formData.map((value,index)=>(
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.checkType}</td>
                    <td>{value.offerType}</td>
                    <td>{value.startDate}</td>
                    <td>{value.endDate}</td>
                    <td>< CurrencyRupeeIcon sx={{fontSize:'14px'}}/>{value.purchase}.00</td>
                    
                      {/* {value.maxDiscount && (
                        <td>{value.maxDiscount}</td>
                      )}
                       */}
                    <td><Switch
                        defaultChecked
                    onChange={handleChange} color="success">
                        </Switch>
                        <Snackbar open={snackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
                      message={message}
                      action={action}
                       / >
                            
                        
                      
                      </td>
                      <td>
                        <Button sx={{display:'contents'}}>
                          <EditIcon color="success" onClick={()=>handleEdit(index)} /></Button>
                      </td>
                    </tr>
                  ))
                 }  

            
               
            </tbody>
        </Table>

       </div>
        </Layout>
        </>
    )
}
