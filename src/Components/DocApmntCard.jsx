import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
const DocApmntCard = ({ docDetails }) => {
  return (
    <Fade>
    <div className='max-w-[400px] flex flex-col justify-between items-center p-4 mx-auto bg-gray-200 rounded-lg gap-3 shadow-custom'>
                    <div className='xl:w-64 xl:h-72 md:w-48 lg:w-52 md:h-64  overflow-hidden'>
                        <img className=' w-64 h-72 object-cover rounded-md' src={docDetails.img} alt="" />
                    </div>
                    <div className='w-full flex-col  items-center '>
                        
                        <div className='w-[60%]'>
                            <h2 className='text-1xl font-bold'>{docDetails.name}</h2>
                            <p className='text-gray-400'>{docDetails.Designation}</p>
                        </div>
                        <div className='my-2 flex justify-evenly items-center'>
                            <div>
                                <h2 className='text-sky-700 font-bold'>{docDetails.fee}$/Session</h2>
                            </div>
                            <Link className='w-[70%]  ' to="/docbook" state={{ docDetails }}>
                            <button className='bg-sky-600 hover:bg-sky-800 rounded-lg py-3 gap-2 px-4 text-white  flex justify-center items-center justify-self-end text-right   '> 
                                <div className='text-[12px]'>See more</div>
                                <i className="fa-solid fa-arrow-right "></i>
                            </button>
                            </Link>
                        </div>
                    </div>
    </div>
    </Fade>
  )
}

export default DocApmntCard
