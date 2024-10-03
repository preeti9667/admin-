import { Dialog, DialogTitle, Typography, Box, DialogContent, TextField, DialogActions,FormControl,InputLabel,MenuItem,Select} from "@mui/material";
import { Button, Table,} from '@mui/joy'
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import styles from '@/app/style/product.module.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import *as Yup from 'yup';

interface formValue {
    firstOrder: string,
    criteria: string,
    orderMount: string,
    charge450: string,
    charge950: string,
    charge1450: string,
    charge1950: string,
    cashOn: string,
    cashOnDel: string,
}
interface MyFormDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (values: formValue) => void;
    initialValues: formValue;
  }

const validationSchema = Yup.object({
    criteria: Yup.string().required('required'),
    firstOrder: Yup.string().required('required'),
    orderMount: Yup.string().required('required'),
    charge450: Yup.string().required('required'),
    charge950: Yup.string().required('required'),
    charge1450: Yup.string().required('required'),
    charge1950: Yup.string().required('required'),
    cashOn: Yup.string().required('required'),
    // cashOnDel: Yup.string().required('required'),
})

const SettingForm:React.FC<MyFormDialogProps>=({open,onClose,onSubmit,initialValues})=>{


    return(
        <>
         <Dialog open={open} onClose={onClose} className={styles.dialog}>
                            
                            <DialogTitle className={styles.showDialog}>
                                Update Settings
                                <Button sx={{ display: 'contents' }} onClick={onClose}
                                ><HighlightOffIcon color="error" /></Button> </DialogTitle>
    
    
    
                            <Formik validationSchema={validationSchema} initialValues={initialValues}
                                onSubmit={(values) => {
                                    onSubmit(values)
                                }}>
                                {({ handleBlur, handleChange, touched, errors,handleReset }) => (
                                    <Form className={styles.settingFormStyle}>
                                       
                                        <Field as={TextField} name='firstOrder' type='number'
                                        error={touched.firstOrder&& errors.firstOrder}
                                        helperText={<ErrorMessage name='firstOrder'/>}
                                            label='First Order Discount*' onChange={handleChange} onBlur={handleBlur} />
                                        <Field as={TextField} name='criteria'type='number'
                                   error={touched.criteria&& errors.criteria}
                                   helperText={<ErrorMessage name='criteria'/>}     
                                            label="Criteria First Order Discount*" onChange={handleChange} onBlur={handleBlur} />
                                        <Field as={TextField} name='orderMount'type='number'
                                         error={touched.orderMount&& errors.orderMount}
                                         helperText={<ErrorMessage name='orderMount'/>} 
                                            label='Free Delivery Order Amount*'  onChange={handleChange} onBlur={handleBlur} />
                                        <Field as={TextField} name='charge450' type='number'
                                         error={touched.charge450&& errors.charge450}
                                         helperText={<ErrorMessage name='charge450'/>} 
                                         onChange={handleChange} onBlur={handleBlur}label="Delivery Charge 450gm*" />
                                        <Field as={TextField} name='charge950' type='number'
                                         error={touched.charge950&& errors.charge950}
                                         helperText={<ErrorMessage name='charge950'/>} 
                                         onChange={handleChange} onBlur={handleBlur}label="Delivery Charge 950gm*" />
                                        <Field as={TextField} type='number'
                                         error={touched.charge1450&& errors.charge1450}
                                         helperText={<ErrorMessage name='charge1450'/>} 
                                         onChange={handleChange} onBlur={handleBlur}name='charge1450' label="Delivery Charge 1450gm*" />
                                        <Field as={TextField} type='number'
                                         error={touched.charge1950&& errors.charge1950}
                                         helperText={<ErrorMessage name='charge1950'/>} 
                                         onChange={handleChange} onBlur={handleBlur} name='charge1950' label="Delivery Charge 1950gm*" />
                                        <Field as={TextField} type='number'
                                         error={touched.cashOn&& errors.cashOn}
                                         helperText={<ErrorMessage name='cashOn'/>} 
                                         onChange={handleChange} onBlur={handleBlur} name='cashOn' label="Cash On Delivery Charge " />
                                       
                                       <FormControl>
                      <InputLabel >Cash On Delivery*</InputLabel>
                    <Field name="cashOnDel" onChange={handleChange}  onBlur={handleBlur}  
                    as={Select} id="cashOnDel" label="Cash On Delivery*">
                        <MenuItem value='Active'>Active</MenuItem>
                        <MenuItem value='Inactive'>Inactive</MenuItem>
                    </Field>
    
                    </FormControl>
    
    
                                        <DialogActions>
                                        
                                            <Button color="danger" onClick={handleReset} >Clear</Button>
                                            <Button color="success" type="submit">Update</Button>
                                        </DialogActions>
                                    </Form>
                                )}
                            </Formik>
    
    
    
                        </Dialog>
        </>
    )}
    export default SettingForm;
