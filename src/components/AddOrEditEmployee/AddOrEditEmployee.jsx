import React, { useRef, useState } from "react";
import { employeeFormValidation } from "../../utils/validation";
import {ConfirmBox} from "../ConfirmBox";
import {useEmployee} from "../../provider/EmployeeProvider";
import styles from "./AddOrEditEmployee.module.css";
import { useNavigate } from "react-router-dom";

const errorInitialState = {
  firstName: "",
  email: "",
  phoneNumber: "",
  domain: "",
}

const AddOrEditEmployee = ({ isAdd }) => {
  const [error, setError] = useState(errorInitialState);
  const [isOpen, setIsOpen] = useState(false)
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emaiRef = useRef();
  const domainRef = useRef();
  const phoneNumberRef = useRef();

  const navigate = useNavigate()

  const {addEmployee} = useEmployee()

  const onConfirmClick = () => {
    if(isAdd) {
      addEmployee({
        id: new Date().toISOString(),
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emaiRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        domain: domainRef.current.value
      })
    }
    navigate("/")
  }

  const onDiscardClick = () => {
    if(!isAdd) {
      return navigate("/")
    }
    firstNameRef.current.value = ""
    lastNameRef.current.value = ""
    emaiRef.current.value = ""
    phoneNumberRef.current.value = ""
    domainRef.current.value = ""
    setError(errorInitialState)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {hasError,firstName,email,phoneNumber,domain} = employeeFormValidation({
      firstNameVal: firstNameRef.current.value, 
      emailVal: emaiRef.current.value, 
      phoneNumberVal: phoneNumberRef.current.value, 
      domainVal: domainRef.current.value
    })
    if(hasError) {
      setError(prevState => ({
        ...prevState,
        firstName,
        email,
        phoneNumber,
        domain
      }))
      return ;
    }
    setIsOpen(true)
  };

  return (
    <>
      {
        isOpen && (
          <ConfirmBox 
            onConfirmBtnClick={onConfirmClick}
            onCancelBtnClick={() => setIsOpen(false)}
          />
        )
      }
      <h1 className={styles.title}>{`${isAdd ? "Add" : "Edit"}`} Employee</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.fieldGroup}>
          <div className="form-control">
            <input type="text" placeholder="first name" ref={firstNameRef} />
            {error.firstName && <p className="errorText">{error.firstName}</p>}
          </div>
          <div className="form-control">
            <input type="text" placeholder="last name" ref={lastNameRef} />
          </div>
          <div className="form-control">
            <input type="text" placeholder="email id" ref={emaiRef} />
            {error.email && <p className="errorText">{error.email}</p>}
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="phone number"
              ref={phoneNumberRef}
            />
            {error.phoneNumber && (
              <p className="errorText">{error.phoneNumber}</p>
            )}
          </div>
          <div className="form-control">
            <select ref={domainRef} >
              <option value="">Select option</option>
              <option value="Testing">Testing</option>
              <option value="Development">Development</option>
              <option value="Operations">Operations</option>
              <option value="Accounts">Accounts</option>
            </select>
            {error.domain && <p className="errorText">{error.domain}</p>}
          </div>
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.discardBtn} onClick={onDiscardClick} type="button">Discard</button>
          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddOrEditEmployee;
