'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
// import styles from '../styles/dashboard.module.css';
import style from '@/app/style/dashboard.module.css'
import { Box, Avatar, Tab,Typography,  List, ListItemText, ListItemButton, ListItemIcon, Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GroupIcon from '@mui/icons-material/Group';
import TuneIcon from '@mui/icons-material/Tune';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Sidebar = () => {
  const pathname = usePathname()
const [openAuto,setOpenAuto] = useState(false)

const handleOpen=()=>{
  // setOpenAuto(prevOpen => !prevOpen);
  setOpenAuto(!openAuto)
}


  return (
    <div className={style.sidebar}>
      <div>
      <Box className={style.dashboardAvatarSty}>
        <Avatar src='https://images.creativefabrica.com/products/previews/2023/10/27/yqYScKJ8D/2XL5mXeKUNbF5HxcJ704TiBknaQ-desktop.jpg'
          className={style.dashboardAvatar}
        />
        <Typography variant="h6">SHOPFORCOWS</Typography>
      </Box>
      <Box>
      </Box>


      <ul className={style.sidebarLink}>

        <li className={style.sidebarLi}>
          <button
            className={`link ${pathname === '/admin/dashboard' ? 'text-zinc-400' : ''}`}>
            <DashboardIcon sx={{ marginRight: "30px" }} />
            <Link href='../admin/dashboard' >Dashboard</Link>
          </button>
        </li>
        <li>
        
            
         

          {/* <Accordion className={style.accordion} defaultExpanded >

            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ color: 'white' }}
            >
              <Brightness7Icon />
              <Typography
               sx={{ paddingLeft: '28px', fontSize: '17px' }}
               >UI Content</Typography>

            </AccordionSummary>
            <AccordionActions className={style.acDetailLink}>
              <button
                className={`link ${pathname === '/admin/categories' ? 'text-zinc-400' : ''}`}>
                <Link href='../admin/categories' >Categories</Link>
              </button>
              <button
                className={`link ${pathname === '/admin/banner' ? 'text-zinc-400' : ''}`}>
                <Link href='../admin/banner' >Banner</Link>
              </button>
              <button
                className={`link ${pathname === '/admin/content' ? 'text-zinc-400' : ''}`}>
                <Link href='../admin/content'>Ui Content</Link>
              </button>
              <button
                className={`link ${pathname === '/admin/brands' ? 'text-zinc-400' : ''}`}>
                <Link href='../admin/brands'>Brands</Link>
              </button>

            </AccordionActions>

          </Accordion> */}
          
        </li>

          <Box className={style.accordion} >
          <Brightness7Icon />
              <Typography
               sx={{ paddingLeft: '28px', fontSize: '17px' }}
               >UI Content</Typography>
               <Button onClick={handleOpen} sx={{color:'white'}}>
                {openAuto ?  <ExpandLessIcon/>:<ExpandMoreIcon/> }
               </Button>
                </Box>
                {openAuto && (<Box className={style.acDetailLink}>
                <button   
                className={`link ${pathname === '/admin/categories' ? 'text-zinc-400' : ''}`}>
                <Link   href='../admin/categories'>Categories</Link>
              </button>

              <button
                className={`link ${pathname === '/admin/banner' ? 'text-zinc-400' : ''}`}>
                <Link href='../admin/banner' >Banner</Link>
              </button>
              <button
                className={`link ${pathname === '/admin/content' ? 'text-zinc-400' : ''}`}>
                <Link href='../admin/content'>Ui Content</Link>
              </button>
              <button
                className={`link ${pathname === '/admin/brands' ? 'text-zinc-400' : ''}`}>
                <Link href='../admin/brands'>Brands</Link>
              </button>
                </Box>)}
         

        <li className={style.sidebarLi}>

          <button
            className={`link ${pathname === '/admin/products' ? 'text-zinc-400' : ''}`}>
            <PersonalVideoIcon sx={{ marginRight: "30px" }} />
            <Link href="../admin/products">Products</Link>
          </button>

        </li>
        <li className={style.sidebarLi}>

          <button
            className={`link ${pathname === '/admin/orders' ? 'text-zinc-400' : ''}`}>
            <WysiwygIcon sx={{ marginRight: "30px" }} />
            <Link href="../admin/orders">Orders</Link>
          </button>

        </li>
        <li className={style.sidebarLi}>
          <button
            className={`link ${pathname === '/admin/offers' ? 'text-zinc-400' : ''}`}>
            <LocalOfferIcon sx={{ marginRight: "30px" }} />
            <Link href="../admin/offers">offers</Link>
          </button>

        </li>
        <li className={style.sidebarLi}>
          <button
            className={`link ${pathname === '/admin/payments' ? 'text-zinc-400' : ''}`}>
            <CardGiftcardIcon sx={{ marginRight: "30px" }} />
            <Link href="../admin/payments">Payments</Link>
          </button>
        </li>
        <li className={style.sidebarLi}>
          <button
            className={`link ${pathname === '/admin/users' ? 'text-zinc-400' : ''}`}>
            <GroupIcon sx={{ marginRight: "30px" }} />
            <Link href="../admin/users">Users</Link>
          </button>

        </li>
        <li className={style.sidebarLi}>
          <button
            className={`link ${pathname === '/admin/system' ? 'text-zinc-400' : ''}`}>
            <TuneIcon sx={{ marginRight: "30px" }} />
            <Link href="../admin/system">System Settings</Link>
          </button>

        </li>
      </ul>
                  </div>
    </div>
  );
};

export default Sidebar;
