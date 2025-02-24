import React from 'react'
import Register from './components/user/Register'
import Login from './components/user/Login'
import { RouterProvider } from 'react-router-dom'
import { routes } from './components/router/Router'
const App = () => {
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
