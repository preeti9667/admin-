'use client'
import React,{useState} from "react"
import Layout from "@/app/component/Layout"
import { Box, Typography,FormControl,Radio,RadioGroup, FormControlLabel } from "@mui/material"
export default function OfferSetting (){
    const [apply, setApply] = useState(true)
  
    const [remove,setRemove] = useState(false)

    const handleApplyOffer=()=>{
       setApply(true)
       setRemove(false)
    }
    const handleRemove=()=>{
        setRemove(true)
       setApply(false)
    }
return(
    
    <Layout>
        <div className="product">
        <Typography variant="h5" className="productTitle">Offer Settings</Typography>
        
                <FormControl className='ProductName' fullWidth sx={{padding:'10px'}}>
                <Typography variant="body1" sx={{color:'green'}}>
                  Action</Typography>
                  <RadioGroup row
                  name="radio-button"
                  defaultValue='Apply'>
                  <FormControlLabel onClick={handleApplyOffer}  value='Apply' control={<Radio/>} label='Apply'/>
                  <FormControlLabel onClick={handleRemove} value='Remove' control={<Radio/>} label='Remove'/>
                  </RadioGroup>
                </FormControl>
            

            { apply &&(
                <div className="ProductName">
                        hello
                </div>
            )
               
            }
       
        
        {
              remove &&(
                <FormControl  className='ProductName' fullWidth sx={{padding:'10px'}}>
                  <Typography variant="body1" sx={{color:'green'}}> Choose Apply Criteria</Typography>
                  <RadioGroup row
                  name="radio-button"
                 >
                  <FormControlLabel   value='categories' control={<Radio/>} label='categories'/>
                  <FormControlLabel  value='brands' control={<Radio/>} label='brands'/>
                  <FormControlLabel  value='products' control={<Radio/>} label='products'/>
                  </RadioGroup>
                </FormControl>
              )
            }
        </div>
    </Layout>
    
)
}