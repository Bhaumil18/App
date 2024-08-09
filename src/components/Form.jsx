import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormDetails from './FormDetails';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const FormPage = () => {
    const initialValues = {
        name: '',
        email: '',
    };

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <FormDetails />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FormPage;
