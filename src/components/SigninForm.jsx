import React,{useState, useEffect} from 'react';
import axiosWithAuth from 'axios';
import {withFormik, Form, Field, yupToFormErrors} from 'formik';
import * as Yup from 'yup'


const Signin =({errors,touched})=> {


    return (
    <div> 
        <h2>Sign In</h2>
        <Form>
            <h2>User</h2>
            <Field type="email" name="email" placeholder="Email" />
            {touched.email && errors.email &&<p>{errors.email}</p>}
            <h2>Password</h2>
            <Field type="password" name="password" placeholder="Password" />
            {touched.email && errors.email && <p>{errors.password}</p>}
                         

            <button type="submit">Login</button>
            {/* <button type="submit">SignUp</button> */}

        </Form>
    </div>
    )

}

const FormikSignin = withFormik({
    mapPropsToValues({user,password}) {
        return {
            email: user || '',
            password: password || '',
        }
    },
    handleSubmit(values){
      axiosWithAuth()
        .post('url', values)
        .then(response => {
            
        })
        .catch(error => console.log('You have an ERROR', error.response))
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("This field requires a valid email"),
        password: Yup.string().required("This field requires a valid required"),
        
    }),

})(Signin)

export default FormikSignin;