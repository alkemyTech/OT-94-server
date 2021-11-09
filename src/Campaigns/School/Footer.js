import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

const Footer = () => {
  const VALIDATION = {
    name: /^[a-zA-Z\s]{3,}$/,
    email: /^[0-9a-zA-Z\._-]+@[0-9a-zA-Z\._-]+\.[a-z\.]{2,6}$/,
    message: /^$/
  }
  return (
    localStorage.getItem("formu-footer") ? null :
      <div>
        <Formik initialValues={{
          name: "",
          email: "",
          message: ""
        }}
          validate={(values) => {
            let errors = {};
            if (!VALIDATION.name.test(values.name)) {
              errors.name = "Error, it must only contains letters and a minimum length of 3 characters."
            }
            if (!VALIDATION.email.test(values.email)) {
              errors.email = "Error, you must complete the email.";
            }
            if (VALIDATION.message.test(values.message)) {
              errors.message = "Error, you need complete this field."
            }
            return errors;
          }}
          onSubmit={(values) => {
            const DATA = {
              name: values.name,
              email: values.email,
              message: values.message
            }
            localStorage.setItem("formu-footer", true);
            return DATA;
          }}
        >
          {({ errors }) => (
            <Form className="form-container">
              <div>
                <label id="labelName">Name: </label>
                <Field className="input-field" id="labelName" name="name" type="text" placeholder="Your name" />
                <ErrorMessage name="name" component={() => <p>{errors.name}</p>} />
              </div>
              <div>
                <label id="labelEmail">Email: </label>
                <Field className="input-field" id="labelEmail" name="email" type="email" placeholder="Your Email" />
                <ErrorMessage name="email" component={() => <p>{errors.email}</p>} />
              </div>
              <div>
                <label id="labelMessage">Message: </label>
                <Field className="input-field" id="labelMessage" name="message" as="textarea" />
                <ErrorMessage name="message" component={() => <p>{errors.message}</p>} />
              </div>
              <div>
                <button className="submit-btn" type="submit">Send</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
  );
}

export default Footer;