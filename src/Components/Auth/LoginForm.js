import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../FormStyles.css';
//import { login } from './userSlice';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';

const LoginForm = () => {
  const validation = {
    password:
      /(?=(.*[0-9]))(?=(.*[a-zA-Z]))(?=.*[\!@#$%&/()\[\]{}\-_+='|:;<>,./?])(?=.*).{6,}$/,
    email: /^[0-9a-zA-Z\._-]+@[0-9a-zA-Z\._-]+\.[a-z\.]{2,6}$/,
  };
  const dispatch = useDispatch();
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
            errors.email = 'Error, you must complete the email';
          }
          if (!validation.password.test(values.password)) {
            errors.password =
              'Error, it must have a minimum length of 6 characters, and contain at least one number, one letter and one symbol';
          }
          return errors;
        }}
        onSubmit={(values) => {
          const USERLOGGED = {
            email: values.email,
            password: values.password,
          };
          //return USERLOGGED;
          dispatch(
            login({
              user: values.email,
              id: 2,
              token: 'asdfa$$%#23piren...s,3#$ADF',
              role: 'administrador',
            })
          );
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
              <label id='labelPassword'>Password: </label>
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
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
