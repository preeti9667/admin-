'use client'
import { Dialog, Box, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography } from "@mui/material";
import Layout from "@/app/component/Layout"
import style from '@/app/style/product.module.css'
import React,{useState} from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CategoryForm from "@/app/component/CategoriesForm";
import CircularProgress from '@mui/material/CircularProgress';
// import Providers from "@/app/reducer/Providers";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@/app/reducer/store";
import { Table } from '@mui/joy'
import { addUser } from "@/app/reducer/formDataSlice";
interface  FormValues{
    category: string,
    subcategory : { value: string }[],
  }

const Categories: React.FC=()=>{
    const [open, setOpen] = useState(false);
    
    // const dispatch = useDispatch()
    // const formData = useSelector((state: RootState)=> state.formData.data);
    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    
const handleSubmit=(values:{ category: string, subcategory : { value: string }[]})=>{
  // dispatch(addUser(values));
}

    return(
        <>
        <Layout>
    
          <Box className='product'>
        <Typography variant="h5" className='productTitle'>CATEGORIES</Typography>
        <Box className={style.productFlexTop}>
          <Box className={style.flexTop}>
              <Button className={style.categoryFlexTopButton} onClick={handleOpen}>
                +Add New Categories
              </Button>
                <Button className={style.rotateButton}>
                  <RotateRightIcon/></Button>    
           
          </Box>
          <CategoryForm open={open} close={handleClose} onSubmit={handleSubmit}/>

          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box className={style.totalProducts}>Categories:
            
               </Box>
            <Box className={style.totalProducts}>Subcategories: 
           </Box>
          </Box>
        </Box>
      <hr/>
             <Table className='ProductName'> 
             <thead > 
                <tr style={{ fontSize: '17px' }}>    
                <th>S.N.</th>
                <th>Categories</th>
                <th>Subcategories</th>
                <th>Edit</th>
                <th>Delete</th>
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
export default Categories;