"use client"
import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogTitle, Typography, Box, TextField } from "@mui/material";
import { Formik, Form, ErrorMessage, FieldArray, Field, } from 'formik';
import * as Yup from 'yup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import style from '@/app/style/product.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import styles from '@/app/style/product.module.css'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Table } from '@mui/joy'

interface ContentValue {
    title: string,
    content: { value: string }[],
}
const ContentForm: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [formValues, setFormValues] = useState<ContentValue[]>([])
    const [currentEntry, setCurrentEntry] = useState<ContentValue>({ title: '', content: [{ value: '' }] });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(false)
    const [deletes, setDeletes] = useState(false)
    const [selectedName, setSelectedName] = useState<{ value: string }[]>([]);
    const [showDialog, setShowDialog] = useState(false)


    const validationSchema = Yup.object({
        content: Yup.array().of(
            Yup.object({
                value: Yup.string().required('required')
            })
        )
    })

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setIsEditing(false);
        setCurrentEntry(initialValues)
        setEditIndex(null);
    }

    useEffect(() => {
        const passwords = localStorage.getItem("passwords")
        if (passwords) {
            const passValue = JSON.parse(passwords)
            setFormValues(passValue)

        }
    }, []);

    const handleSubmitForm = (values: ContentValue) => {
        if (isEditing && editIndex !== null) {
            const updatedEntries = formValues.map((entry, index) =>
                index === editIndex ? values : entry
            );
            setFormValues(updatedEntries);
            localStorage.setItem('passwords', JSON.stringify(updatedEntries))


        } else {
            setFormValues([...formValues,  {...values }])
            localStorage.setItem("passwords", JSON.stringify([...formValues, { ...values }]))

        }
        handleClose();

    }

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const handleEdit = (index: number) => {
        setCurrentEntry(formValues[index]);
        setIsEditing(true);
        setEditIndex(index);
        handleOpen();
    };
    const handleDelete = (index: number) => {
        setEditIndex(index);
        setDeletes(true)
      

    }
    const handleDeletes = (index: number) => {
        const updatedEntries = formValues.filter((_, i) => i !== index);
        setFormValues(updatedEntries);
        localStorage.setItem('passwords', JSON.stringify(updatedEntries))
        setDeletes(false)
       
    }

    const handleNoDelete = () => {
        setDeletes(false)
        setEditIndex(null)
    }

    const handleShow = (content: { value: string }[]) => {
        setSelectedName(content)
            setShowDialog(true)
    }
    const showClose = ()=>{
        setShowDialog(false)
    }
    const initialValues: ContentValue = { title: '', content: [{ value: '' }] };
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: { maxWidth: '90vw' },
                }}>
                <DialogTitle className={style.showDialog} color='slateblue'>Add Content
                    <Button sx={{ display: 'contents' }} onClick={handleClose} ><HighlightOffIcon /></Button>
                </DialogTitle>
                <Formik initialValues={currentEntry}
                    validationSchema={validationSchema}
                    enableReinitialize

                    onSubmit={(values) => {
                        console.log(values)
                        handleSubmitForm(values)
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
                                                            className={styles.FieldTextarea}
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
                                        {isEditing ? 'Update' : 'Submit'}</Button>
                                </Box>
                            </Box>
                        </Form>)}
                </Formik> </Dialog>
            <Box className='product'>
                <Typography variant="h5" className='productTitle'>CONTENTS</Typography>
                <Box className={styles.productFlexTop}>
                    <Box sx={{ display: 'flex', gap: '15px' }}>
                        <Button className={styles.categoryFlexTopButton} onClick={handleOpen}>
                            +Add New Content
                        </Button>
                        <Button onClick={handleClick} className={styles.rotateButton}>
                            <RotateRightIcon />
                        </Button>
                    </Box>
                    <Box
                        className={styles.totalProducts}>Content:{formValues.length}
                    </Box>
                </Box>
                <Box className={styles.buttonCircularProgress}>
                    {loading && (<CircularProgress
                        thickness={2}
                        color="secondary"
                        size={70}
                    />)}
                </Box>
                <hr /><hr />

                <Table className='ProductName'>
                    <thead style={{ fontSize: '18px' }}>
                        <tr>
                            <th>S.N.</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Edit</th>
                            <th>Show</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '17px' }}>
                        {
                            formValues.map((entry, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{entry.title}</td>
                                    <td>
                                        {
                                            entry.content.map((entry, index) => (
                                                <td key={index} style={{ display: 'flex' }}>
                                                    {entry.value}
                                                </td>
                                            ))
                                        }</td>

                                    <td>
                                        <Button 
                                        onClick={() => handleEdit(index)} 
                                        color="success" sx={{display:'contents'}} >< EditIcon /></Button></td>
                                    <td><Button 
                                    onClick={() => handleShow(entry.content)} 
                                    sx={{display:'contents', color:'chocolate'}}><VisibilityIcon /></Button></td>

                                    <td>
                                        <Button onClick={() => handleDelete(index)} color="error" sx={{display:'contents'}}>
                                            < DeleteIcon />
                                        </Button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Box>  <Dialog open={deletes} onClose={handleNoDelete}>
                <DialogTitle>Are You Sure</DialogTitle>
                <DialogActions>
                    <Button onClick={handleNoDelete}>No</Button>
                    <Button
                        onClick={() => {
                            if (editIndex !== null) {
                                handleDeletes(editIndex);
                            }
                        }}>Yes</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={showDialog} onClose={showClose} fullWidth  >
               
                <DialogTitle className={style.showDialog} color='slateblue'>Money Refund
                <Button sx={{ display: 'contents' }} onClick={showClose} ><HighlightOffIcon /></Button>   
                </DialogTitle>
                        <DialogActions sx={{height:'300px', display:'inline-block'}}>
                {selectedName.map((content, index) => (
                    <div key={index}>{content.value}</div>
                ))}
                </DialogActions>
            </Dialog>

        </>)
}
export default ContentForm;