'use client'
import React,{ useState} from "react"
import Layout from "@/app/component/Layout"
import ContentForm from "@/app/component/ContentForm";
import { Button, Dialog, DialogActions, DialogTitle, Typography, Box, TextField } from "@mui/material";
import styles from '@/app/style/product.module.css'
import { Table } from '@mui/joy'
import RotateRightIcon from '@mui/icons-material/RotateRight';


export default function Content() {
    const [open,setOpen] = useState(false)

    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
      
    }



    return (
        <>   
            <Layout>
            <Box className='product'>
                <Typography variant="h5" className='productTitle'>CONTENTS</Typography>
                <Box className={styles.productFlexTop}>
                    <Box sx={{ display: 'flex', gap: '15px' }}>
                        <Button className={styles.categoryFlexTopButton} onClick={handleOpen}>
                            +Add New Content
                        </Button>
                        <Button  className={styles.rotateButton}>
                            <RotateRightIcon />
                        </Button>
                    </Box>
                    <ContentForm open={open} close={handleClose}/>
                    <Box
                        className={styles.totalProducts}>Content:
                    </Box>
                </Box>
                
                {/* </Box> */}
                <hr /><hr />

                <Table className='ProductName'>
                    <thead style={{ fontSize: '18px' }}>
                        <tr>
                            <th>S.N.</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Edit</th>
                            <th>Show</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                        </tr>
                        
                    </tbody>
                 </Table>
                 </Box>

                



                
            </Layout>

        </>
    )
}