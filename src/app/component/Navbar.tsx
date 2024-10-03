"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import style from '@/app/style/dashboard.module.css'
import { Box, Button } from '@mui/material';
import Check from './Check';
const Navbar = () => {
  const router = useRouter()
    
  return (
    // <div className={style.navbar}>
        <nav className={style.dashboardTopNab}>
          
        <Box className={style.dashboardTopNabTitle}>
            <Box>
                <h2 className={style.topNabTitle}>SHOPFORCOWS</h2>
            </Box>
            <Button variant="text" className={style.topNabButton} onClick={()=>{router.push('../admin/login')}}>
              Log Out
              </Button>

             <Check/>
        </Box>
      
        </nav>
    // </div>
  );
};

export default Navbar;
