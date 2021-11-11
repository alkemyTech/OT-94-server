import React, { Component, useState } from "react";
import SweetAlert from "sweetalert2-react";

// ...
// Types :  success | error | warning | info | question
const Alert = ({
  showAlert = false,
  title = "title-default",
  text = "text-default",
  type = "success",
  cancelButton = false,
  confirmButtonText = "OK",
  cancelButtonText = "Cancel",
  showDenyButton = true,
}) => {
  const [show, setShow] = useState(showAlert);
  return (
    <SweetAlert
      show={show}
      title={title}
      type={type}
      text={text}
      showConfirmButton={true}
      showCancelButton={cancelButton}
      confirmButtonText={confirmButtonText}
      cancelButtonText={cancelButtonText}
      showDenyButton={showDenyButton}
      onConfirm={() => setShow(false)}
    />
  );
};

export default Alert;
