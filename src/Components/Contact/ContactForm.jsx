import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ContactForm() {

    return(
        <div>
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
                    }else if(!values.email.includes('@')) {
                        errors.email = 'La dirección de correo debe incluir un @'
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
                    <Form>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <Field 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ingrese su nombre"
                            />
                            <ErrorMessage name="name" component={() => (<div>{errors.name}</div>)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Ingrese su correo"
                            />
                            <ErrorMessage name="email" component={() => (<div>{errors.email}</div>)} />
                        </div>
                        <div>
                            <label htmlFor="phone">Teléfono</label>
                            <Field 
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Ingrese su telefono"
                            />
                            <ErrorMessage name="phone" component={() => (<div>{errors.phone}</div>)} />
                        </div>
                        <div>
                            <label htmlFor="message">Mensaje</label>
                            <Field 
                                as="textarea"
                                id="message"
                                name="message"
                                placeholder="Ingrese el mensaje"
                            />
                            <ErrorMessage name="message" component={() => (<div>{errors.message}</div>)} />
                        </div>
                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}