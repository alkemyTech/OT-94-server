import axios from "axios";
import React, { useEffect, useState } from "react";
import "../FormStyles.css";
import { useFormik } from "formik";

const HomeFormEdit = ({ props }) => {
  const [initialValues, setInitialValues] = useState({
    welcome: "",
    slideImage1: "",
    slideText1: "",
    slideImage2: "",
    slideText2: "",
    slideImage3: "",
    slideText3: "",
  });

  const [changedValues, setChangedValues] = useState({ ...initialValues });
  const [formModified, setFormModified] = useState(false);

  const validate = (values) => {
    const errors = {};
    const expRegImage = /(?i)\.(jpg|png|gif)$/;

    if (!values.welcome) {
      errors.welcome = "Required";
    } else if (values.welcome.length < 20) {
      errors.welcome = "Must be 20 characters or more";
    }

    if (!values.slideImage1) {
      errors.slideImage1 = "Required";
    } else if (!values.slideImage1.match(expRegImage)) {
      errors.slideImage1 = "The image needs a .jpg or .png extension";
    }
    if (!values.slideImage2) {
      errors.slideImage2 = "Required";
    } else if (!values.slideImage2.match(expRegImage)) {
      errors.slideImage2 = "The image needs a .jpg or .png extension";
    }
    if (!values.slideImage3) {
      errors.slideImage3 = "Required";
    } else if (!values.slideImage3.match(expRegImage)) {
      errors.slideImage3 = "The image needs a .jpg or .png extension";
    }
    /* 
    if (!values.profilePhoto) {
      errors.profilePhoto = "Required";
    } else if (
      !values.profilePhoto.includes(".jpg") &&
      !values.profilePhoto.includes(".png")
    ) {
      errors.profilePhoto = "The image needs a .jpg or .png extension";
    } */

    if (!values.slideText1) {
      errors.slideText1 = "Required";
    }
    if (!values.slideText2) {
      errors.slideText2 = "Required";
    }
    if (!values.slideText3) {
      errors.slideText3 = "Required";
    }

    setChangedValues({ ...values });
    validateChanges();
    return errors;
  };

  const validateChanges = () => {
    if (
      changedValues.welcome !== initialValues.welcome ||
      changedValues.slideImage1 !== initialValues.slideImage1 ||
      changedValues.slideImage2 !== initialValues.slideImage2 ||
      changedValues.slideImage3 !== initialValues.slideImage3 ||
      changedValues.slideText1 !== initialValues.slideText1 ||
      changedValues.slideText2 !== initialValues.slideText2 ||
      changedValues.slideText3 !== initialValues.slideText3
    ) {
      setFormModified(true);
    } else {
      setFormModified(false);
    }
  };

  const axiosCall = () => {
    if (!formModified) {
      alert("Without changes, cannot be saved");
      return;
    }

    console.log(changedValues);
    return;
    axios
      .patch(`/home/${props.id}`, changedValues)
      .then(function (response) {
        console.log(`Home changed ${response}`);
        setInitialValues({ ...changedValues });
        setFormModified(false);
        alert("Home modified");
      })
      .catch(function (error) {
        console.log(`User cannot be modified - error: ${error}`);
      });
  };

  const formik = useFormik({
    initialValues: { ...initialValues },
    validate,
    onSubmit: (values) => {
      alert(`  Home edited \n ${JSON.stringify(values, null, 2)}`);

      axiosCall();
    },
  });

  useEffect(() => {
    setInitialValues({ ...initialValues, welcome: props.welcome });
    setInitialValues({ ...initialValues, slideImage1: props.slideImage1 });
    setInitialValues({ ...initialValues, slideImage2: props.slideImage2 });
    setInitialValues({ ...initialValues, slideImage3: props.slideImage3 });
    setInitialValues({ ...initialValues, slideText1: props.slideText1 });
    setInitialValues({ ...initialValues, slideText2: props.slideText2 });
    setInitialValues({ ...initialValues, slideText3: props.slideText3 });

    setChangedValues({ ...initialValues });
  }, []);

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="welcome"
        value={formik.values.welcome || ""}
        onChange={formik.handleChange}
        placeholder="Texto de Bienvenida"
      ></input>
      {formik.touched.welcome && formik.errors.welcome ? (
        <div className="input-error-message">{formik.errors.welcome}</div>
      ) : null}

      <input
        className="input-field"
        type="file"
        name="slideImage1"
        value={formik.values.slideImage1 || ""}
        onChange={formik.handleChange}
        placeholder="image.jpg/.png"
      ></input>
      {formik.touched.slideImage1 && formik.errors.slideImage1 ? (
        <p className="input-error-message">{formik.errors.slideImage1}</p>
      ) : null}

      <input
        className="input-field"
        type="text"
        name="slideText1"
        value={formik.values.slideText1 || ""}
        onChange={formik.handleChange}
        placeholder="Descripción Slide 1"
      ></input>
      {formik.touched.slideText1 && formik.errors.slideText1 ? (
        <p className="input-error-message">{formik.errors.slideText1}</p>
      ) : null}

      <input
        className="input-field"
        type="file"
        name="slideImage2"
        value={formik.values.slideImage2 || ""}
        onChange={formik.handleChange}
        placeholder="image.jpg/.png"
      ></input>
      {formik.touched.slideImage2 && formik.errors.slideImage2 ? (
        <p className="input-error-message">{formik.errors.slideImage2}</p>
      ) : null}

      <input
        className="input-field"
        type="text"
        name="slideText2"
        value={formik.values.slideText2 || ""}
        onChange={formik.handleChange}
        placeholder="Descripción Slide 2"
      ></input>
      {formik.touched.slideText2 && formik.errors.slideText2 ? (
        <p className="input-error-message">{formik.errors.slideText2}</p>
      ) : null}

      <input
        className="input-field"
        type="file"
        name="slideImage3"
        value={formik.values.slideImage3 || ""}
        onChange={formik.handleChange}
        placeholder="image.jpg/.png"
      ></input>
      {formik.touched.slideImage3 && formik.errors.slideImage3 ? (
        <p className="input-error-message">{formik.errors.slideImage3}</p>
      ) : null}

      <input
        className="input-field"
        type="text"
        name="slideText3"
        value={formik.values.slideText3 || ""}
        onChange={formik.handleChange}
        placeholder="Descripción Slide 3"
      ></input>
      {formik.touched.slideText3 && formik.errors.slideText3 ? (
        <p className="input-error-message">{formik.errors.slideText3}</p>
      ) : null}

      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default HomeFormEdit;
