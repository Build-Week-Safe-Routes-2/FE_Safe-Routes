import React from "react";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "./../../utils/axiosWithAuth";
import * as Yup from "yup";

const SignUpForm = ({ values, touched, errors }) => {
  return (
    <div>
      <Form>
        <label name="username">
          Enter your Email Address:
          <Field type="email" name="username" placeholder="Enter your Email" />
          {touched.username && errors.username && <p>{errors.username}</p>}
        </label>
        <label name="password">
          Enter your Password:
          <Field
            type="password"
            name="password"
            placeholder="Choose your password"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </label>
        <label name="terms">
          <Field type="checkbox" name="terms" checked={values.terms} required />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ email, password, terms }) {
    return {
      username: email || "",
      password: password || "",
      terms: terms || false
    };
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
  handleSubmit(values) {
		console.log(values)
		console.log({username: values.username, password: values.password})
    axiosWithAuth()
      .post("/auth/register", {username: values.username, password: values.password})
      .then(res => {
				console.log(res)
      })
      .catch(err => {
        console.error("error", err);
      });
  }
})(SignUpForm);

export default FormikSignUpForm;
