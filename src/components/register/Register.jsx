import React from "react";
import "./register.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Must be greater than 5 character")
        .required("Required"),
      contact: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required("A phone number is required"),
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
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      agree: Yup.boolean()
        .required("The terms and conditions must be accepted.")
        .oneOf([true], "The terms and conditions must be accepted."),
    }),
  });
  return (
    <div className="register">
      <div className="container">
        <span>Register</span>
        <form onSubmit={formik.handleSubmit}>
          <div className="field">
            <label>
              Fullname:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter FullName"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.name && formik.errors.name ? (
              <div className="errorMessage">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="field">
            <label>
              Phone:
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Enter Contact"
                onChange={formik.handleChange}
                value={formik.values.contact}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.contact && formik.errors.contact ? (
              <div className="errorMessage">{formik.errors.contact}</div>
            ) : null}
          </div>
          <div className="field">
            <label>
              Email:
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
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
                placeholder="Enter Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.password && formik.errors.password ? (
              <div className="errorMessage">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="field">
            <label>
              ConfirmPassword:
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="errorMessage">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          <label>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              onChange={formik.handleChange}
              value={formik.values.agree}
            />
            I agree to all the
            <strong>Terms and Conditions</strong>
          </label>
          {formik.touched.agree && formik.errors.agree ? (
            <div style={{ color: "var(--color-red)" }}>
              {formik.errors.agree}
            </div>
          ) : null}

          <button type="submit" formNoValidate>
            Register
          </button>
        </form>
        <div>
          <p>Already have an account? </p>
          <Link to="/">
            <button className="loginButton">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
