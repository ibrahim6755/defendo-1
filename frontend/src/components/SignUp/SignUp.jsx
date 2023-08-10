import React from 'react'
import './SignUpStyles.css'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useRegisterUserMutation } from '../../features/auth';
import { Navigate } from 'react-router-dom';

function SignUp() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }


  const [registerUser] = useRegisterUserMutation()

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = async (values, {resetForm}) => {
    
    const newUser = values

    await registerUser(newUser)    

    resetForm();
    // <Navigate to="/" replace={true} />
  }
    
  return (
    <div className="signup-wrapper p-5">
      <div className="row">
        <div className="container">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
              <Form className="form">
                <h1 className="h3 mb-3 fw-normal text-center text-uppercase heading">register</h1>
                <p className='text-center'>Please fill in the information below:</p>
                <div className="display">
                  <div className="inside-form">
                  <Field className='firstname p-1 my-2' type="text" placeholder='First name' name="firstName" />
                {errors.firstName && touched.firstName && <ErrorMessage className="error-message" name="firstName" component="div" />}
                <Field className='lastname p-1 my-2' type="text" placeholder='Last name' name="lastName" />
                {errors.lastName && touched.lastName && <ErrorMessage className="error-message" name="lastName" component="div" />}
                <Field className='email p-1 my-2' type="text" placeholder='Email' name="email" />
                {errors.email && touched.email && <ErrorMessage className="error-message" name="email" component="div" />}
                <Field className='password p-1 my-2' type="password" placeholder='Password' name="password" />
                {errors.password && touched.password && <ErrorMessage className="error-message" name="password" component="div" />}
                <button className='signup-btn mb-3 p-2 py-2 my-1' type="submit">create my account</button>
                <p className='text-center'>Already had account?<Link to="/account/login" className='mx-1'>Login</Link> </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
