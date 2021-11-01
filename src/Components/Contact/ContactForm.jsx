import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './contactForm.css';

export default function ContactForm() {

    return(
        <div className="formContainer">
            <h1>Contacto</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}

                validate={(values) => {
                    let errors = {}

                    if(!values.name){
                        errors.name = 'Ingrese su nombre'
                    }

                    if(!values.email){
                        errors.email = 'Ingrese una dirección de correo'
                    }else if(!/^[0-9a-zA-Z\._-]+@[0-9a-zA-Z\._-]+\.[a-z\.]{2,6}$/.test(values.email)) {
                        errors.email = 'Formato inválido. Ejemplo de formato válido: correo@correo.com'
                    }

                    if(!values.phone){
                        errors.phone = 'Ingrese un numero de telefono'
                    }else if(isNaN(values.phone)) {
                        errors.phone = 'Lo que ingresó no es un número'
                    }else if(values.phone.length < 8) {
                        errors.phone = 'El teléfono debe contener al menos 8 numeros'
                    }

                    if(!values.message){
                        errors.message = 'Ingrese su mensaje'
                    }

                    return errors;
                }}


                onSubmit={() => {
                    console.log('Formulario enviado')
                    alert("Mensaje enviado. Pronto nos estaremos poniendo en contacto!")
                }}

            >
                {( {errors} ) => (
                    <Form className="form">
                        <div className="form__section">
                            <label htmlFor="name" className="form__section--label">Nombre</label>
                            <Field 
                                className="form__section--field"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ingrese su nombre"
                            />
                            <ErrorMessage name="name" component={() => (<div className="form__section--error">{errors.name}</div>)} />
                        </div>
                        <div className="form__section">
                            <label htmlFor="email" className="form__section--label">Email</label>
                            <Field 
                                className="form__section--field"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Ingrese su correo"
                            />
                            <ErrorMessage name="email" component={() => (<div className="form__section--error">{errors.email}</div>)} />
                        </div>
                        <div className="form__section">
                            <label htmlFor="phone" className="form__section--label">Teléfono</label>
                            <Field
                                className="form__section--field"
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Ingrese su telefono"
                            />
                            <ErrorMessage name="phone" component={() => (<div className="form__section--error">{errors.phone}</div>)} />
                        </div>
                        <div className="form__section">
                            <label htmlFor="message" className="form__section--label">Mensaje</label>
                            <Field
                                className="form__section--textarea"
                                as="textarea"
                                id="message"
                                name="message"
                                placeholder="Ingrese el mensaje"
                            />
                            <ErrorMessage name="message" component={() => (<div className="form__section--error">{errors.message}</div>)} />
                        </div>
                        <button type="submit" className="form__submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}