import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css' 
import 'animate.css';
import HomePage from './Components/HomePage'
import About from './Components/About'
import OurServices from './Components/OurServices'
import DocBook from './Components/DocBook'
import ServiceBook from './Components/ServiceBook'
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
function App() {
  const [registeredEmail, setRegisteredEmail] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
       
      element:<HomePage setRegisteredEmail={setRegisteredEmail} registeredEmail={registeredEmail}/>,

    },
    {
      path:"/about",
      element: <About setRegisteredEmail={setRegisteredEmail} registeredEmail={registeredEmail}/>
    },
    {
      path:"/ourservices",
      element: <OurServices setRegisteredEmail={setRegisteredEmail} registeredEmail={registeredEmail}/>
    },
    {
      path:"/docbook",
      element: <DocBook setRegisteredEmail={setRegisteredEmail} registeredEmail={registeredEmail}/>
    },
    {
      path:"/servicebook",
      element: <ServiceBook setRegisteredEmail={setRegisteredEmail} registeredEmail={registeredEmail}/>
    },
    {
      path:"/login",
      element: <Login setRegisteredEmail={setRegisteredEmail} registeredEmail={registeredEmail}/>
    },
    {
      path:"/register",
      element: <Register setRegisteredEmail={setRegisteredEmail} registeredEmail={registeredEmail} />
    }
  ])

  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
