import axios from "axios";
import React, { useEffect, useState } from "react";
import "../FormStyles.css";
import { useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Todo from "./Todo";
import "./styles.css";

const MemberFormCreateEdit = ({ props = {} }) => {
  const expRegLink =
    /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}?/;

  const [url, setUrl] = useState({});
  const [urls, setUrls] = useState([""]);
  const [errorUrl, setErrorUrl] = useState("");

  const handleChange = (e) => {
    setUrl({ [e.target.name]: e.target.value });
  };

  const deleteToDo = (indice) => {
    const newUrls = [...urls];
    newUrls.splice(indice, 1);
    setUrls(newUrls);
    setChangedValues({ ...changedValues, url: [...newUrls] });
  };

  const handleClick = (e) => {
    if (Object.keys(url).length === 0 || url.url.trim() === "") {
      formik.errors.url = `Is Empty`;
      setErrorUrl("Is Empty");
      return;
    }
    if (!url.url.match(expRegLink)) {
      formik.errors.url = `URL is invalid`;
      setErrorUrl("URL is Invalid");
      return;
    }
    document.getElementById("url").value = "";
    setUrl({});
    setErrorUrl("");

    formik.errors.url = "";
    setUrls([...urls, url]);
    setChangedValues({ ...changedValues, url: [...urls, url] });
  };

  const [initialValues, setInitialValues] = useState({
    name: "",
    image: "",
    description: "",
    url: [],
  });

  const [changedValues, setChangedValues] = useState({ ...initialValues });
  const [formModified, setFormModified] = useState(false);

  const validate = (values) => {
    const errors = {};
    const expRegImage = /\w+.(jpg|png)$/i;

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 4) {
      errors.name = "Must be 4 characters or more";
    }

    if (!values.image) {
      errors.image = "Required";
    } else if (!values.image.match(expRegImage)) {
      errors.image = "The image needs a .jpg or .png extension";
    }

    if (!values.description) {
      errors.shortDescription = "Required";
    }

    values["url"] = [...changedValues["url"]];

    if (changedValues["url"].length === 0) {
      errors.url = "Required";
      setErrorUrl("Required");
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
      .patch(`/members/edit`, changedValues)
      .then(function (response) {
        console.log(`Member changed ${response}`);
        setInitialValues({ ...changedValues });
        setFormModified(false);
        alert("Member modified");
      })
      .catch(function (error) {
        console.log(`Member cannot be modified - error: ${error}`);
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
    /*   setInitialValues({ ...props });
     setChangedValues({ ...props }); */
    setUrls([...initialValues["url"]]);
  }, []);

  return (
    <>
      <h1>Member Edit</h1>
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
          name="image"
          value={formik.values.image || ""}
          onChange={formik.handleChange}
          placeholder="Logo name"
        ></input>
        {formik.touched.image && formik.errors.image ? (
          <p className="input-error-message">{formik.errors.image}</p>
        ) : null}

        <CKEditor
          editor={ClassicEditor}
          onChange={(event, editor) => {
            setChangedValues({
              ...changedValues,
              description: editor.getData(),
            });
            formik.setFieldValue("description", editor.getData());
          }}
          id="description"
          name="description"
          config={{ placeholder: "Description..." }}
          data={formik.values.description || ""}
        />
        {formik.touched.description && formik.errors.description ? (
          <p className="input-error-message">{formik.errors.description}</p>
        ) : null}

        <div>
          <input
            id="url"
            type="url"
            className="select-field"
            name="url"
            onChange={handleChange}
            placeholder="Add Links"
          />{" "}
          <button onClick={handleClick} type="button" className="btn-add">
            Add
          </button>
          {errorUrl ? (
            <p className="input-error-message">{formik.errors.url}</p>
          ) : null}
          {urls.map((value, index) => (
            <Todo
              todo={value.url}
              key={index}
              index={index}
              deleteToDo={deleteToDo}
            />
          ))}
        </div>
        <button className="submit-btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default MemberFormCreateEdit;
