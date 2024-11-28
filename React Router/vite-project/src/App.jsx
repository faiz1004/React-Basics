import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/About",
      element: <><Navbar/><About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><user/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
