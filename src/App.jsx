import React from 'react'
import { BrowserRouter } from "react-router-dom"
import Page from './pages'
import EmployeeProvider from './provider/EmployeeProvider'

const App = () => {
  return (
    <BrowserRouter>
      <EmployeeProvider>
        <Page />
      </EmployeeProvider>
    </BrowserRouter>
  )
}

export default App
