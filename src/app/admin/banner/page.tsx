'use client'
import Layout from "@/app/component/Layout"
import React, { useState } from 'react';
import styles from '@/app/style/product.module.css'
import { Box, Grid, Input, TextField,Button, Typography} from "@mui/material";
import { Textarea } from "@mui/joy";
import RotateRightIcon from '@mui/icons-material/RotateRight';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BannerForm from "@/app/component/BannerForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Banner(){

  return (
      <Layout>
          <div className="product">
            <h1 className="productTitle">Banners</h1>
              <Box className={styles.productFlexTop}>
                <Button  
                className={styles.categoryFlexTopButton}>
                    <RotateRightIcon />
                  Refresh</Button>
                <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box className={styles.totalProducts}>Offers:0</Box>
          </Box>
              </Box><hr/> <hr/>
              <Box  sx={{ flexGrow: 1 , marginTop:'10px',}}>
                <Grid container spacing={2}>
                  <Grid item xs={8} >
                    <Item sx={{height:'100vh'}}>
                    <Box className={styles.bannerItemButtons}>
                      <Button>
                         <ChevronLeftIcon/>
                      </Button>
                     <Button>
                        <ChevronRightIcon/>
                     </Button>
                       </Box>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item  sx={{height:'100vh'}}>
                      <Typography variant="h5"
                      sx={{color:'green', marginBottom:'20px'}}>Add Banner</Typography>
                   <BannerForm />
   
                    </Item>
                  </Grid>
                </Grid>
              </Box>
          </div>
     
        </Layout>
      
    )
}