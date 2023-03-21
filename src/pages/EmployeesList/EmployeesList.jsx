import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {ConfirmBox} from "../../components/ConfirmBox"
import {Navbar} from '../../components/Navbar';
import { useEmployee } from '../../provider/EmployeeProvider';
import { getUserFromLocalStorage } from '../../utils/helpers';
import styles from "./EmployeesList.module.css";

const EmployeesList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const employeeIdRef = useRef('')
  const user = getUserFromLocalStorage()
  const navigate = useNavigate()
  const {employees, deleteEmployee} = useEmployee()

  const openConfirmBox = (id) => {
    employeeIdRef.current = id
    setIsOpen(true)
  }

  const onConfirmClick = () => {
    deleteEmployee(employeeIdRef.current)
    setIsOpen(false)
  }

  return (
    <>
      {
        isOpen && (
          <ConfirmBox 
            onCancelBtnClick={() => setIsOpen(false)}
            onConfirmBtnClick={ onConfirmClick }
          />
        )
      }
      <Navbar email={user?.email} />
      <main>
        <button className={styles.addEmployeeBtn} onClick={() => navigate("/add")} >Add</button>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Phone No</th>
              <th>Domain</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              employees.length > 0 && 
              employees.map((e) => (
                <tr key={e.id}>
                  <td>{e.firstName+" "+e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{`XXXXXX` + `${e.phoneNumber}`.slice(-4)}</td>
                  <td>{e.domain}</td>
                  <td>
                    <span className={styles.edit} onClick={() => navigate("/edit",{state:{employee:e}})} >
                      Edit
                    </span>
                    <span className={styles.delete} onClick={() => openConfirmBox(e.id)} >
                      Delete
                    </span>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    </>
  )
}

export default EmployeesList
