import React, { useEffect, useState } from 'react';
import '../../Components/FormStyles.css';
import categoriesDEMO from './categories.json'; //categorias locales hasta tener el endpoint real
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alert from '../Skeleton/Alert';
import Fade from 'react-reveal/Fade';
import { getDataNewsForm } from '../../Services/NewsService';
// redux
import { showAlerts } from '../../features/alert/alertSlice';
import { useDispatch, useSelector } from 'react-redux';

const NewsForm = () => {
  // redux
  const valueAlert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const [recieveNews, setRecieveNews] = useState(true);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch('/categories')
        .then((res) => res.json())
        .then((res) => setCategories(res));
    };
    getCategories();
  }, []);

  const [initialValues, setInitialValues] = useState({
    title: '',
    content: '',
    category: '',
    file: null,
  });

  const [file, setFile] = useState(null);

  const handleChangeFile = (e) => {
    console.log(e.target.value);
    if (e.target.value.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
      console.log(file);
      //existe un problema que al seleccionar la imagen la primera vez el estado de file permanece en null pero al seleccionar de nuevo la misma u otra imagen ya aparece bien ;;;
    }
    setInitialValues({ ...initialValues, file: file });
  };

  const handleChangeEditor = (event, editor) => {
    const data = editor.getData();
    console.log({ event, editor, data });
    setInitialValues({ ...initialValues, content: data });
  };

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setInitialValues({ ...initialValues, title: e.target.value });
    }
    // if (e.target.name === 'content') {
    //     setInitialValues({ ...initialValues, content: e.target.value })
    // }
    if (e.target.name === 'category') {
      setInitialValues({ ...initialValues, category: e.target.value });
    }
  };

  const sendNewData = (e) => {
    e.preventDefault();
    // validacion de los datos
    if (
      initialValues.content === '' ||
      initialValues.category === '' ||
      initialValues.file === null
    ) {
      alert('todos los campos son obligatorios');
      return;
    } else if (initialValues.title.length < 4) {
      alert('el titulo debe tener mas de 4 caracteres');
      return;
    }

    // consulta
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    };
    fetch('/news', requestInit)
      .then((res) => res.text())
      .catch((error) => dispatch(showAlerts(true)))
      .then((res) => console.log(res));
    console.log(initialValues);
  };

  const sendData = (id) => {
    id.preventDefault();
    // validacion de los datos
    if (
      initialValues.content === '' ||
      initialValues.category === '' ||
      initialValues.file === null
    ) {
      alert('todos los campos son obligatorios');
      return;
    } else if (initialValues.title.length < 4) {
      alert('el titulo debe tener mas de 4 caracteres');
      return;
    }
    // consulta
    const requestInit = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    };
    fetch(`/news/${id}`, requestInit)
      .then((res) => res.text())
      .catch((error) => dispatch(showAlerts(true)))
      .then((res) => console.log(res));
    console.log(initialValues);
  };

  return (
    <div>
      <Fade right>
        <h1 className='title'> Formulario Edición / Creación de Novedades </h1>

        <form
          className='form-container'
          onSubmit={recieveNews ? sendData : sendNewData}
        >
          <input
            className='input-field'
            placeholder='titulo'
            type='text'
            name='title'
            value={initialValues.title || ''}
            onChange={handleChange}
          />

          <CKEditor
            editor={ClassicEditor}
            data=''
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={handleChangeEditor}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />

          <input type='file' onChange={handleChangeFile} />
          {file != null ? <img src={file} alt='img' width='100px' /> : ''}

          <select
            className='select-field'
            name='category'
            value={initialValues.category || ''}
            onChange={handleChange}
          >
            <option value='' disabled>
              {' '}
              Select category{' '}
            </option>

            {categoriesDEMO.map((val) => (
              <option value={val.category} key={val.category}>
                {val.description}
              </option>
            ))}
          </select>

          <button className='submit-btn' type='submit'>
            {' '}
            Send{' '}
          </button>
        </form>
      </Fade>
      {valueAlert.showAlert
        ? Alert({
            showAlert: false,
            title: 'Hubo un error!',
            text: 'Error al realizar peticion desde el servicio',
            type: 'error',
            cancelButton: false,
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            showDenyButton: true,
          })
        : null}
    </div>
  );
};

export default NewsForm;
