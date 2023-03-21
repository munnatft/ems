import React from 'react'
import { BrowserRouter } from "react-router-dom"
import Page from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  )
}

export default App
