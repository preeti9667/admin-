"use client"
import Layout from "@/app/component/Layout"
import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import styles from '@/app/style/product.module.css'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Table } from '@mui/joy'
import { useEffect, useState } from "react";
import *as Yup from 'yup'
import { Form, Field, FieldArray, Formik ,ErrorMessage} from "formik";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CircularProgress from '@mui/material/CircularProgress';
import { text } from "stream/consumers";
interface Brand {
    name: string,
    description: { value: string }[],
}

export default function Brands() {
    const [open, setOpen] = useState(false)
    const [formValues,setFormValue]=useState<Brand[]>([])
    const [loading, setLoading] = useState(false)
    const [dialogShow, setDialogShow] = useState(false)
    const [dialogDelete,setDialogDelete] = useState(false)
    const [currentEntry, setCurrentEntry] = useState<Brand>({ name: '', description: [{ value: '' }] });
    const [editing, setEditing] = useState(false)
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [selectedDescription, setSelectedDescription] = useState<{ value: string }[]>([]);
    const [brandName, setBrandName] = useState<string>('')

    const initialValues: Brand = { name: '', description: [{ value: '' }] }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),

        description: Yup.array().of(
            Yup.object({
                value: Yup.string().required('This field is required')
            })
        )


    })

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setEditing(false)
        setCurrentEntry(initialValues)
        setEditIndex(null)
    }
    const handleLoading=()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    }
    const handleSubmit = (values: Brand) => {
            if(editing && editIndex !== null){
                const updatedValues = formValues.map((entry, index) =>
                    index === editIndex ? values : entry
                );
            setFormValue(updatedValues)
            localStorage.setItem('passValue',JSON.stringify (updatedValues))
            } else{
            setFormValue([...formValues,{...values}])
            localStorage.setItem('passValue',JSON.stringify([...formValues, {...values}]))
    }handleClose()
}
    useEffect(()=>{
        const passValue = localStorage.getItem('passValue');
        if(passValue){
            const passValues = JSON.parse(passValue)
            setFormValue(passValues)
        }

    },[])

    const handleEdit=(index : number)=>{
        setCurrentEntry(formValues[index])
        setEditing(true)
        setEditIndex(index)
        handleOpen()
    }
    const handleDelete=(index: number)=>{
        setDialogDelete(true)
        setEditIndex(index)

    }
    const handleShow=(description:{value: string}[], name:string)=>{
       setSelectedDescription(description)
      setBrandName(name)
        setDialogShow(true)

    }
    const handleDialogShow =()=>{
        setDialogShow(false)
    }
    const handleDeleteNo=()=>{
        setDialogDelete(false)

    }
    const handleDeleteYes=(index : number)=>{
        const Delete = formValues.filter((_,i)=> i !== index);
            setFormValue(Delete)
            localStorage.setItem('passValue',JSON.stringify (Delete))
            setDialogDelete(false)

    }
    return (
        <>
            <Layout>
                <Box className='product'>
                    <Typography className='productTitle' variant="h5">BRANDS</Typography>
                    <Box className={styles.productFlexTop}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <Button className={styles.categoryFlexTopButton} onClick={handleOpen}>+Add Brands</Button>
                            <Button className={styles.rotateButton} onClick={handleLoading}>
                                <RotateRightIcon />
                                </Button>
                        </Box>
                        <Box className={styles.totalProducts}>Contents:{formValues.length}</Box>
                    </Box>
                    <Box className={styles.buttonCircularProgress}>
                        {loading && (<CircularProgress
                        thickness={2}
                        color="secondary"
                        size={70}/> )}
                    </Box>
                    <hr /><hr />
                    <Table className='ProductName'>
                        <thead>
                            <tr style={{ fontSize: '17px' }}>
                                <th>S.N.</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formValues.map((text,index)=>(
                                     <tr  key={index}>
                                        <td>{index + 1}</td>
                                <td>{text.name}</td>
                                    <td>
                                        {
                                            text.description.map((text,index)=>(
                                                <td key={index}>{text.value}</td>
                                            ))
                                        }
                                    </td>
                                    <td>
                                <Button  onClick={() => handleEdit(index)} 
                                        color="success" sx={{display:'contents'}}><EditIcon/></Button>
                                <Button  onClick={()=>handleShow(text.description,text.name)} 
                                    sx={{display:'contents', color:'chocolate'}}><VisibilityIcon/></Button>
                                <Button onClick={() => handleDelete(index)} 
                                color="error" sx={{display:'contents'}}><DeleteIcon/></Button>
                                </td>
                            </tr>     
                            ))}
                           
                        </tbody>
                    </Table>
                </Box>
                        
                        <Dialog open={dialogShow} onClose={handleDialogShow} fullWidth>
                        <DialogTitle className={styles.showDialog} color='slateblue'>
                        {brandName}
                <Button sx={{ display: 'contents' }} 
                onClick={handleDialogShow} ><HighlightOffIcon /></Button>  
                </DialogTitle>
                <DialogActions sx={{height:'300px', display:'inline-block'}}>
                    {selectedDescription.map((text,index)=>(
                            <div key={index}>{text.value}</div>)) }
                </DialogActions>
                        </Dialog>

                        <Dialog open={dialogDelete}>
                            <DialogTitle>Are You Sure</DialogTitle>
                            <DialogActions>
                                <Button onClick={handleDeleteNo}>No</Button>
                                <Button onClick={()=>
                                    {
                                        if(editIndex !== null){
                                             handleDeleteYes(editIndex)
                                        } }}>Yes</Button>
                            </DialogActions>
                        </Dialog>

                <Dialog open={open}
                    onClose={handleClose} PaperProps={{
                        style: { width: '90vw' },
                    }}>
                    <DialogTitle
        className={styles.showDialog} color='slateblue'>{editing? 'Update Brand':'Add Brands'} 
                        <Button sx={{ display: 'contents' }} onClick={handleClose} ><HighlightOffIcon /></Button>
                    </DialogTitle>
                    <Formik
                        initialValues={currentEntry}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSubmit(values)
                            console.log(values)
                            handleClose()
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
                                                {editing ? 'Update' : 'Submit'}
                                                {/* submit */}
                                            </Button>
                                        </Box>
                                    </DialogActions>

                                </Form> </Box>
                        )}
                    </Formik>
                </Dialog>
            </Layout>
        </>
    )
}