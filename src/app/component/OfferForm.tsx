'use client'
import { Button,} from "@mui/joy"
import { Dialog, Select,FormControl,InputLabel, MenuItem,DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Field, Form, Formik, ErrorMessage,} from "formik";
import React, { useState } from "react";
import style from '@/app/style/product.module.css'
import *as Yup from 'yup';

interface formValue {
  name: string;
  checkType: string;
  offerType: string;
  purchase: string;
  offerDiscount: string;
  maxDiscount: string;
  startDate: string;
  endDate: string;
  description: string;
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  offerDiscount: Yup.string().required('Offer Discount is required.'),
  startDate: Yup.string().required('Start Date is required.'),
  endDate: Yup.string().required('End Date is required.'),
  description: Yup.string().required('Description is required.'),
  purchase: Yup.string().required('Purchase is required.'),
  checkType: Yup.string().required('Purchase is required.'),
  offerType: Yup.string().required('Purchase is required.'),
    maxDiscount: Yup.string().when('offerType',{
    is : (val:string) =>  val !== 'fixed',
    then: (schema) => schema.required('Required'),
    otherwise: (schema) => schema.notRequired(),
    }),  
});

interface FormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: formValue) => void;
  initialValue?: formValue;
}



const OfferForm: React.FC<FormProps> = ({ onSubmit, open, onClose,initialValue}) => {
 

  
  const initialValues: formValue = { name: '', checkType: '', offerType: '', purchase: '', offerDiscount: '', maxDiscount: '', startDate: '', endDate: '', description: '', }
  return (
    <>

  
      <Dialog open={open} onClose={onClose}
      PaperProps={{
        style: {maxWidth: '80vw'},
      }}>

        <DialogTitle className={style.showDialog}>
         {initialValue? 'Update Offer' : 'Add Offer'}
          <Button variant="plain"  sx={{ display: 'contents' }}
           onClick={onClose}>
            < HighlightOffIcon color="error" />
          </Button>
        </DialogTitle>

        <Formik initialValues={initialValue || initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSubmit(values);
            onClose();
          }}>
          {({values, handleBlur, handleChange, errors, touched, isValid, dirty, handleReset }) => (
            <Form>
              <DialogContent className={style.offerFormStyle}>

                <Field className={style.offerFormStyleInput} as={TextField}
                  label='Name*' type='text' name='name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.name && errors.name}
                  helperText={<ErrorMessage name='name' />}
                />



                <FormControl>
                <InputLabel>CheckType*</InputLabel>
                <Field name='checkType' onChange={handleChange} onBlur={handleBlur} className={style.fieldSelect}
                  as={Select} id='checkType' label='CheckType'>
                  <MenuItem value='productBased'>ProductBased</MenuItem>
                  <MenuItem value='All'>All</MenuItem> 
                </Field> </FormControl> 


                  <FormControl error={touched.offerType && !!errors.offerType}>
                  <InputLabel >Offer Type*</InputLabel>
                <Field name='offerType' onChange={handleChange}    
                as={Select} id='offerType' label='Offer Type*'>
                    <MenuItem value='percentage'>Percentage</MenuItem>
                    <MenuItem value='fixed'>Fixed</MenuItem>
                </Field>

                </FormControl>



                <Field as={TextField} className={style.offerFormStyleInput}
                  label='Purchase*' type='number' name='purchase'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.purchase && errors.purchase}
                  helperText={<ErrorMessage name='purchase' />}
                />

                <Field as={TextField} className={style.offerFormStyleInput}
                  label='OfferDiscount*' type='number' name='offerDiscount'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.offerDiscount && errors.offerDiscount}
                  helperText={<ErrorMessage name='offerDiscount' />} />

                   
                    {values.offerType !== 'fixed' &&(

                    <Field as={TextField} className={style.offerFormStyleInput}
                      label='MaxDiscount*' type='number' name='maxDiscount'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={touched.maxDiscount && errors.maxDiscount}
                      helperText={<ErrorMessage name='maxDiscount' />}
                       />
             )}

                <Field as={TextField} className={style.offerFormStyleInput}
                  label='StartDate*' type='dateTime-local' name='startDate'
                 onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.startDate && errors.startDate}
                  helperText={<ErrorMessage name='startDate' />} />


                <Field as={TextField} className={style.offerFormStyleInput}
                  label='EndDate*' type='datetime-local' name='endDate'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.endDate && errors.endDate}
                  helperText={<ErrorMessage name='endDate' />} />
              </DialogContent>
              <DialogContent >


                <Field as={TextField}
                  label='Description*' rows={4} name='description' fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.description && errors.description}
                  helperText={<ErrorMessage name='description' />} />
              </DialogContent>


              <DialogActions>
                <Button onClick={handleReset} color="danger">clean</Button>
                <Button type="submit" 
                disabled={!dirty && isValid} color="success">
               {initialValue ? 'Update' : 'Submit'}
                </Button>
              </DialogActions>
            </Form>
          )}

        </Formik>


      </Dialog>
    </>
  )
}
export default OfferForm;
