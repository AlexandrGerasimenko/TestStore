import React from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {Link } from 'react-router-dom';
// import market from './marketPage'


const BasicFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  login: Yup.string()
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be longer than 8 characters") 
  .matches(/[A-Za-z]+/ , 'Password must contain at least one letter')
  .matches(/\d/ , 'Password must contain at least one number')
  .matches(/\W/ , 'Password must contain at least one symbol')

    .required("Required")
});

const SignUp = () => (
  <div className="container">
    <Formik
      initialValues={{
        email: "",
        login: "",
        password: ""
      }}
      validationSchema={BasicFormSchema}
      onSubmit={values => {
        localStorage.setItem('login',values.login);
        localStorage.setItem('password',values.password);
        let cart = []
        localStorage.setItem('cart', JSON.stringify(cart))
        
      }}
      render={({ errors, touched }) => (
        <Form className="form-container">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            placeholder="example@gmail.com"
            type="email"
          />

          {errors.email &&
            touched.email && <div className="field-error">{errors.email}</div>}

          <label htmlFor="login">Login</label>
          <Field name="login" placeholder="Alex" type="text" />

          {errors.login &&
            touched.login && (
              <div className="field-error">{errors.login}</div>
            )}

          <label htmlFor="password">Password </label>
          <Field name="password" placeholder="Password should contain at least one number, symbol and letter" type="password" />

          {errors.password &&
            touched.password && (
              <div className="field-error">{errors.password}</div>
            )}

          <button type="submit"> <Link to='/market'>Submit</Link></button>
        </Form>
      )}
    />
  </div>
);

export default SignUp;



