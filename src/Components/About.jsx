import React from 'react'
import Navbar from '../Components/Navbar'
import AboutEl from '../Components/AboutEl'
const About = ({registeredEmail, setRegisteredEmail}) => {
  return (
    <>
        <Navbar  registeredEmail={registeredEmail} setRegisteredEmail={setRegisteredEmail}/>
        <AboutEl />
    </>
  )
}

export default About
