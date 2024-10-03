'use client'
import { Dialog, Box, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography } from "@mui/material";
import style from "@/app/style/dashboard.module.css"
import { Formik, Form, Field, FieldArray, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



interface FormDialogProps {
        open: boolean;
        close: () => void;
        onSubmit: (values: FormValues) => void;
      
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



const   CategoryForm:React.FC<FormDialogProps> =({open,close,onSubmit})=>{
   
    const initialValues: FormValues = { category: '', subcategory: [{ value: '' }] };
   

   

    return(
        <>
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
          onSubmit={(values) => {
            onSubmit(values);
          //  console.log(values)
          
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
export default CategoryForm;