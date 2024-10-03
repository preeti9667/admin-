
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

interface MyFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: FormValues) => void;
  initialValues?: FormValues; // Optional for editing
}

const MyForm: React.FC<MyFormProps> = ({ open, onClose, onSubmit, initialValues }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialValues ? 'Edit Entry' : 'New Entry'}</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues || { name: '', email: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSubmit(values); // Pass values to the parent
            onClose(); // Close the dialog
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="name">
                {({ field, meta }: FieldProps) => (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    margin="normal"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="email">
                {({ field, meta }: FieldProps) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit" color="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default MyForm;



