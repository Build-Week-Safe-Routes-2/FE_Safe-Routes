import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { withFormik, Form, Field } from 'formik';
import styled from 'styled-components';
import  './SignIn.scss'
import * as Yup from 'yup'
import rectangle from './images/Rectangle.png'
import rec2 from './images/rec2.png'
import rec3 from './images/rec3.png'


const SigninForm =({errors,touched})=> {


    return (
    <div> 
        
        <Form className="formWrap">
            <Field type="email" name="email" placeholder="Email" className="emailInput"/>
            {touched.email && errors.email &&<p>{errors.email}</p>}
            <Field type="password" name="password" placeholder="Password"className="passwordInput" />
            {touched.password && errors.password && <p>{errors.password}</p>}
            <div className="buttonContainer">       
                <button type="submit" className="loginButton">Login</button>
                <button type="submit"className="signupButton">Sign Up</button>
            </div>      

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