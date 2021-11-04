import React, {useRef} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import imagen from '../Slides/imagenPrueba.jpg'

import '../FormStyles.css';

export default function ContactForm() {

    const buttonRef = useRef()

    const data = [
        'nombre',
        'esta es una descripción',
        1,
        imagen

    ]

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
                    console.log(buttonRef.current)
                    console.log(values)
                    console.log({ 
                        fileName: values.image.name, 
                        type: values.image.type,
                        size: `${values.image.size} bytes`
                      })
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
                            <input ref={buttonRef} id="image" name="image" type="file" onChange={(event) => {
                                event.currentTarget.files[0] = imagen
                                setFieldValue("image", event.currentTarget.files[0]);
                            }} />
                            <ErrorMessage name="image" component={() => (<div>{errors.image}</div>)} />
                        </div>
                        <button 
                            type="button"
                            className="submit-btn"
                            onClick={() => {
                                setFieldValue("name", data[0])
                                setFieldValue("description", data[1])
                                setFieldValue("order", data[2])
                                
                            }}
                        >Editar ya existente
                        </button>
                        <button className="submit-btn" type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}































/* import React, { useState } from 'react';
import '../FormStyles.css';

const SlidesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: ''
    });

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write the description"></input>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default SlidesForm; */