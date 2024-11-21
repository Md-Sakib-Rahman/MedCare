import React from 'react'
import Logo from '../assets/logo.png'   ;
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import { useLocation } from "react-router-dom";
const DocBook = () => {
  const location = useLocation();
  const { docDetails } = location.state || {};
  if (!docDetails) {
    return <p>Doctor Details data are unavailable</p>;
  }
  return (
    <>
        <div className='mx-16 mt-16'>
         <div>
         <div className='flex justify-center items-center gap-4'> 
                <img className='w-12' src={Logo} alt="" /> <h2 className='text-2xl font-bold text-sky-600'>MediCare</h2>
            </div>
        </div>   
        <div>
        <Link to="/ourservices"><i class=" text-4xl text-sky-700  fa-solid fa-circle-arrow-left"></i></Link>
        </div>
        <div className='mt-4 underline underline-offset-4 text-4xl text-sky-700 font-bold   mx-auto'>
            <h2>Doc Details:</h2>
        </div>
        <div className='flex  items-center gap-16 mt-10 bg-slate-200 p-4 mx-auto'>
            <div className=''>
                <img className='w-[300px] h-[300px] object-cover rounded-lg' src={docDetails.img} alt="" />
            </div>
            <div className='text-xl flex flex-col gap-6 '>
                <h2 className='font-bold text-sky-900'>Name: {docDetails.name}</h2>
                <h2 className='font-bold text-sky-900'>Designation: {docDetails.Designation}</h2>
                <div className='flex justify-start'>
                    <h2 className='font-bold text-sky-900'>Description: </h2>
                    <p className='text-sky-900'>. {docDetails.description}</p>
                </div>
                <h2 className='font-bold text-sky-900'>Email: {docDetails.email}</h2>
                <h2 className='font-bold text-sky-900'>Phone: {docDetails.phone}</h2>
                <h2 className='font-bold text-sky-900'>Doctor Fee:{docDetails.fee} $ </h2>

            </div>
        </div>
        <div className='mt-5 underline underline-offset-4 text-4xl text-sky-700 font-bold'>
            <h2>Appointment Form:</h2>
        </div>
        <div>
            <BookingForm/>
        </div>
        </div>
    </>
  )
}

export default DocBook
