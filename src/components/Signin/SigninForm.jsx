import React,{useState, useEffect} from 'react';
import axiosWithAuth from "./../../utils/axiosWithAuth";
import styled from "styled-components";
import {withFormik, Form, Field, yupToFormErrors} from 'formik';
import * as Yup from 'yup'


const InputWrap = styled.div `
    display: flex;
    justify-content:center;
    flex-direction:column;
    background-color:#494972;
    height:600px ;
    margin:0 22%;  
    border-radius:10px;

`
const InputContainerForm = styled.div`


`


const Signin =({errors,touched})=> {


    return (
    <InputWrap> 
        <h2 className="signTitle">Sign In</h2>
        <InputContainerForm>
            <h2>User</h2>
            <Field type="email" name="email" placeholder="Email"  className="emailInput"/>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <h2>Password</h2>
            <Field type="password" name="password" placeholder="Password"className="passwordInput" />
            {touched.password && errors.password && <p>{errors.password}</p>}
            <div className="buttonContainer">       
                <button type="submit" className="loginButton">Login</button>
                <button type="submit"className="signupButton">Sign Up</button>
            </div>      

        </InputContainerForm>
    </InputWrap>
    )
}

const FormikSignin = withFormik({
    mapPropsToValues({email,password}) {
        return {
            email: email || '',
            password: password || '',
        }
    },
    handleSubmit(values){
      axiosWithAuth()
        .post( values)
        .then(response => {
            
        })
        .catch(error => console.log('You have an ERROR', error))
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
        .email("Please enter a valid email address")
        .required("You must enter an email address."),
      password: Yup.string()
        .required("You must enter a valid password")
        .min(8, "Your password must be no less than 8 characters long")
        .max(20, "Your password must be no more than 20 characters long")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm,
          "Your password sucks"
        )
     }),

})(Signin)

export default FormikSignin;