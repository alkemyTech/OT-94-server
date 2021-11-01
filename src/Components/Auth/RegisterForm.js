import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../FormStyles.css';

const RegisterForm = () => {
    const [msjPasswordRepeatError, setMsjPasswordRepeatError] = useState(false)
    const validation = {
        name_lastName: /^[a-zA-Z\s]{3,25}$/,
        password: /(?=(.*[0-9]))(?=(.*[a-zA-Z]))(?=.*[\!@#$%&/()\\[\]{}\-_+='|:;<>,./?])(?=.*).{6,}$/,
        email: /^[0-9a-zA-Z._-]+@[0-9a-zA-Z._-]+\.[a-z\.]{2,6}$/
    }
    return (
        <div>
            <Formik initialValues={{
                name: "",
                lastName: "",
                email: "",
                password: "",
                repeatPassword: ""
            }}
                validate={(values) => {
                    let errors = {};
                    if (!validation.email.test(values.email)) {
                        errors.email = "Error, you must complete the email";
                    }
                    if (!validation.password.test(values.password)) {
                        errors.password = "Error, it must have a minimum length of 6 characters, and contain at least one number, one letter and one symbol";
                    }
                    if (!validation.name_lastName.test(values.name)) {
                        errors.name = "Error, must only contains letters in name"
                    }
                    if (!validation.name_lastName.test(values.lastName)) {
                        errors.lastName = "Error, must only contains letter in last name"
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    if (values.password !== values.repeatPassword) {
                        setTimeout(() => {
                            setMsjPasswordRepeatError(false);
                        }, 2000)
                        return setMsjPasswordRepeatError(true);
                    }
                    const USERLOGGED = {
                        name: values.name,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password
                    }
                    return USERLOGGED;
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
                            <label id="labelLastName">Last name: </label>
                            <Field className="input-field" id="labelLastName" name="lastName" type="text" placeholder="Your lastName" />
                            <ErrorMessage name="lastName" component={() => <p>{errors.lastName}</p>} />
                        </div>
                        <div>
                            <label id="labelEmail">Email: </label>
                            <Field className="input-field" id="labelEmail" name="email" type="email" placeholder="Your Email" />
                            <ErrorMessage name="email" component={() => <p>{errors.email}</p>} />
                        </div>
                        <div>
                            <label id="labelPassword">Password: </label>
                            <Field className="input-field" id="labelPassword" name="password" type="password" placeholder="Your password" />
                            <ErrorMessage name="password" component={() => <p>{errors.password}</p>} />
                        </div>
                        <div>
                            <label id="labelRepeatPassword">Repeat Password: </label>
                            <Field className="input-field" id="labelRepeatPassword" name="repeatPassword" type="password" placeholder="Repeat password" />
                            <ErrorMessage name="repeatPassword" component={() => <p>{errors.repeatPassword}</p>} />
                        </div>
                        <div>
                            <button className="submit-btn" type="submit">Register</button>
                            {msjPasswordRepeatError ? <p>Error, check the data</p> : null}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm;