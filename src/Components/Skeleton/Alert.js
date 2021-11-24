
import React from "react";
import SweetAlert from "sweetalert2-react";
import { useDispatch } from 'react-redux'; 
import { showAlerts } from "../../features/alert/alertSlice";

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
  const dispatch = useDispatch();
  return (
    <SweetAlert
      show={showAlert}
      title={title}
      type={type}
      text={text}
      showConfirmButton={true}
      showCancelButton={cancelButton}
      confirmButtonText={confirmButtonText}
      cancelButtonText={cancelButtonText}
      showDenyButton={showDenyButton}
      onConfirm={() => dispatch(showAlerts(false))}
    />
  );
};

export default Alert;