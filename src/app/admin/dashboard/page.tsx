import React from 'react';
import style from '@/app/style/dashboard.module.css'
import Layout from '@/app/component/Layout';
import { Stack, CircularProgress,Box} from '@mui/material';
const Dashboard = () => {
  return (
    <Layout>
      <Box className={style.dashboardContent}>
      
    <Stack  sx={{ color: 'grey.500' }}  
           >
    <CircularProgress color="secondary" 
            
     size={100}  thickness={1} className={style.dashboardContentIcon} />
    </Stack>
    </Box>
 
    </Layout>
  );
};

export default Dashboard;
