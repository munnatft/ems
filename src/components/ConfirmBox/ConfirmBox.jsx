import React from "react";
import styles from "./ConfirmBox.module.css";

const ConfirmBox = ({ onCancelBtnClick, onConfirmBtnClick }) => {
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.confirmBox}>
        <p className={styles.sureText}>Are you sure?</p>
        <div className={styles.btnGroup}>
          <button className={styles.cancel} onClick={onCancelBtnClick}>
            Cancel
          </button>
          <button className={styles.confirm} onClick={onConfirmBtnClick}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;
