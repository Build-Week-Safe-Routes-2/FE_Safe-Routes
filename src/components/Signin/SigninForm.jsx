import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'


const Signin =({errors,touched})=> {


    return (
    <div> 
        <h2>Sign In</h2>
        <Form>
            <h2>User</h2>
            <Field type="email" name="username" placeholder="Email" />
            {touched.username && errors.username &&<p>{errors.username}</p>}
            <h2>Password</h2>
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
                         
            <button type="submit">Login</button>
            {/* <button type="submit">SignUp</button> */}

        </Form>
    </div>
    )

}

const FormikSignin = withFormik({
    mapPropsToValues({email,password}) {
        return {
            username: user || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
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
						console.log(res)
				})
				.catch(err => console.log('You have an ERROR', err.response))
		}

})(Signin)

export default FormikSignin;