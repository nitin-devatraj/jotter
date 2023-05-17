import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <p>Please enter your input to proceed</p>
      <div className={styles.container}>
        <p>&#10232;</p>
        <button onClick={props.onConfirm}>Okay</button>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
