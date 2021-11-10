import axios from "axios";
import React, { useEffect, useState } from "react";
import "../FormStyles.css";
import { useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const OrganizationForm = ({ props }) => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    logo: "",
    shortDescription: "",
    longDescription: "",
    links: [""],
  });

  const [changedValues, setChangedValues] = useState({ ...initialValues });
  const [formModified, setFormModified] = useState(false);

  const validate = (values) => {
    const errors = {};
    const expRegLink =
      /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}?/;

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.logo) {
      errors.logo = "Required";
    } else if (!values.logo.includes(".jpg") && !values.logo.includes(".png")) {
      errors.logo = "The logo needs a .jpg or .png extension";
    }

    if (!values.shortDescription) {
      errors.shortDescription = "Required";
    }

    if (!values.longDescription) {
      errors.longDescription = "Required";
    }

    if (!values.links[0]) {
      errors.links[0] = "Required";
    } else {
      values.links.forEach((element, index) => {
        if (!element.match(expRegLink)) {
          errors.links[index] = `URL is invalid`;
        }
      });
    }

    setChangedValues({ ...values });
    validateChanges();
    return errors;
  };

  const validateChanges = () => {
    if (
      changedValues.name !== initialValues.name ||
      changedValues.logo !== initialValues.logo ||
      changedValues.shortDescription !== initialValues.shortDescription ||
      changedValues.longDescription !== initialValues.longDescription ||
      changedValues.links !== initialValues.links //||
      //changedValues.links !== initialValues.links
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

    alert("Next step, made a axios call");
    setInitialValues({ ...changedValues });
    setFormModified(false);
    console.log(JSON.stringify(changedValues));
    return;
    axios
      .patch(`/organization/edit`, changedValues)
      .then(function (response) {
        console.log(`Organizations changed ${response}`);
        setInitialValues({ ...changedValues });
        setFormModified(false);
        alert("User modified");
      })
      .catch(function (error) {
        console.log(`ORganization cannot be modified - error: ${error}`);
      });
  };

  const formik = useFormik({
    initialValues: { ...initialValues },
    validate,
    onSubmit: (values) => {
      alert(`  Call to save \n ${JSON.stringify(values, null, 2)}`);

      axiosCall();
    },
  });

  useEffect(() => {
    setInitialValues({ ...props });
    setChangedValues({ ...props });
  }, []);

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={formik.values.name || ""}
        onChange={formik.handleChange}
        placeholder="Name"
      ></input>
      {formik.touched.name && formik.errors.name ? (
        <div className="input-error-message">{formik.errors.name}</div>
      ) : null}

      <input
        className="select-file"
        type="file"
        name="logo"
        value={formik.values.logo || ""}
        onChange={formik.handleChange}
        placeholder="Logo name"
      ></input>
      {formik.touched.logo && formik.errors.logo ? (
        <p className="input-error-message">{formik.errors.logo}</p>
      ) : null}

      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          setChangedValues({ ...changedValues, description: editor.getData() });
          formik.setFieldValue("shortDescription", editor.getData());
          console.log(event);
        }}
        id="shortDescription"
        name="shortDescription"
        config={{ placeholder: "Short Description..." }}
        data={formik.values.shortDescription || ""}
      />
      {formik.touched.shortDescription && formik.errors.shortDescription ? (
        <p className="input-error-message">{formik.errors.shortDescription}</p>
      ) : null}

      <input
        className="input-field"
        type="text"
        name="longDescription"
        value={formik.values.longDescription || ""}
        onChange={formik.handleChange}
        placeholder="Long Description"
      ></input>
      {formik.touched.longDescription && formik.errors.longDescription ? (
        <p className="input-error-message">{formik.errors.longDescription}</p>
      ) : null}

      <input
        className="input-field"
        type="url"
        name="links"
        value={formik.values.links[0] || ""}
        onChange={formik.handleChange}
        placeholder="https://example.com"
        multiple
      ></input>
      {formik.touched.links[0] && formik.errors.links[0] ? (
        <p className="input-error-message">{formik.errors.links[0]}</p>
      ) : null}

      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default OrganizationForm;
