import { Button, Dialog, DialogActions, DialogTitle, Typography, Box, TextField } from "@mui/material";
import { Formik, Form, ErrorMessage, FieldArray, Field, } from 'formik';
import * as Yup from 'yup';

import style from '@/app/style/product.module.css'

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


interface ContentValue {
    title: string,
    content: { value: string }[],
}
interface contentProps{
    open: boolean;
    close: ()=> void;
}
const validationSchema = Yup.object({
    content: Yup.array().of(
        Yup.object({
            value: Yup.string().required('required')
        })
    )
})

const ContentForm:React.FC<contentProps> =({open,close})=>{
    
    const initialValues: ContentValue = { title: '', content: [{ value: '' }] };

    return(
        <>
        <Dialog
                open={open}
                onClose={close}
                PaperProps={{
                    style: { maxWidth: '90vw' },
                }}>
                <DialogTitle className={style.showDialog} color='slateblue'>Add Content
                    <Button sx={{ display: 'contents' }} onClick={close} ><HighlightOffIcon /></Button>
                </DialogTitle>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    enableReinitialize

                    onSubmit={(values) => {
                        console.log(values)
                        // handleSubmitForm(values)
                    }}>{({ values, errors, touched, handleBlur, isSubmitting, handleChange, handleReset, isValid, dirty }) => (

                        <Form>
                            <Box sx={{ display: 'block', padding: '23px' }}>
                                <Field id="title" name="title" as='select'
                                    className={style.selects}>
                                    <option value='help center'>help center</option>
                                    <option value='help center'>help center </option>
                                    <option value='terms and condition policy'>terms and condition policy</option>
                                    <option value='cancellation policy'>cancellation policy</option>
                                    <option value='privacy policy'>privacy policy</option>
                                    <option value='cow ambulance & helpline number'>cow ambulance & helpline number</option>
                                </Field>

                                <FieldArray name="content">
                                    {({ remove, push }) => (
                                        <div>
                                            <Typography variant="h5"
                                                color='slateblue'
                                                sx={{ paddingBottom: '5px' }}>Content body:</Typography>

                                            {values.content.map((_, index) => (
                                                <Box key={index}
                                                    sx={{ display: 'flex', gap: '3px', }} >
                                                    <Box sx={{ width: '472px', marginBottom: '15px' }}>
                                                        <Field
                                                            className={style.FieldTextarea}
                                                            as="textarea"
                                                            // id="content"
                                                            placeholder="Content"
                                                            name={`content[${index}].value`}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur} />
                                                        {errors.content && touched.content ?
                                                            (<Typography color='error'>{<ErrorMessage name={`content[${index}].value`} />}</Typography>) : null}
                                                    </Box>
                                                    <Box sx={{ marginTop: '28px' }}>
                                                        <Button
                                                            onClick={() => push({ value: '' })}
                                                            color="success" sx={{ display: 'contents' }}>
                                                            <AddCircleOutlineIcon />
                                                        </Button>
                                                        <Button onClick={() => remove(index)}
                                                            sx={{ display: "contents" }}
                                                            disabled={values.content.length === 1}
                                                            color='error'>
                                                            <RemoveCircleOutlineIcon />
                                                        </Button></Box>
                                                </Box>
                                            ))}
                                        </div>)}
                                </FieldArray>

                                <Box className={style.contentBottomButton}>
                                    <Button color="error"
                                        variant="contained"
                                        onClick={handleReset}>clear</Button>
                                    <Button type="submit" disabled={isSubmitting} variant="contained" color="success">
                                        {/* {isEditing ? 'Update' : 'Submit'} */}
                                        Submit
                                        </Button>
                                </Box>
                            </Box>
                        </Form>)}
                </Formik> </Dialog>
        </>
    )
}
export default ContentForm;