import React, {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import './SchoolFooter.css'

const Footer = () => {

  const [formFooter, setFormFooter] = useState()

  function set() {
    setFormFooter(true)
    localStorage.setItem("formu-footer", true)
  }

  useEffect(() => {
    localStorage.getItem("formu-footer") ? setFormFooter(true) : setFormFooter(false)
  }, [])

  const VALIDATION = {
    name: /^[a-zA-Z\s]{3,}$/,
    email: /^[0-9a-zA-Z\._-]+@[0-9a-zA-Z\._-]+\.[a-z\.]{2,6}$/,
    /* message: /^$/ */
  }
  return (
    formFooter ? 
        <div className="text">
              <p>Ya te subscribiste a nuestro newsletter! Muchas gracias!</p>
        </div> 
      :
      <>
        <div className="text">
          <p>Complete este formulario para subscribirse a nuestro newsletter y recibir todas las novedades de la campaña escolar</p>
        </div>
        <div>
          <Formik initialValues={{
            name: "",
            email: "",
            /* message: "" */
          }}
            validate={(values) => {
              let errors = {};
              if (!VALIDATION.name.test(values.name)) {
                errors.name = "Este campo debe contener solo letras, y un mínimo de 3 caracteres."
              }
              if (!VALIDATION.email.test(values.email)) {
                errors.email = "Debe completar este campo con su email.";
              }
              /* if (VALIDATION.message.test(values.message)) {
                errors.message = "Debe completar este campo."
              } */
              return errors;
            }}
            onSubmit={(values) => {
              const DATA = {
                name: values.name,
                email: values.email,
                /* message: values.message */
              }
              /* localStorage.setItem("formu-footer", true); */
              return DATA;
            }}
          >
            {({ errors }) => (
              <Form className="form-container container">
                <div>
                  <label id="labelName" className="label">Nombre: </label>
                  <Field className="input-field name-mail" id="labelName" name="name" type="text" placeholder="Su nombre" />
                  <ErrorMessage name="name" component={() => <p className="error">{errors.name}</p>} />
                </div>
                <div>
                  <label id="labelEmail" className="label">Email: </label>
                  <Field className="input-field name-mail" id="labelEmail" name="email" type="email" placeholder="Su Email" />
                  <ErrorMessage name="email" component={() => <p className="error">{errors.email}</p>} />
                </div>
                {/* <div>
                  <label id="labelMessage" className="label">Mensaje: </label>
                  <Field className="input-field message" id="labelMessage" name="message" as="textarea" />
                  <ErrorMessage name="message" component={() => <p className="error">{errors.message}</p>} />
                </div> */}
                <div>
                  <button className="submit-btn boton-submit" type="submit" onClick={set}>Enviar</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </>
  );
}

export default Footer;