import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Main from "../main/Main";
import * as Yup from "yup";
import { useState } from "react";

function Login() {
  const [loggedin, setLoggedin] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          {
            message:
              "Min 8 characters,at least one uppercase,lowercase,specialcharacter & number:",
          }
        )
        .required("Required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setLoggedin(true);
    },
  });
  return (
    <>
      {loggedin ? <Main /> : null}
      <div className="login">
        <div className="container">
          <span>Login</span>
          <form onSubmit={formik.handleSubmit}>
            <div className="field">
              <label>
                Email:
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </label>
              {formik.touched.email && formik.errors.email ? (
                <div className="errorMessage">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="field">
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </label>
              {formik.touched.password && formik.errors.password ? (
                <div className="errorMessage">{formik.errors.password}</div>
              ) : null}
            </div>
            <button type="submit">Login</button>
          </form>
          <div>
            <p>Dont have an account? </p>
            <Link to="/register">
              <button className="registerButton">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
