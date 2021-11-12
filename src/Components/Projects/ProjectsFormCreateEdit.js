import axios from "axios";
import React, { useState, useEffect } from "react";
import "../FormStyles.css";

const ProjectsFormCreateEdit = ({ props = {} }) => {
  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
    image: "",
    due_date: "",
  });

  const [changedValues, setChangedValues] = useState({ ...initialValues });

  let objectReceived = true;

  const [formModified, setFormModified] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setChangedValues({ ...changedValues, title: e.target.value });
    }
    if (e.target.name === "description") {
      setChangedValues({ ...changedValues, description: e.target.value });
    }
    if (e.target.name === "image") {
      setChangedValues({ ...changedValues, image: e.target.value });
    }
    if (e.target.name === "due_date") {
      setChangedValues({ ...changedValues, due_date: e.target.value });
    }

    if (
      changedValues.title !== initialValues.title ||
      changedValues.description !== initialValues.description ||
      changedValues.image !== initialValues.image ||
      changedValues.due_date !== initialValues.due_date
    ) {
      setFormModified(true);
    } else {
      setFormModified(false);
    }
  };

  const isValidTitle = () => {
    if (!changedValues.title) {
      return false;
    }
    return true;
  };

  const isValidDescription = () => {
    if (!changedValues.description) {
      return false;
    }
    return true;
  };

  const isValidImage = () => {
    if (!changedValues.image) {
      return false;
    }
    if (!changedValues.image.includes("jpg") &&
        !changedValues.image.includes("png")) {
      return false;
    }
    return true;
  };


  function isValidDueDate() {
    let dateString = changedValues.due_date;
  
    if (!dateString) {
      return true;
    }

    var regEx = /\d{4}-\d{2}-\d{2}/;

    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return false; // Invalid date
    return d.toISOString().slice(0, 10) === dateString;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formModified) {
      alert("Without changes, cannot be saved");
      return;
    }
    if (!isValidTitle()) {
      alert("Title is required");
      return;
    }
    if (!isValidDescription()) {
      alert("Description is required");
      return;
    }
    if (!isValidImage()) {
      alert("The image needs a .jpg or .png extension");
      return;
    }

    if (!isValidDueDate()) {
      alert("Due date is invalid");
      return;
    }
  
    if (objectReceived) {
      axios.patch(`/projects/${props.id}`, changedValues)
           .then(function (response) {
                console.log(`project changed ${response}`);
                setInitialValues({ ...changedValues });
                setFormModified(false);
                alert("Project modified");
            })
           .catch(function (error) {
                console.log(`project cannot be changed ${error}`);
        });
    } else {
      axios.post(`/projects/create`, changedValues)
           .then(function (response) {
                 console.log(`project saved ${response}`);
                 setInitialValues({ ...changedValues });
                 setFormModified(false);              
                 alert("Project saved");
            })
           .catch(function (error) {
                  console.log(`project cannot be saved ${error}`);
            });
    }    
  };

  useEffect(() => {
    if (typeof props.id === "undefined") {
      objectReceived = false;      
    } else {
      setInitialValues({ ...initialValues, title: props.title });
      setInitialValues({ ...initialValues, description: props.description });
      setInitialValues({ ...initialValues, image: props.image });
      if (typeof props.due_date != "undefined") {
        setInitialValues({ ...initialValues, due_date: props.due_date });
      }
      setChangedValues({ ...initialValues });
    }
  }, []);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="title"
        value={changedValues.title}
        onChange={handleChange}
        placeholder="Title"
        required
      ></input>
      <input
        className="input-field"
        type="text"
        name="description"
        value={changedValues.description}
        onChange={handleChange}
        placeholder="Write a description about the project"
        required
      ></input>
      <input
        className="input-field"
        type="text"
        name="image"
        value={changedValues.image}
        onChange={handleChange}
        placeholder="Select an image"
        required
      ></input>
      <input 
        className="input-field"
        type="date"
        name="due_date"
        value={changedValues.due_date}
        onChange={handleChange}
        placeholder="Select an due date"
      ></input>
      <button className="submit-btn" type="submit">
        Save Project
      </button>
    </form>
  );
};

export default ProjectsFormCreateEdit;
