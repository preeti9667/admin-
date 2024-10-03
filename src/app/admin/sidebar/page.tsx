"use client"
import { Avatar, Box,  Tabs, Typography,ListItemText, ListItemButton, ListItemIcon , List, Collapse } from "@mui/material";
import style from '@/app/style/dashboard.module.css'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, {useState} from "react";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from "next/link";
// import Dashboard from '../dashboard/page';
export default function Sidebar(){
    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    return(
        <>
        
       
        <Box className={style.dashboard}>
 
    <Box className={style.dashboardLeftNab}
    >
            <Box  className={style.dashboardAvatarSty}>
                <Avatar src='https://images.creativefabrica.com/products/previews/2023/10/27/yqYScKJ8D/2XL5mXeKUNbF5HxcJ704TiBknaQ-desktop.jpg'
                  className={style.dashboardAvatar} 
                  />
                  <Typography variant="h6">SHOPFORCOWS</Typography>
            </Box>
            <Box>
                <ul>
                    <li className='p-7'>
                        <Link href='../admin/dashboard'>
            <DashboardIcon/>
            Dashboard</Link>
                    </li>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            < Brightness7Icon/>
                        </ListItemIcon>
        <ListItemText primary="UI Elements" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ display: 'flex', flexDirection: 'column'}}>
            <ListItemText>
                <Link href='../admin/categories'>Categories</Link>
            </ListItemText>
            <ListItemText>
                <Link href='../banner'>Banner</Link>
            </ListItemText>
            <ListItemText>
                <Link href='../content'>Ui Content</Link>
            </ListItemText>
            <ListItemText> 
                <Link href='../admin/brands'>Brands</Link>
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <li><Link href='../admin/products'>Products</Link></li>
      <li><Link href='../admin/orders'>Orders</Link></li>
      <li><Link href='../admin/offers'>Offers</Link></li>
      <li><Link href='../admin/payments'>Payments</Link></li>
      <li><Link href='../admin/users'>Users</Link></li>
      <li><Link href='../admin/system'>System Settings</Link></li>
                </ul>
            
            </Box>
        </Box>
       
      
       </Box>
        </>
    )
}