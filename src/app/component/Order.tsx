

// components/FormDialog.tsx
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
// import { singUpSchema} from '@/app/admin/schemas/page';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    message1: Yup.string().required('Required'),
    message2: Yup.string().required('Required'),
  });
interface FormDialogProps {
  open: boolean;
  handleClose: () => void;
  handleFormSubmit: (values: FormValues) => void;
}

interface FormValues {
  message1: string;
  message2: string;
}



const Order: React.FC<FormDialogProps> = ({ open, handleClose, handleFormSubmit }) => {
  const initialValues: FormValues = { message1: '', message2: '' };

  const onSubmit = (values: FormValues) => {
    handleFormSubmit(values);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Form Dialog</DialogTitle>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form>
            <DialogContent>
              <Field
                as={TextField}
                name="message1"
                label="subcategory name"
                fullWidth
                margin="dense"
                error={touched.message1 && !!errors.message1}
                helperText={touched.message1 && errors.message1 ? errors.message1 : ''}
              />
              <Field
                as={TextField}
                name="message2"
                label="category"
                fullWidth
                margin="dense"
                error={touched.message2 && !!errors.message2}
                helperText={touched.message2 && errors.message2 ? errors.message2 : ''}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default Order;
