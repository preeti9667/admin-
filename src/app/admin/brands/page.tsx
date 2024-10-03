"use client"
import Layout from "@/app/component/Layout"
import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import styles from '@/app/style/product.module.css'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Table } from '@mui/joy'
import { useEffect, useState } from "react";
import BrandForm from "@/app/component/BrandForm";

interface Brand {
    name: string,
    description: { value: string }[],
}

export default function Brands() {
    const [open, setOpen] = useState(false)
    // const [formValues,setFormValue]=useState<Brand[]>([])
    
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
       
    }
    

    

    return (
        <>
            <Layout>
                <Box className='product'>
                    <Typography className='productTitle' variant="h5">BRANDS</Typography>
                    <Box className={styles.productFlexTop}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <Button className={styles.categoryFlexTopButton} onClick={handleOpen}>+Add Brands</Button>
                            <Button className={styles.rotateButton} >
                                <RotateRightIcon />
                                </Button>
                        </Box>
                        <BrandForm open={open} close={handleClose}/>
                        <Box className={styles.totalProducts}>Contents:</Box>
                    </Box>
                    
                    <hr /><hr />
                    <Table className='ProductName'>
                        <thead>
                            <tr style={{ fontSize: '17px' }}>
                                <th>S.N.</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                         <tr>
                            <td></td>
                         </tr>
                                     
                                     
                                       
                                  
                           
                        </tbody>
                    </Table>
                </Box>
                           
            </Layout>
        </>
    )
}