import { Dialog, DialogTitle, Button, TextField, DialogActions, Typography } from "@mui/material";
import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik";
import *as Yup from 'yup';
import style from '@/app/style/product.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
interface Product {
    productName: string,
    productNameHindi: string,
    brand: string,
    productPhase: string,
    weight: string,
    categories: string,
    subCategories: string,
    about: { value: string }[],
    hindi1: { value: string }[],
    uses: { value: string }[],
    hindi2: { value: string }[],
    market: string,
    purchase: string,
    selling: string,
    quantity: string,
    offer: string,
}
const singUpSchema = Yup.object({
    productName: Yup.string().required('Product Name is required'),
    productNameHindi: Yup.string().required('Product  Name is required'),
    brand: Yup.string().required('Brand Name is required'),
    productPhase: Yup.string().required('ProductPhase Name is required'),
    weight: Yup.string().required('Weight Name is required'),
    categories: Yup.string().required('Categories Name is required'),
    subCategories: Yup.string().required('subCategories Name is required'),

    about: Yup.array().of(
        Yup.object({
            value: Yup.string().required('Product is required')
        })
    ),

    hindi1: Yup.array().of(
        Yup.object({
            value: Yup.string().required('required')
        })
    ),
    uses: Yup.array().of(
        Yup.object({
            value: Yup.string().required('required')
        })
    ),
    hindi2: Yup.array().of(
        Yup.object({
            value: Yup.string().required('required')
        })
    ),

    market: Yup.string().max(10).required('market price should be greater than 10'),
    purchase: Yup.string().required('purchase price is required'),
    selling: Yup.string().max(10).required('price is required'),
    quantity: Yup.string().required('required'),

})




interface ProductProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (values: Product) => void
}

const ProductsForm: React.FC<ProductProps> = ({ open, onClose, onSubmit }) => {

    const initialValues: Product = {
        productName: '',
        productNameHindi: '',
        brand: '',
        productPhase: '',
        weight: '',
        categories: '',
        subCategories: '',
        about: [{ value: '' }],
        hindi1: [{ value: '' }],
        uses: [{ value: '' }],
        hindi2: [{ value: '' }],
        market: '',
        purchase: '',
        selling: '',
        quantity: '',
        offer: '',
    }

    return (
        <>
            <Dialog open={open} onClose={onClose}
                PaperProps={{
                    style: { maxWidth: '80vw' },
                }}>
                <DialogTitle className={style.showDialog} sx={{ margin: '10px' }}>
                    <Typography variant="h6" sx={{ color: 'blueviolet' }}> Product Details</Typography>
                    <Button sx={{ display: 'contents' }} onClick={onClose} ><HighlightOffIcon color="error" /></Button>
                </DialogTitle>



                <Formik validationSchema={singUpSchema} initialValues={initialValues}
                    onSubmit={(values) => {
                        onSubmit(values)
                    }}>
                    {({ values, handleBlur, handleChange, errors, touched, handleReset }) => (

                        <Form style={{ margin: '0 10px ' }}>
                            <hr /><hr />
                            <div className={style.formStyle}>
                                <h2 className={style.formTitleStyle}>Product info:</h2>
                                <div className={style.threeFieldGrid}>
                                    <Field as={TextField} label='Product Name:*'
                                        name='productName'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.productName && errors.productName}
                                        helperText={<ErrorMessage name='productName' />}

                                    />
                                    <Field as={TextField} label='उत्पाद नाम:*'
                                        name='productNameHindi'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.productNameHindi && errors.productNameHindi}
                                        helperText={<ErrorMessage name='productNameHindi' />}
                                    />

                                    <Field as={TextField} label='Brand:*'
                                        name='brand'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.brand && errors.brand}
                                        helperText={<ErrorMessage name='brand' />}

                                    />

                                </div>
                                <div className={style.fourFieldGrid}>
                                    <Field
                                        as={TextField} label='Product Phase:*'
                                        name='productPhase'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.productPhase && errors.productPhase}
                                        helperText={<ErrorMessage name='productPhase' />}

                                    />

                                    <Field
                                        as={TextField} label='Weight:*' type='number'
                                        name='weight'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.weight && errors.weight}
                                        helperText={<ErrorMessage name='weight' />}

                                    />

                                    <Field
                                        as={TextField}
                                        name='categories' label='Categories:*'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.categories && errors.categories}
                                        helperText={<ErrorMessage name='categories' />}

                                    />

                                    <Field
                                        as={TextField}
                                        name='subCategories' label="subCategories:*"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.subCategories && errors.subCategories}
                                        helperText={<ErrorMessage name='subCategories' />}

                                    />
                                </div>

                                <div>
                                    <h2 className={style.formTitleStyle}> Description in English</h2>

                                    <FieldArray name='about'>
                                        {({ remove, push }) => (
                                            <div>
                                                {values.about.map((_, index) => (
                                                    <div key={index} className={style.fieldArrayStyle}>
                                                        <Field
                                                            as={TextField} className={style.fieldStyle}
                                                            name={`about${[index]}.value`}
                                                            label="line:*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                         
                                                        />
                                                        {/* {errors.about && touched.about ?
                                                            (<Typography color='error'>{<ErrorMessage name={`about[${index}].value`} />}</Typography>) : null} */}

                                                        <div className={style.fieldArrayButton}>

                                                            <Button onClick={() => push({ value: '' })}
                                                                color="success" sx={{ display: 'contents' }}>
                                                                <AddCircleOutlineIcon />
                                                            </Button>
                                                            <Button onClick={() => remove(index)}
                                                                sx={{ display: "contents" }} color="error"
                                                                disabled={values.about.length === 1}>
                                                                <RemoveCircleOutlineIcon />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </FieldArray></div>

                                <div>
                                    <h2 className={style.formTitleStyle}>उत्पाद के बारे में</h2>

                                    <FieldArray name='hindi1'>
                                        {({ remove, push }) => (
                                            <div>
                                                {values.hindi1.map((_, index) => (
                                                    <div key={index} className={style.fieldArrayStyle}>
                                                        <Field className={style.fieldStyle}
                                                            as={TextField}
                                                            name={`hindi1${[index]}.value`}
                                                            label="line:*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur} />

                                                        <div className={style.fieldArrayButton}>
                                                            <Button onClick={() => push({ value: '' })}
                                                                color="success" sx={{ display: 'contents' }}>
                                                                <AddCircleOutlineIcon />
                                                            </Button>
                                                            <Button onClick={() => remove(index)}
                                                                sx={{ display: "contents" }} color="error"
                                                                disabled={values.hindi1.length === 1}>
                                                                <RemoveCircleOutlineIcon />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </FieldArray></div>

                                <div>
                                    <h2 className={style.formTitleStyle}>Uses in English</h2>

                                    <FieldArray name='uses'>
                                        {({ remove, push }) => (
                                            <div >
                                                {values.uses.map((_, index) => (
                                                    <div key={index} className={style.fieldArrayStyle}>
                                                        <Field
                                                            as={TextField} className={style.fieldStyle}
                                                            name={`uses${[index]}.value`}
                                                            label="line:*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur} />

                                                        <div className={style.fieldArrayButton}>
                                                            <Button onClick={() => push({ value: '' })}
                                                                color="success" sx={{ display: 'contents' }}>
                                                                <AddCircleOutlineIcon />
                                                            </Button>
                                                            <Button onClick={() => remove(index)}
                                                                sx={{ display: "contents" }} color="error"
                                                                disabled={values.uses.length === 1}>
                                                                <RemoveCircleOutlineIcon />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>

                                <div>
                                    <h2 className={style.formTitleStyle}> उत्पाद के उपयोग</h2>

                                    <FieldArray name='hindi2'>
                                        {({ remove, push }) => (
                                            <div >
                                                {values.hindi2.map((_, index) => (
                                                    <div key={index} className={style.fieldArrayStyle}>
                                                        <Field
                                                            as={TextField} className={style.fieldStyle}
                                                            name={`hindi2${[index]}.value`}
                                                            label="line:*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur} />

                                                        <div className={style.fieldArrayButton}>
                                                            <Button onClick={() => push({ value: '' })}
                                                                color="success" sx={{ display: 'contents' }}>
                                                                <AddCircleOutlineIcon />
                                                            </Button>
                                                            <Button onClick={() => remove(index)}
                                                                sx={{ display: "contents" }} color="error"
                                                                disabled={values.hindi2.length === 1}>
                                                                <RemoveCircleOutlineIcon />
                                                            </Button>
                                                        </div> </div>
                                                ))}
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>

                                <div >
                                    <h2 className={style.formTitleStyle}>Pricing & Stock</h2>
                                    < div className={style.fourFieldGrid}>
                                        <Field
                                            as={TextField} type='number'
                                            name='market' label='Market Price:*'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.market && errors.market}
                                            helperText={<ErrorMessage name='market' />}
                                        />

                                        <Field
                                            as={TextField} type='number'
                                            name='purchase' label='Purchase Price:*'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.purchase && errors.purchase}
                                            helperText={<ErrorMessage name='purchase' />}
                                            />

                                        <Field
                                            as={TextField} type='number'
                                            name='selling' label='Selling Price:*'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.selling && errors.selling}
                                            helperText={<ErrorMessage name='selling' />}
                                            />

                                        <Field
                                            as={TextField} type='number'
                                            name='quantity' label='Quantity:*'
                                            onChange={handleChange} defaultValue="100"
                                            onBlur={handleBlur}
                                            error={touched.quantity && errors.quantity}
                                            helperText={<ErrorMessage name='quantity' />}
                                            />

                                    </div>
                                </div>
                                <div >
                                    <h2 className={style.formTitleStyle}>Offer Setting</h2>
                                    <Field
                                        as={TextField} className={style.fieldStyle}
                                        name='offer'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        
                                        />

                                </div>
                                <div >
                                    <h2 className={style.formTitleStyle}>Product Images</h2>
                                    <Button sx={{ display: 'contents', }}>
                                        <AddPhotoAlternateIcon
                                            sx={{ fontSize: '67px', color: 'black' }} />
                                    </Button>
                                </div>
                                <DialogActions>
                                    <Button color="error"
                                        variant="contained" onClick={handleReset}
                                    >clear</Button>

                                    <Button type="submit"
                                        variant="contained"
                                        color="success">Submit</Button>
                                </DialogActions>
                            </div>  </Form>
                    )}

                </Formik>


            </Dialog>
        </>
    )
}
export default ProductsForm;