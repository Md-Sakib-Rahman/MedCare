import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
const HomePage = ({registeredEmail, setRegisteredEmail}) => {
  return (
    <>  
     <Navbar registeredEmail={registeredEmail} setRegisteredEmail={setRegisteredEmail}/>
     <Home/>
    </>
  )
}

export default HomePage
