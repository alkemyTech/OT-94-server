import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../FormStyles.css';
// import { getSlidesList } from "../../features/slides/slidesSlice";
// import { useDispatch, useSelector } from 'react-redux';

export default function SlideForm() {
    // Con el dispatch se hace el llamado a la funcion thunk, y con { slides } tenes los valores
    
    // const dispatch = useDispatch();
    // const { slides } = useSelector((state) => state.slides)
    // useEffect(() => {
    //     dispatch(getSlidesList('https://jsonplaceholder.typicode.com/users'))
    // }, [dispatch])
    // console.log(slides)

    const {REACT_APP_SLIDE_CREATION, REACT_APP_SLIDE_EDITION} = process.env

    let objectRecieved = false;

    return(
        <div>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    order: '',
                    image: ''
                }}

                validate={(values) => {
                    let errors = {}

                    if(!values.name){
                        errors.name = 'Ingrese su nombre'
                    }else if(values.name.length < 4) {
                        errors.name = 'El nombre debe contener 4 caracteres como mínimo'
                    }

                    if(!values.description){
                        errors.description = 'Ingrese una descripción'
                    }

                    if(!values.order){
                        errors.order = 'Ingrese un numero de orden'
                    }

                    if(!values.image){
                        errors.image = 'Ingrese una imagen'
                    }else if(!values.image.name.includes('.jpg') && !values.image.name.includes('.png')){
                        errors.image = 'Imagen con formato inválido'
                    }

                    return errors;
                }}


                onSubmit={(values) => {
                    console.log(values)
                    console.log({ 
                        fileName: values.image.name, 
                        type: values.image.type,
                        size: `${values.image.size} bytes`
                    })

                    /*Al ser requisito que cada numero de orden sea único, interpreto que el numero de orden se corresponde con el id*/

                    if(objectRecieved === true) {
                        axios.patch(`${REACT_APP_SLIDE_EDITION}${values.order}`, values)
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }else {
                        axios.post(REACT_APP_SLIDE_CREATION, values)
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }}

            >
                {( {errors, setFieldValue} ) => (
                    <Form className="form-container">
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <Field 
                                className="input-field"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ingrese su nombre"
                            />
                            <ErrorMessage name="name" component={() => (<div>{errors.name}</div>)} />
                        </div>
                        <div>
                            <label htmlFor="description">Descripción</label>
                            <CKEditor 
                                onChange={(event, editor) => {
                                    setFieldValue("description", editor.getData())
                                }} 
                                id="description" 
                                name="description" 
                                editor={ClassicEditor}
                            />
                            <ErrorMessage name="description" component={() => (<div>{errors.description}</div>)} />
                        </div>
                        <div>
                            <label htmlFor="order">Orden</label>
                            <Field 
                                className="input-field"
                                type="text"
                                id="order"
                                name="order"
                                placeholder="Ingrese el numero de orden"
                            />
                            <ErrorMessage name="order" component={() => (<div>{errors.order}</div>)} />
                        </div>
                        <div>
                            <label htmlFor="image">Imagen</label>
                            <input id="image" name="image" type="file" onChange={(event) => {
                                setFieldValue("image", event.currentTarget.files[0]);
                            }} />
                            <ErrorMessage name="image" component={() => (<div>{errors.image}</div>)} />
                        </div>
                        <button className="submit-btn" type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}