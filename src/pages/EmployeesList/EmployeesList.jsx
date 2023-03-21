import React from 'react'
import {Navbar} from '../../components/Navbar';
import { getUserFromLocalStorage } from '../../utils/helpers';
import styles from "./EmployeesList.module.css";

const EmployeesList = () => {
  const user = getUserFromLocalStorage()
  return (
    <>
      <Navbar email={user?.email} />
      <main>
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
