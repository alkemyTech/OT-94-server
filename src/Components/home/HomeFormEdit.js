import axios from "axios";
import React, { useEffect, useState } from "react";
import "../FormStyles.css";
import { useFormik } from "formik";

const HomeFormEdit = ({ props }) => {
  const mockDataHome = {
    welcome: "Mensaje de bienvenida",
    slideImage1: "",
    slideText1: "Text Slide 1",
    slideImage2: "",
    slideText2: "Text Slide 2",
    slideImage3: "",
    slideText3: "",
  };
  const [initialValues, setInitialValues] = useState({ ...mockDataHome });
  const [changedValues, setChangedValues] = useState({ ...initialValues });
  const [formModified, setFormModified] = useState(false);

  const validate = (values) => {
    const errors = {};
    const expRegImage = /\w+.(jpg|png)$/i;

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
    if (JSON.stringify(initialValues) != JSON.stringify(changedValues)) {
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

    alert("Next step, made a axios call");
    setInitialValues({ ...changedValues });
    setFormModified(false);
    console.log(JSON.stringify(changedValues));
    return;
    axios
      .patch(`/home/edit`, changedValues)
      .then(function (response) {
        console.log(`Home changed ${response}`);
        setInitialValues({ ...changedValues });
        setFormModified(false);
        alert("Home modified");
      })
      .catch(function (error) {
        console.log(`Home content cannot be modified - error: ${error}`);
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
    // descomentar la siguiente linea cuando vengan los datos en props
    //setInitialValues({ ...props });
    setChangedValues({ ...initialValues });
  }, []);

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <textarea
        className="input-field input-textarea"
        name="welcome"
        rows="3"
        minLength="20"
        placeholder="Texto de Bienvenida"
        onChange={formik.handleChange}
        defaultValue={formik.values.welcome || ""}
      ></textarea>
      {formik.touched.welcome && formik.errors.welcome ? (
        <div className="input-error-message">{formik.errors.welcome}</div>
      ) : null}

      <input
        className="select-file"
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
        className="select-file"
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
        className="select-file"
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
