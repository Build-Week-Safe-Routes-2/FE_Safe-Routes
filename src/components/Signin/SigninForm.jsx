import React from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import "./SignIn.scss";
import * as Yup from "yup";

const SigninForm = (props) => {
	console.log("FROM SIGN IN FORM",props)
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
        {props.touched.email && props.errors.email && <p>{props.errors.email}</p>}

        <Field
          type="password"
          name="password"
          placeholder="Choose your password"
          className="field"
        />
        {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikSignin = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: props.password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("You must enter an email address."),
    password: Yup.string()
      .required("You must enter a valid password")
      .min(8, "Your password must be no less than 8 characters long")
      .max(20, "Your password must be no more than 20 characters long")
  }),

  handleSubmit(values, {props}) {
    axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        console.log(values);
				localStorage.setItem("token",res.data.data)
				console.log("FROM HANDLE SUBMIT", props)
				props.props.history.push("/routes")
      })
      .catch(err => console.log("You have an ERROR", err.response));
  }
})(SigninForm);

export default FormikSignin;
