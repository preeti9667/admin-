'use client'
import Layout from "@/app/component/Layout"

import { Box, Button, FormControl, Input, TextField, Typography, Select, MenuItem } from "@mui/material"
import style from '@/app/style/product.module.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { useState } from "react";
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import { Table } from "@mui/joy";
import ProductsForm from "@/app/component/ProductsForm";
export default function Products() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState()
    const [item,setItem] = useState()
    const [downA, setDownA] = useState(false)
    const [upArrow, setUpArrow] = useState(false)
const handleSearch =(e: any)=>{
setSearch(e.target.value)
}
const handleChange =(e: any)=>{
setItem(e.target.value)
}
const clickActive=()=>{
    setDownA(!downA)
   
}
const handleActive =()=>{
      setUpArrow(!upArrow) 
}
const handleOpen=()=>{
    setOpen(true)
}
const handleClose=()=>{
    setOpen(false)
}
const handleSubmit=()=>{
    
}
    return (
        <>
            <Layout>
                <Box className='product'>
                    <Typography variant="h4" className='productTitle'>Products</Typography>
                    <Box className={style.productFlexTop}>
                        <Box className={style.flexTop}>
                            <Button
                             sx={{background: 'white', boxShadow: "1px 1px 1px"}}
                            onClick={handleOpen}
                             > +Add New Product</Button>

                            <Button sx={{background: 'white', boxShadow: "1px 1px 1px"}}>
                                <RotateLeftIcon/>
                            </Button>
                            <input
                             placeholder={`search by ${item} `}
                             className={style.productInput} 
                             value={search}
                            onChange={handleSearch}
                            />

                            <select value={item}
                             onChange={handleChange}
                             className={style.productInput} >
                                <option>Name</option>
                                <option>Brand</option>
                                <option>Category</option>
                                <option>SubCategory</option>
                            </select>
                           
                        </Box>
                        <ProductsForm open={open} onClose={handleClose} onSubmit={handleSubmit}/>
                        <Box  className={style.totalProducts}>Total Products: 0</Box>
                    </Box>
                    <hr/>
                    <hr/>
                    <Table className='ProductName'>
                        <thead >
                            <tr>
                                <th> S.N.</th><th>
                                Id</th>
                           
                    
                                <th onClick={clickActive} className={style.buttonAdded}>
                                         Active
                                         
                                        Added At  { downA?
                                         <ArrowDownwardSharpIcon sx={{fontSize:'medium',}}/>:
                                          <ArrowUpwardSharpIcon sx={{fontSize:'medium',}}/>}
                                   </th> 
                                
                        
                            <th onClick={handleActive}  className={style.buttonAdded} >
                                Product Name {upArrow?
                                         <ArrowDownwardSharpIcon sx={{fontSize:'medium',}}/>:
                                          <ArrowUpwardSharpIcon sx={{fontSize:'medium',}}/>}</th>
                      
                                <th  style={{width:'200px'}}> Quantity  Discount Price </th>
                   
                         <th>   Sold</th>
                            </tr>
                        </thead>
                        <tbody>
              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        
                    </Table>
                   
                        
                </Box>
            </Layout>

        </>
    )
}