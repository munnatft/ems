import React, { createContext, useContext, useState } from 'react'

const intialState = {
    employees: [],
    addEmployee: () => {},
    updateEmployee: () => {},
    deleteEmployee: () => {},
    resetEmployees: () => {},
}

const EmployeeContext = createContext(intialState)

export const useEmployee = () => useContext(EmployeeContext)

const EmployeeProvider = ({children}) => {

    const [employees, setEmployees] = useState([])

    const addEmployee = (employee) => {
        setEmployees(prevEmployees => [...prevEmployees, employee])
    }

    const updateEmployee = (employee) => {
        const employeeIndex = employees.findIndex(e => e.id === employee.id)
        let newEmployees = [...employees]
        const oldEmployeeData = employees[employeeIndex]
        const updatedEmployee = {...oldEmployeeData, ...employee}
        newEmployees[employeeIndex] = updatedEmployee
        setEmployees(newEmployees)
    }
    const deleteEmployee = (id) => {
        const newEmployees = employees.filter(e => e.id !== id)
        setEmployees(newEmployees)
    }

    const resetEmployees = () => setEmployees([])

    const value = {
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        resetEmployees
    }
  return (
    <EmployeeContext.Provider value={value} >
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider
