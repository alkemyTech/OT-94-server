import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';
import getDataActivityForm from "../../Services/privateApiService";
const ActivitiesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: ''
    });
    // petition === true ? POST : PATCH
    const [petition, setPetition] = useState();
    // Error message
    const [errorName, setErrorName] = useState(false);
    const [errorImage, setErrorImage] = useState(false);
    const [errorSendData, setErrorSendData] = useState(false);

    const VALIDATION = {
        name: /^[a-zA-Z\s]{4,}$/,
        description: /^$/,
        image: /\.(jpg|png)$/i
    }

    useEffect(() => {
        const OBJECT_VALUE = Object.values(initialValues).filter(data => data !== '');
        OBJECT_VALUE.length === 0 ? setPetition(true) : setPetition(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value});
            VALIDATION.name.test(e.target.value) ? setErrorName(false) : setErrorName(true);
        } else {
            setInitialValues({ ...initialValues, image: e.target.value});
            VALIDATION.image.test(e.target.value) ? setErrorImage(false) : setErrorImage(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async (values) => {
            try {
                if (petition) {
                    const { data } = await axios.post('/activities/create', values);
                    console.log(data)
                } else {
                    const { data } = await axios.patch(`/activities/:id`, values);
                    console.log(data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (VALIDATION.name.test(initialValues.name) && VALIDATION.image.test(initialValues.image) && !VALIDATION.description.test(initialValues.description)) {
            fetchData(initialValues);
        } else {
            setErrorSendData(true);
            setTimeout(() => setErrorSendData(false), 2000)
        }
    }
    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Activity Title"></input>
            {errorName ? <p>Error, it must only contain letters and a minium length of 3 characters</p> : null}
            <CKEditor className="input-field" name="description"
                    editor={ ClassicEditor }
                    data={initialValues.description}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setInitialValues({ ...initialValues, description: data});
                    } }
                />
            <input type="file" name="image" onChange={handleChange} />
            {errorImage ? <p>Error, image must be in .jpg or .png format</p> : null}
            <button className="submit-btn" type="submit">Send</button>
            {errorSendData ? <p>Error, you must complete all the fields</p> : null}
        </form>
    );
}
 
export default ActivitiesForm;