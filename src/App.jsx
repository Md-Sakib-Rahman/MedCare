import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css' 
import HomePage from './Components/HomePage'
import About from './Components/About'
import OurServices from './Components/OurServices'
import DocBook from './Components/DocBook'
import ServiceBook from './Components/ServiceBook'
function App() {
      
  const router = createBrowserRouter([
    {
      path: "/",
       
      element:<HomePage/>,

    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/ourservices",
      element: <OurServices/>
    },
    {
      path:"/docbook",
      element: <DocBook/>
    },
    {
      path:"/servicebook",
      element: <ServiceBook/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
