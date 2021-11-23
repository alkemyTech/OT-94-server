import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';

const TestimonialForm = () => {
  const URL_TESTIMONIAL_CREATION =
    process.env.REACT_APP_URL_TESTIMONIALS_CREATION;
  const URL_TESTIMONIAL_EDITION =
    process.env.REACT_APP_URL_TESTIMONIALS_EDITION;

  const validation = {
    name: /^[a-zA-Z\s]{4,}$/,
    description: /^$/,
    image: /\.(jpg|png)$/i,
  };
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    image: '',
  });
  // petition === true ? POST : PATCH
  const [petition, setPetition] = useState();
  // Error message
  const [errorName, setErrorName] = useState(false);
  const [errorImage, setErrorImage] = useState(false);
  const [errorSendData, setErrorSendData] = useState(false);
  // Check if object has values
  useEffect(() => {
    const OBJECT_VALUE = Object.values(initialValues).filter(
      (data) => data !== ''
    );
    OBJECT_VALUE.length === 0 ? setPetition(true) : setPetition(false);
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setInitialValues({ ...initialValues, name: e.target.value });
      validation.name.test(e.target.value)
        ? setErrorName(false)
        : setErrorName(true);
    } else if (e.target.name === 'image') {
      setInitialValues({ ...initialValues, image: e.target.value });
      validation.image.test(e.target.value)
        ? setErrorImage(false)
        : setErrorImage(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validation.name.test(initialValues.name) &&
      validation.image.test(initialValues.image) &&
      !validation.description.test(initialValues.description)
    ) {
      if (petition === true) {
        axios
          .post(`${URL_TESTIMONIAL_CREATION}`, initialValues)
          .then((response) => response)
          .catch((error) => error);
      } else {
        axios
          .patch(`${URL_TESTIMONIAL_EDITION}/:id`, initialValues)
          .then((response) => response)
          .catch((error) => error);
      }
    } else {
      setErrorSendData(true);
      setTimeout(() => setErrorSendData(false), 2000);
    }
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input
        className='input-field'
        type='text'
        name='name'
        value={initialValues.name}
        onChange={handleChange}
        placeholder='Testimonial Title'
      ></input>
      {errorName ? (
        <p>Error, it must have a minimum length of 4 characters</p>
      ) : null}
      <CKEditor
        className='input-field'
        name='description'
        editor={ClassicEditor}
        data={initialValues.description}
        onChange={(event, editor) => {
          const data = editor.getData();
          setInitialValues({ ...initialValues, description: data });
        }}
      />
      <input type='file' name='image' onChange={handleChange} />
      {errorImage ? <p>Error, image must be in .jpg or .png format</p> : null}
      <button className='submit-btn' type='submit'>
        Send
      </button>
      {errorSendData ? <p>Error, you must complete all the fields</p> : null}
    </form>
  );
};

export default TestimonialForm;
