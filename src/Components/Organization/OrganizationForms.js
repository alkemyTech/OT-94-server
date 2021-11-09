/* import axios from "axios"; */
import React, { useEffect, useState } from "react";
import "../FormStyles.css";
import { useFormik } from "formik";
/* import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; */

const OrganizationForm = ({ props }) => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    logo: "",
    shortDescription: "",
    longDescription: "",
    links: [],
  });

  const [changedValues, setChangedValues] = useState({ ...initialValues });
  const [formModified, setFormModified] = useState(false);

  const validate = (values) => {
    const errors = {};
    const expRegLink =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (!values.name) {
      errors.name = "Required";
    }

    if (
      values.logo &&
      !values.logo.includes(".jpg") &&
      !values.logo.includes(".png")
    ) {
      errors.logo = "The logo needs a .jpg or .png extension";
    }

    if (!values.shortDescription) {
      errors.shortDescription = "Required";
    }

    if (!values.longDescription) {
      errors.longDescription = "Required";
    }

    if (values.links.length > 0) {
      const badLink = values.links.filter((link) => !link.match(expRegLink));
      if (badLink) {
        errors.links = `URL ${badLink} is invalid`;
      }
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
      changedValues.longDescription !== initialValues.longDescription //||
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
    return;
    /*  axios
        .patch(`/organization/edit`, changedValues)
        .then(function (response) {
          console.log(`Organizations changed ${response}`);
          setInitialValues({ ...changedValues });
          setFormModified(false);
          alert("User modified");
        })
        .catch(function (error) {
          console.log(`ORganization cannot be modified - error: ${error}`);
        }); */
  };

  const formik = useFormik({
    initialValues: { ...initialValues },
    validate,
    onSubmit: (values) => {
      alert(`  Organization saved \n ${JSON.stringify(values, null, 2)}`);

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
        className="input-field"
        type="text"
        name="logo"
        value={formik.values.logo || ""}
        onChange={formik.handleChange}
        placeholder="Logo name"
      ></input>
      {formik.touched.logo && formik.errors.logo ? (
        <p className="input-error-message">{formik.errors.logo}</p>
      ) : null}
      {/* -------------------- */}

      <input
        className="input-field"
        type="text"
        name="shortDescription"
        value={formik.values.shortDescription || ""}
        onChange={formik.handleChange}
        placeholder="Short Description ckEditor"
      ></input>
      {formik.touched.shortDescription && formik.errors.shortDescription ? (
        <p className="input-error-message">{formik.errors.shortDescription}</p>
      ) : null}

      {/*      <label htmlFor="description">Description</label>
                            <CKEditor 
                                onChange={(event, editor) => {
                                    setFieldValue("description", editor.getData())
                                }} 
                                id="description" 
                                name="description" 
                                editor={ClassicEditor}
                            />
                            


 */}
      {/* -------------------- */}

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

      {/*  <select
        name="roleId"
        className="input-field"
        value={formik.values.roleId || ""}
        onChange={formik.handleChange}
      >
        <option value="" disabled>
          Select the role
        </option>
        <option value="1">Admin</option>
        <option value="2">User</option>
      </select>
      {formik.touched.roleId && formik.errors.roleId ? (
        <p className="input-error-message">{formik.errors.roleId}</p>
      ) : null}

      <input
        className="input-field"
        type="password"
        name="password"
        value={formik.values.password || ""}
        onChange={formik.handleChange}
        placeholder="Password"
      ></input>
      {formik.touched.password && formik.errors.password ? (
        <p className="input-error-message">{formik.errors.password}</p>
      ) : null} */}

      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default OrganizationForm;
