'use client'
// import React, { useState, useEffect } from "react";
// import Layout from "@/app/component/Layout"
import { Dialog, Box, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography } from "@mui/material";
import style from "@/app/style/dashboard.module.css"
import { Formik, Form, Field, FieldArray, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import RotateRightIcon from '@mui/icons-material/RotateRight';
// import styles from '@/app/style/product.module.css'
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import CircularProgress from '@mui/material/CircularProgress';
// import { Table } from '@mui/joy'
// import Categories from '../admin/categories/page';

interface FormDialogProps {
  open: boolean;
  close: () => void;
  // onSubmit: (values: FormValues) => void;

}

interface FormValues {
  category: string;
  subcategory: { value: string }[];
}

const validationSchema = Yup.object({
  category: Yup.string().required('Required'),
  subcategory: Yup.array().of(
    Yup.object({
      value: Yup.string().required('Required')
    })),
});

const CategoriesForm: React.FC<FormDialogProps> = ({open,close}) => {

  // const [open, setOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [formValue, setFormValue] = useState<FormValues[]>([]);
  // const [subcategory, setSubcategory] = useState(0);
  // const [currentEntry, setCurrentEntry] = useState<FormValues>({ category: '', subcategory: [{ value: '' }] });
  // const [isEditing, setIsEditing] = useState(false);
  // const [editIndex, setEditIndex] = useState<number | null>(null);
  // const [dialogDelete,setDialogDelete]= useState(false)

  const initialValues: FormValues = { category: '', subcategory: [{ value: '' }] };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   setCurrentEntry(initialValues)
  //   setIsEditing(true)
  //   setEditIndex(null)
  // };

  // useEffect(() => {
  //   let password = localStorage.getItem('password')
  //   if (password) {
  //     // setFormValues(JSON.parse(password))
  //     const passValues = JSON.parse(password)
  //     setFormValue(passValues)
  //     setSubcategory(passValues.reduce((count: number, current: FormValues) => count + current.subcategory.length, 0));
  //   }
  // }, []);

  // const onSubmit = (values: FormValues) => {
  //   // setFormValues((prevValues) => [...prevValues, values]); 
  //   if (isEditing && editIndex !== null) {
  //     const upDateValue = formValue.map((entry, index) =>
  //       index === editIndex ? values : entry
  //     );
  //     setFormValue(upDateValue);
  //     localStorage.setItem('passwords', JSON.stringify(upDateValue))
  //   } else {
  //     setFormValue([...formValue, { ...values, }])
  //     localStorage.setItem("password", JSON.stringify([...formValue, { ...values }]))
  //     setSubcategory(subcategory + values.subcategory.length)
  //   };
  //   handleClose()
  // }

  // const handleEdit = (index: number) => {
  //   setCurrentEntry(formValue[index]);
  //   setIsEditing(true);
  //   setEditIndex(index);
  //   handleClickOpen()
  // }

  // const handleDelete = (index: number) => {
  //   setDialogDelete(true)
  //   setEditIndex(index)
  // }

  // const handleRe = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000);

  // }
  // const deleteDialog =(index:number)=>{
  //   const updatedEntries = formValue.filter((_, i) => i !== index);
  //   setFormValue(updatedEntries);
  //   localStorage.setItem('password', JSON.stringify(updatedEntries))
  //   setDialogDelete(false)
  // }
  // const deleteDialogNo =()=>{
  //     setDialogDelete(false)
  // }
  return (
    <>
      {/* <Box className='product'>
        <Typography variant="h5" className='productTitle'>CATEGORIES</Typography>
        <Box className={styles.productFlexTop}>
          <Box className={styles.flexTop}>
            <Box>
              <Button className={styles.categoryFlexTopButton} onClick={handleClickOpen}>
                +Add New Categories
              </Button>
                    
            </Box>
            <Button className={styles.rotateButton}
              onClick={handleRe}>
              <RotateRightIcon />
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box className={styles.totalProducts}>Categories: {formValue.length}</Box>
            <Box className={styles.totalProducts}>Subcategories: {subcategory}</Box>
          </Box>
        </Box>
        <Box className={styles.buttonCircularProgress}>
          {isLoading && (<CircularProgress
            thickness={2}
            color="secondary" size={70} />)}
        </Box> <hr /><hr />

        <Table className='ProductName'>
          <thead style={{ fontSize: '19px' }}>
            <tr>
              <th>S.N.</th>
              <th>Categories</th>
              <th>Subcategories</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '17px' }}>
            {
              formValue.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.category}</td>
                  <td>
                    {
                      entry.subcategory.map((entry, index) => (
                        <td key={index} style={{ display: 'flex' }}>
                          {entry.value}
                        </td>
                      ))
                    }</td>
                  <td>
                    <Button
                     onClick={() => handleEdit(index)}
                      color="success"sx={{display:'contents'}} >< EditIcon /></Button></td>
                  <td><Button 
                  onClick={() => handleDelete(index)}
                   color="error" sx={{display:'contents'}}>< DeleteIcon /></Button></td>
                </tr>
              ))
            }
          </tbody> </Table>
      </Box> */}
{/* <Dialog open={open} onClose={close}>
  <DialogTitle>Are You Sure</DialogTitle>
  <DialogActions>

 
  <Button onClick={deleteDialogNo}>No</Button>
  <Button onClick={()=>{
    if(editIndex !== null){
      deleteDialog(editIndex)
    }
  }  }>Yes</Button> 
  </DialogActions>
</Dialog>
 */}


      <Dialog
        open={open}
        onClose={close}
        PaperProps={{
          style: {
            width: '90vw', // Set your custom width here
          },
        }}>
        <DialogTitle
          sx={{ display: 'flex', background: 'aliceblue', alignItems: 'center', justifyContent: 'space-between', color: 'blueviolet' }}>
          Add & Edit Categories and SubCategories
          <Typography><HighlightOffIcon onClick={close} sx={{ cursor: 'pointer' }} /></Typography>
        </DialogTitle>

        <Formik
          // initialValues={currentEntry}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values,) => {
            // onSubmit(values);
            close()

          }}>
          {({ values, errors, touched, handleReset, isValid, dirty, handleBlur, handleChange }) => (
            <Form>
              <DialogContent
                sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <Field
                  as={TextField}
                  id='category'
                  name="category"
                  label="Category Name"
                  // fullWidth
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="dense"
                  error={touched.category && !!errors.category}
                helperText={touched.category && errors.category ? errors.category : ''}

                />
                <FieldArray name="subcategory">
                  {({ remove, push, }) => (
                    <div>
                      <Typography color='secondary'>Add Subcategory</Typography>
                      {
                        values.subcategory.map((_, index) => (
                          <Box key={index}
                            sx={{ display: 'flex', alignItems: 'center', gap: "3px" }}>
                            <Field
                              as={TextField}
                              id={`subcategory[${index}].value`}
                              name={`subcategory[${index}].value`}
                              label={`add subcategory ${index + 1}`}
                              // value={values.subcategory}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              margin="dense"
                              error={Boolean(touched.subcategory?.[index]?.value && errors.subcategory?.[index]?.valueOf)}
                              helperText={<ErrorMessage name={`subcategory[${index}].value`} />}
                            />

                            <AddCircleOutlineIcon color="success" onClick={() => push({ value: '' })} sx={{ cursor: 'pointer' }} />
                            <Button disabled={values.subcategory.length === 1} sx={{ display: 'contents' }}>
                              <RemoveCircleOutlineIcon color='error'
                                onClick={() => remove(index)}


                              />
                            </Button >

                          </Box>
                        ))
                      }
                    </div>
                  )}
                </FieldArray>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleReset} variant="contained"
                  // sx={{background: 'red',color: 'white'}}
                  color='error'
                >
                  clear
                </Button>
                <Button type="submit" color="success"
                  variant="contained"
                  disabled={!(isValid && dirty)}

                >
                  {/* {isEditing ? 'Update' : 'Submit'} */}
                  submit
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>

    </>
  )
}
export default CategoriesForm;
