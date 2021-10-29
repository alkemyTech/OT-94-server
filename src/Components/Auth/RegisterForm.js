import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
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
                        errors.email = "Error, debe completar el email";
                    }
                    if (!validation.password.test(values.password)) {
                        errors.password = "Error, debe tener una longitud mínima de 6 caraceteres, y contener al menos un número, una letra y un símbolo ";
                    }
                    if (!validation.name_lastName.test(values.name)){
                        errors.name = "Error, debe contener solo letras en nombre"
                    }
                    if (!validation.name_lastName.test(values.lastName)){
                        errors.lastName = "Error, debe contener solo letras en apellido"
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
                    <Form>
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
                            <label id="labelEmail">Email </label>
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
                            {msjPasswordRepeatError ? <p>Error, compruebe los datos</p> : null}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
    // const [initialValues, setInitialValues] = useState({
    //     name: '',
    //     lastName: ''
    // })
    
    // const handleChange = (e) => {
    //     if(e.target.name === 'name'){
    //         setInitialValues({...initialValues, name: e.target.value})
    //     } if(e.target.name === 'lastName'){
    //         setInitialValues({...initialValues, lastName: e.target.value})
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(initialValues);
    //     localStorage.setItem('token', 'tokenValueExample')
    // }

    // return (
    //     <form className="form-container" onSubmit={handleSubmit}>
    //         <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Enter name"></input>
    //         <input className="input-field" type="text" name="lastName" value={initialValues.lastName} onChange={handleChange} placeholder="Enter last name"></input>
    //         <button className="submit-btn" type="submit">Register</button>
    //     </form>
    // );
}
 
export default RegisterForm;