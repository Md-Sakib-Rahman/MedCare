import React, { useState } from 'react';
import Logo from '../assets/logo.png'   ;
import { Link } from "react-router-dom";
const Navbar = () => {

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
                        <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'><Link to='/'>Home</Link></li>
                        <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'> <Link to="/about"> About Us</Link> </li>
                        <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'> <Link to="/ourservices">Our Service</Link> </li>
                        {/* <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'>Blog</li>
                        <li className='hover:text-sky-600 max-md:p-4 max-md:hover:bg-[#ffffff] rounded-lg'>Contact Us</li> */}
                        <div className='w-full flex md:hidden'>
                        <Link to="/ourservices"> <button className=' md:hidden mt-2  btn bg-sky-500 text-white p-2 px-1 border-none rounded-lg text-[12px]  mx-auto hover:bg-sky-600'>Book Appointment</button></Link>
                        </div>
                    </ul>
                    <button onClick={toggleMenu} className='z-40'><i  className="fa-solid fa-bars text-2xl md:invisible "></i></button>
                
            </div>
            <div className='max-md:hidden'>
              <Link to="/ourservices">   <button className='  btn bg-sky-500 text-white p-2 px-2 border-none rounded-lg max-lg:p-3 max-lg:text-[12px] hover:bg-sky-600 '>Book Appointment</button></Link>
            </div>
            
        </div>
    </>
  )
}

export default Navbar
