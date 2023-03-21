import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Navbar} from '../../components/Navbar';
import { getUserFromLocalStorage } from '../../utils/helpers';
import styles from "./EmployeesList.module.css";

const EmployeesList = () => {
  const user = getUserFromLocalStorage()
  const navigate = useNavigate()
  return (
    <>
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
          <tbody></tbody>
        </table>
      </main>
    </>
  )
}

export default EmployeesList
