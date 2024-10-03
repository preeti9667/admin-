import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import styles from '@/app/style/product.module.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import *as Yup from 'yup'
import { Form, Field, FieldArray, Formik ,ErrorMessage} from "formik";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
interface Brand {
    name: string,
    description: { value: string }[],
}
interface BrandProps{
    open: boolean;
    close: ()=> void;
}

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),

        description: Yup.array().of(
            Yup.object({
                value: Yup.string().required('This field is required')
            })
        )


    })

const BrandForm:React.FC<BrandProps>=({open,close})=>{
const initialValues: Brand = { name: '', description: [{ value: '' }] }

    return(
        <>
        <Dialog open={open}
                    onClose={close} PaperProps={{
                        style: { width: '90vw' },
                    }}>
                    <DialogTitle
        className={styles.showDialog} color='slateblue'>
            {/* {editing? 'Update Brand':'Add Brands'}  */} Add Brand
                        <Button sx={{ display: 'contents' }} onClick={close} ><HighlightOffIcon /></Button>
                    </DialogTitle>
                    <Formik
                        initialValues={initialValues}
                        
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            // handleSubmit(values)
                            console.log(values)
                            // handleClose()
                        }}>{({ values, handleBlur, handleChange, handleReset,  isSubmitting, touched, errors }) => (
                            <Box>
                                <Form>
                                    <DialogActions sx={{ display: 'block', padding: '23px' }}>
                                        <Field name='name' className={styles.FieldTextarea1}
                                            placeholder="please enter brand name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />{errors.name && touched.name ?
                                     (<Typography color='error' >{<ErrorMessage name='name'/>}</Typography>): null   }
                                        <FieldArray name="description">{({ push, remove }) => (
                                            <Box sx={{marginTop:'20px'}}>
                                                <Typography variant="h5"
                                                    color='slateblue'
                                                    sx={{ paddingBottom: '5px' }}>Brands Description</Typography>
                                                {values.description.map((_, index) => (
                                                    <Box key={index} sx={{ display: 'flex', gap: '3px', }}>
                                                        <Box sx={{ width: '472px', marginBottom: '15px' }}>
                                                            <Field as='textarea' placeholder="description"
                                                             className={styles.FieldTextarea}
                                                            name={`description[${index}].value`}
                                                            onChange={handleChange} onBlur={handleBlur}  />
                                                            {errors.description && touched.description?
                                                           (<Typography color='error'>{<ErrorMessage  name={`description[${index}].value`}/>}</Typography> ): null }
                                                        </Box>
                                                        <Box>
                                                            <Box sx={{ marginTop: '28px' }}>
                                                                <Button
                                                                    onClick={() => push({ value: '' })}
                                                                    color="success" sx={{ display: 'contents' }}>
                                                                    <AddCircleOutlineIcon />
                                                                </Button>
                                                                <Button onClick={() => remove(index)}
                                                                    sx={{ display: "contents" }}
                                                                    disabled={values.description.length === 1}
                                                                    color='error'>
                                                                    <RemoveCircleOutlineIcon />
                                                                </Button></Box>
                                                        </Box>
                                                    </Box>
                                                ))
                                                }
                                            </Box>
                                        )}
                                        </FieldArray>
                                        <Box className={styles.contentBottomButton}>
                                            <Button color="error"
                                                variant="contained"
                                                onClick={handleReset}>clear</Button>
                                            <Button type="submit" disabled={isSubmitting} variant="contained" color="success">
                                                {/* {editing ? 'Update' : 'Submit'} */}
                                                Submit
                                            </Button>
                                        </Box>
                                    </DialogActions>

                                </Form> </Box>
                        )}
                    </Formik>
                </Dialog>
        </>
    )
}
export default BrandForm;