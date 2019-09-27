import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { withFormik, Form, Field } from 'formik';
import styled from 'styled-components';
import  './SignIn.scss'
import * as Yup from 'yup'
import rectangle from './images/Rectangle.png'
import rec2 from './images/rec2.png'
import rec3 from './images/rec3.png'


const SigninForm =({values,errors,touched})=> {


    return (
        <div className="signin-container">
        <h2 id="register-text">Login</h2>
        <Form className="signin-form">
          <Field
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="field"
            
          />
          {touched.email && errors.email && <p>{errors.email}</p>}
  
          <Field
            type="password"
            name="password"
            placeholder="Choose your password"
            className="field"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
  
          <label htmlFor="terms" className="terms-container">
            <small>
              Please accept our <a href="#">Terms and conditions</a>
            </small>
            <Field
              type="checkbox"
              name="terms"
              checked={values.terms}
              required
              className="field-checkbox"
            />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </div>
    )
}

const FormikSignin = withFormik({
    mapPropsToValues({email,password}) {
        return {
            email: email || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
        .email("Please enter a valid email address")
        .required("You must enter an email address."),
      password: Yup.string()
        .required("You must enter a valid password")
        .min(8, "Your password must be no less than 8 characters long")
        .max(20, "Your password must be no more than 20 characters long")
        // .matches(
        //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm,
        //   "Your password sucks"
        // )
		 }),
		
		handleSubmit(values){
			axiosWithAuth()
				.post('/auth/login', values)
				.then(res => {
						console.log(values)
						console.log(res)
				})
				.catch(err => console.log('You have an ERROR', err.response))
		}

})(SigninForm)

export default FormikSignin;