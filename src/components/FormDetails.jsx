import React from 'react'
import { Field, ErrorMessage } from 'formik';


const FormDetails = () => {
  return (
      <div>
           <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>
    </div>
  )
}

export default FormDetails