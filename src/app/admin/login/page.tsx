"use client"
import React, { useState } from "react";
import style from '@/app/style/login.module.css'
import { TextField, Button, Box , Alert, Typography} from '@mui/material';
import {useFormik} from 'formik'
import *as Yup  from 'yup'
import { useRouter } from "next/navigation";
// import { singUpSchema} from '@/app/admin/schemas/page';
import Face2Icon from '@mui/icons-material/Face2';
  const initialValues ={
    admin: '',
    password: '',
  }
  
  const singUpSchema =Yup.object({
    admin: Yup.string().min(4).required("Admin id is required"),
    password:Yup.string().min(6).required('Password is required'),
})

    
const LoginRoute = () => {
  const router = useRouter();
  const {values, handleBlur,handleChange, handleSubmit, resetForm, errors, touched , isValid, dirty, isSubmitting} = useFormik({
  initialValues:  initialValues,
  validationSchema:  singUpSchema,

  onSubmit :   async(values)=>{
    console.log(values)
   fetch('http://localhost:4000/admin/login',{

      method: "POST",

      // headers:{
      //   "accept": "application/Json",
      //   "content-Type" : "application/Json"
      // },
      body:JSON.stringify({adminId: values.admin, password: values.password})
    })
   
      .then(response => {
        console.log(response);
        if (response.ok) {
          return router.push('../admin/dashboard')
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(values => {
        resetForm(); // Reset the form after successful submission
      })
      .catch(error => {
        console.error('Error:', error);
      });
  // })
  
  }
  
  })

    return (
        <>
            <Box className={style.flex}>
                <Box className={style.box}>
                  <Typography  variant="h3" className={style.formStyle}>WELCOME</Typography>
                  <Typography>
                    <Face2Icon className={style.formStyleIcon} />
                  </Typography>
                    <form className={style.formInput} onSubmit={handleSubmit} >
                       
                        <TextField
                        //  id="outlined-basic" 
                         className={style.input}
                          label="Id" 
                          variant="outlined"
                          name="admin"
                          value={values.admin}
                          onChange={handleChange}
                          onBlur={handleBlur}
                         />

                         {errors.admin && touched.admin ?
                         (<p className={style.inputErrorStyle}>{errors.admin}</p>)
                         : null}
                        
                        <TextField 
                        // id="outlined-basic"
                         label="Password"
                         type="password"
                          variant="outlined"
                           className={style.input}
                           name="password"
                           value={values.password}
                           onChange={handleChange}
                           onBlur={handleBlur}
                          />
                             {errors.password && touched.password ?
                             (<p className={style.inputErrorStyle}> {errors.password} </p>)
                             : null}
                    <Button type="submit" 
                     className={style.loginBtn}
                       variant="contained" 
                        disabled={!(isValid && dirty)} 
                        >
                            Log In
                        </Button>
        
                    </form>

                
                </Box>
            </Box>
        </>

    );
}

export default LoginRoute;