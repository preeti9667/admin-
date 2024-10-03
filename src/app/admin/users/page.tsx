import Layout from "@/app/component/Layout";
import {Button, Input, Option, Select, Sheet, Stack, Table} from '@mui/joy'
import styles from '@/app/style/product.module.css'
import { Typography,Box,} from '@mui/material';
import RotateRightIcon from '@mui/icons-material/RotateRight';

export default function Users (){
   
    return(
        <>
        <Layout>
          <div className="product">
          <Typography variant="h5" className='productTitle'>Users</Typography>
        <Box className={styles.productFlexTop}>
          <Box className={styles.flexTop}> 
            <Button   variant="plain" className={styles.rotateButton} >
            <RotateRightIcon />
            </Button>
            <Input placeholder="search by email" sx={{border:'1px solid blueviolet'}}  />
</Box>            
            <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box className={styles.totalProducts}>Total Users:0</Box>
          </Box>
</Box>

<Table className='ProductName'>
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Registered At:</th>   
                <th>name</th>
                <th>Email</th>
                <th>Mobile</th>
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
          </div>
        </Layout>
       
        </>
    )
}