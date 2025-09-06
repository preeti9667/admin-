'use client'
import DehazeIcon from '@mui/icons-material/Dehaze';

import { Badge, IconButton, InputBase, ListItemButton, Paper } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from '@/app/style/mainPage.module.css'
import { useState } from 'react';
import { Divider, Drawer, List } from '@mui/joy';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LoginIcon from '@mui/icons-material/Login';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
export default function MainNav() {
    const [open, setOpen] = useState(false);
    const [one,setOne]= useState(false);
    const [brand,setBrand]= useState(false);
    const handleOpen=()=>{
        setOne(!one)
    }
    const openBrand=()=>{
        setBrand(!brand)
    }
    const router = useRouter();
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navItemList}>
                    <div className={styles.navItem}>

                        <IconButton onClick={() => setOpen(true)}>
                            <DehazeIcon sx={{ color: 'white' }} />
                        </IconButton>
                                <IconButton sx={{ color: 'white' }}  onClick={() => router.push('../admin/dashboard') }>
                            
                            Go Dashboard
                        </IconButton>

                        <h2 className={styles.topNabTitle}>
                            SHOPFORCOWS
                            </h2>
                    </div>
                    <div>
                        <Paper 
                          sx={{ p: '2px 0px', display: 'flex', alignItems: 'center', width: 500 }}>
                            <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Products..."
                           >
                            
                            </InputBase>
                            <IconButton type="button" sx={{padding:'2px 11px' }} 
                            aria-label="search">
                            <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <button>

                        <Badge badgeContent={0} color="success" showZero>
                            <ShoppingCartIcon sx={{ color: 'white' }} />
                        </Badge>

                    </button>
                </div>
            </nav>
            <Drawer open={open} onClose={() => setOpen(false)} 
            
             slotProps={{
               content: {
                 sx: {
                   bgcolor: 'white',
                   maxWidth:'300px'
               },}, }}
            >
                <List
                    sx={{
                        flex: 'none',
                        fontSize: '15px',
                        fontWeight: '500',
                       }}>
                    <ListItemButton>
                        All Products</ListItemButton>
                    <ListItemButton onClick={handleOpen } 
                    className={styles.drawerButtonIcon}>One C
                        {one? <ExpandLessIcon/>: <ExpandMoreIcon/>}
                    </ListItemButton>
                    {one&&(<div>hello</div>)}

                    <ListItemButton 
                    onClick={openBrand}
                    className={styles.drawerButtonIcon}>Shop By Brand
                    {brand? <ExpandLessIcon/>: <ExpandMoreIcon/>}
                    </ListItemButton>
                    {brand &&(<div>hello</div>)}

                    <Divider />
                    <ListItemButton className={styles.drawerListItem}>< AccountCircleIcon/>
                        My Account</ListItemButton>
                    <Divider />
                    <ListItemButton
                     className={styles.drawerListItem}
                    ><CropOriginalIcon/>
                        My Orders</ListItemButton>
                    <Divider />
                    <ListItemButton className={styles.drawerListItem}>
                        <FavoriteBorderIcon/>
                        My Whitelist</ListItemButton>
                    <Divider />
                    <ListItemButton className={styles.drawerListItem}>
                        <ShoppingCartIcon/>
                        My Cart</ListItemButton>
                    <Divider />
                  
                    <ListItemButton className={styles.drawerListItem}>
                        <AssignmentIndIcon />
                        Sign Up</ListItemButton>
                    <Divider />

                    <ListItemButton className={styles.drawerListItem}>
                        <LoginIcon/>
                        Log In</ListItemButton>
                    <Divider />
                </List>
            </Drawer>
        </>
    )
}