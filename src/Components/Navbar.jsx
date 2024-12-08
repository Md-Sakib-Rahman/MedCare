import React, { useState } from 'react';
import Logo from '../assets/logo.png'   ;
import { Link } from "react-router-dom";
import {auth} from "./Firebase/firebase.config";
import { signOut} from 'firebase/auth';

const Navbar = ({ registeredEmail, setRegisteredEmail}) => {
    const handlelogout = async ()=>{
        console.log("logout was clicked")
        try {
            await signOut(auth)
                  .then(setRegisteredEmail(""))
                  .then (alert("Loged out succesfully"))
        }catch(err){
            alert(err)
        }
    }
    const [isMenuOpen , setIsmenuOpen]= useState(false);
    const [menuClass, setMenuClass]= useState('left-full')
    function toggleMenu(){
        if(isMenuOpen){
            setMenuClass('left-full')
            setIsmenuOpen(!isMenuOpen)
        }else{
            setMenuClass('left-0')
            setIsmenuOpen(!isMenuOpen)
        }
    }
  return (
    <>
        <div className='flex items-center justify-between p-2 px-[5%]  mx-auto fixed bg-white z-50 w-[100vw] shadow-custom '>
            <div className='flex justify-center items-center gap-4'> 
                <img className='w-12' src={Logo} alt="" /> <h2 className='text-2xl font-bold text-sky-600'>MediCare</h2>
            </div>
            <div className='flex justify-between items-center  '>
            
                    <ul id='menuBar' className={` md:flex items-center justify-between gap-10 max-lg:text-sm text-md max-lg:gap-4 font-bold max-md:fixed top-16 ${menuClass} max-md:p-4 w-full max-md:bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in-out z-10`}>
                    <div className={`${registeredEmail ? '' : 'hidden'} text-sky-600 font-bold max-lg:text-sm text-md w-full  md:hidden`}>
                    <p>  Welcome, {registeredEmail.split('@')[0].slice(0, 8)} ! </p>
                 <button className='btn bg-white text-blue-500  border-2 border-sky-500 p-1 px-1  rounded-lg max-lg:p-2 max-lg:text-[10px] hover:bg-sky-600 hover:text-white'>LogOut</button>
              </div>
                        <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'><Link to='/'>Home</Link></li>
                        <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'> <Link to="/about"> About Us</Link> </li>
                        <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'> <Link to="/ourservices">Our Service</Link> </li>
                        <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'> <Link to="/login">Login</Link> </li>
                        
                        <div className='w-full  md:hidden   '>
                        <Link to="/ourservices"> <button className=' md:hidden mt-2  btn bg-sky-500 text-white p-2 px-1 border-none rounded-lg text-[12px]  mx-auto hover:bg-sky-600'>Book Appointment</button></Link>
                        
                        </div>
                    </ul>
                    <button onClick={toggleMenu} className='z-40'><i  className="fa-solid fa-bars text-2xl md:invisible "></i></button>
                
            </div>
            <div className='max-md:hidden flex justify-center items-center gap-10'>
              <Link to="/ourservices">   <button className='  btn bg-sky-500 text-white p-2 px-2 border-none rounded-lg max-lg:p-3 max-lg:text-[12px] hover:bg-sky-600 '>Book Appointment</button></Link>
              <div className={`${registeredEmail ? '' : 'hidden'} text-sky-600 font-bold max-lg:text-sm text-md flex items-center gap-6`}>
              <p> Welcome, {registeredEmail.split('@')[0].slice(0, 8)} ! </p>
              <button onClick={handlelogout} className='btn bg-white text-blue-500  border-2 border-sky-500 p-1 px-1  rounded-lg max-lg:p-2 max-lg:text-[10px] hover:bg-sky-600 hover:text-white'>LogOut</button>
              </div>
            </div>
            
            
        </div>
    </>
  )
}

export default Navbar
