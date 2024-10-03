import { Formik, Form, Field } from "formik";
 import { Avatar, Box, Button, TextField, } from "@mui/material";
 import { styled } from '@mui/material/styles';
import *as Yup from 'yup';

 interface bannerValue {
    url: string,
    image: string,

 }

export default function BannerForm(){
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
   
    const schema = Yup.object({
        url: Yup.string().required(''),
        image: Yup.string().required(''),
    })

    
    const initialValues:bannerValue ={url:'', image:''}
    return(
        <>
        <Formik initialValues={initialValues} validationSchema={schema} 
        onSubmit={(values)=>{
            console.log(values)
        }}>{({handleChange})=>(
              <Form>
                      <Field as={TextField}
                      name='url'
                      label="Click Url" 
                      placeholder='url go to after banner click'
                      variant="outlined"
                      onChange={handleChange} />

                        <Box sx={{width:'85%', height:'8rem', margin:'20px'}}>
                     
                      </Box>
                      <Button
                         component="label"
                         
                         role={undefined}
                         variant="outlined"
                         tabIndex={-1} sx={{position:'static', marginTop:'20px', color:'chocolate', marginBottom:'10px'}}
                       >choose Image
                          <VisuallyHiddenInput type="file" name='image'
                          onChange={handleChange}/>
                       </Button>
                       <Box>
                       <Button type="submit"  variant="contained"
                    color="success">Submit</Button>
</Box>
                     </Form> 

        )

        }


        </Formik>
        </>
    )
}