import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../FormStyles.css';
//import { login } from './userSlice';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';
import Alert from "../Skeleton/Alert"
const LoginForm = () => {
  const [alert, setAlert] = useState(false);
  const validation = {
    password:
      /(?=(.*[0-9]))(?=(.*[a-zA-Z]))(?=.*[\!@#$%&/()\[\]{}\-_+='|:;<>,./?])(?=.*).{6,}$/,
    email: /^[0-9a-zA-Z\._-]+@[0-9a-zA-Z\._-]+\.[a-z\.]{2,6}$/,
  };
  const dispatch = useDispatch();

  function alertFalse() {
    setTimeout(() => {
      setAlert(false)
    }, 2000);
  }
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          let errors = {};
          if (!validation.email.test(values.email)) {
            errors.email = 'Error, debe completar con el formato email correo@correo.com';
          }
          if (!validation.password.test(values.password)) {
            errors.password =
              'Error, debe contener al menos 6 caracteres y contener al menos un numero, una letra y un simbolo';
          }
          return errors;
        }}
        onSubmit={(values) => {
          const USERLOGGED = {
            email: values.email,
            password: values.password,
          };
          if (values.email === 'somosmas@gmail.com' && values.password === 'react94@') {
            dispatch(
              login({
                user: values.email,
                id: 2,
                token: 'asdfa$$%#23piren...s,3#$ADF',
                role: 'administrador',
              })
            );
          } else {
            setAlert(true);
            alertFalse();
          }
        }}
      >
        {({ errors }) => (
          <Form className='form-container'>
            <div>
              <label id='labelEmail'>Email: </label>
              <Field
                className='input-field'
                id='labelEmail'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <ErrorMessage
                name='email'
                component={() => <p>{errors.email}</p>}
              />
            </div>
            <div>
              <label id='labelPassword'>Contraseña: </label>
              <Field
                id='labelPassword'
                className='input-field'
                name='password'
                type='password'
                placeholder='Your password'
              />
              <ErrorMessage
                name='password'
                component={() => <p>{errors.password}</p>}
              />
            </div>
            <div>
              <button className='submit-btn' type='submit'>
                Iniciar sesion
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <Alert
        showAlert={alert}
        title={'Error!'}
        text={'No coincide usuario y/o contraseña'}
        type={'error'}
        cancelButton={false}
        confirmButtonText={'OK'}
        cancelButtonText={'Cancel'}
        showDenyButton={true}

      />

    </div>
  );
};

export default LoginForm;
