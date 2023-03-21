import React from 'react'
import { useLocation } from 'react-router-dom'
import AddOrEditEmployee from '../../components/AddOrEditEmployee'
import styles from "./EditEmployee.module.css"

const EditEmployee = () => {
    const {state: {employee}} = useLocation()
  return (
    <main className={styles.editEmployeeContainer}>
      <AddOrEditEmployee
        isAdd={false}
        employee={employee}
      />
    </main>
  )
}

export default EditEmployee