import React from "react";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "./../../utils/axiosWithAuth";
import * as Yup from "yup";
import "./SignUp.scss";

const SignUpForm = ({ values, touched, errors }) => {
  return (
    <div className="signin-container">
      <h2 id="register-text">Register for Safe Routes</h2>
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
            Please accept our{" "}
            <a href="https://www.google.com">Terms and conditions</a>
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
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ email, password, terms }) {
    return {
      email: email || "",
      password: password || "",
      terms: terms || false
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
    // .matches(
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm,
    //   "Your password sucks"
    // )
  }),
  handleSubmit(values, {props}) {
    console.log(values);
    console.log({ email: values.email, password: values.password });
    axiosWithAuth()
      .post("/auth/register", {
        email: values.email,
        password: values.password
      })
      .then(res => {
				console.log(res);
				localStorage.setItem("token",res.data.data);
				props.props.history.push("/routes")
      })
      .catch(err => {
        console.error("error", err);
      });
  }
})(SignUpForm);

export default FormikSignUpForm;
