import axios from "axios";
import React, { useEffect, useState } from "react";
import "../FormStyles.css";
import { useFormik } from 'formik';

const UserForm = ({ props = {} }) => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    roleId: "",
    profilePhoto: "",
    password:""
  });

  const [changedValues, setChangedValues] = useState({ ...initialValues });

  const validate = values => {
    const errors = {};
    const expRegEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 4) {
      errors.name = 'Must be 4 characters or more';
    }
  
    if (!values.email) {
      errors.email = 'Required';    
    } else if (!values.email.match(expRegEmail)) {
      errors.email = 'Invalid email address';
    }

    if (!values.profilePhoto) {
      errors.profilePhoto = 'Required';
    } else if (!values.profilePhoto.includes(".jpg") && !values.profilePhoto.includes(".png")) {
      errors.profilePhoto = 'The image needs a .jpg or .png extension';
    }

    if (!values.roleId) {
      errors.roleId = 'Required';
    } 

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }

    return errors;
  };

  
  const formik = useFormik({
    initialValues: { ...initialValues },
    validate,
    onSubmit: (values) => 
              {
      alert(JSON.stringify(values, null, 2));
      handleSubmite();
            }  
  });

  let objectReceived = true;

  const [formModified, setFormModified] = useState(false);



  const handleChange = (e) => {
    setChangedValues(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value
    })
    )
 /*    if (e.target.name === "name") {
      setChangedValues({ ...changedValues, name: e.target.value });
    }
    if (e.target.name === "email") {
      setChangedValues({ ...changedValues, email: e.target.value });
    }
    if (e.target.name === "profilePhoto") {
      setChangedValues({ ...changedValues, profilePhoto: e.target.value });
    }
    if (e.target.name === "roleId") {
      setChangedValues({ ...changedValues, roleId: e.target.value });
    }
 */
    if (
      changedValues.name !== initialValues.name ||
      changedValues.email !== initialValues.email ||
      changedValues.profilePhoto !== initialValues.profilePhoto ||
      changedValues.roleId !== initialValues.roleId
    ) {
      setFormModified(true);
    } else {
      setFormModified(false);
    }
    console.log("handleChanged");
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    console.log(initialValues);
    console.log(formModified);
    /* --------------------*/
    if (!formModified) {
      alert("Without changes, cannot be saved");
      return;
    }

    if (objectReceived) {
      axios
        .patch(`/users/${props.id}`, changedValues)
        .then(function (response) {
          console.log(`User changed ${response}`);
          setInitialValues({ ...changedValues });
          setFormModified(false);
          alert("User modified");
        })
        .catch(function (error) {
          console.log(`User cannot be modified ${error}`);
        });
    } else {
      axios
        .post(`/users/create`, changedValues)
        .then(function (response) {
          console.log(`User saved ${response}`);
          setInitialValues({ ...changedValues });
          setFormModified(false);
          alert("User saved");
        })
        .catch(function (error) {
          console.log(`User cannot be saved ${error}`);
        });
    }
    /** ------------------ */
  };

  useEffect(() => {
    if (typeof props.id === "undefined") {
      objectReceived = false;
    } else {
      setInitialValues({ ...initialValues, name: props.name });
      setInitialValues({ ...initialValues, email: props.email });
      setInitialValues({ ...initialValues, profilePhoto: props.profilePhoto });
      setInitialValues({ ...initialValues, roleId: props.roleId });

      setChangedValues({ ...initialValues });
    }
  }, []);

  return (
    <> 

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
         <p>{formik.errors.name}</p>
       ) : null}
      <input
          className="input-field"
          type="text"
          name="email"
          value={formik.values.email || ""}
          onChange={formik.handleChange}
          placeholder="Email"
      ></input>

      {formik.touched.email && formik.errors.email ? (
         <p>{formik.errors.email}</p>
       ) : null}
      <input
          className="input-field"
          type="text"
          name="profilePhoto"
          value={formik.values.profilePhoto || ""}
          onChange={formik.handleChange}
          placeholder="Profile Photo"
      ></input>
      
      {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
         <p>{formik.errors.profilePhoto}</p>
       ) : null}
       <select
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
         <p>{formik.errors.roleId}</p>
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
         <p>{formik.errors.password}</p>
       ) : null}
       <button className="submit-btn" type="submit">
        Send Formik
      </button>      
    </form>
    
  {/*   <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={changedValues.name || ""}
        onChange={handleChange}
        placeholder="Name"
      ></input>
      <input
        className="input-field"
        type="text"
        name="email"
        value={changedValues.email || ""}
        onChange={handleChange}
        placeholder="Email"
      ></input>
      <input
        className="input-field"
        type="text"
        name="profilePhoto"
        value={changedValues.profilePhoto || ""}
        onChange={handleChange}
        placeholder="Profile Photo"
      ></input>
      <select
        className="input-field"
        value={changedValues.roleId || ""}
        onChange={(e) =>
          setChangedValues({ ...changedValues, roleId: e.target.value })
        }
      >
        <option value="" disabled>
          Select the role
        </option>
        <option value="1">Admin</option>
        <option value="2">User</option>
      </select>
      <button className="submit-btn" type="submit">
        Send without formik
      </button>
    </form> */}
    
    </>
  );
};

export default UserForm;
