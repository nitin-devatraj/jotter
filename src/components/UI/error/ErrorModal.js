import React from "react";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={styles.modal}>
        <p>Please enter your input to proceed</p>
        <div className={styles.container}>
          <p>&#10232;</p>
          <button onClick={props.onConfirm}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
