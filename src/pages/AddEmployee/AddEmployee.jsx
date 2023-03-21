import React from 'react'
import AddOrEditEmployee from '../../components/AddOrEditEmployee'
import styles from "./AddEmployee.module.css"

const AddEmployee = () => {
  return (
    <main className={styles.addEmployeeContainer}>
      <AddOrEditEmployee
        isAdd={true}
      />
    </main>
  )
}

export default AddEmployee
