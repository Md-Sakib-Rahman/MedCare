import React from 'react'

const TopDocCard = ({ docDetails }) => {
    
  return (
   <>   
   <div className='max-w-[400px] flex flex-col justify-between items-center p-4 mx-auto  bg-gray-200 rounded-lg gap-3 shadow-custom'>
                    <div className='xl:w-64 xl:h-72 md:w-54 md:h-64  overflow-hidden'>
                        <img className=' w-64 h-72 object-cover rounded-md' src={docDetails.img} alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center '>
                        
                        <div>
                            <h2 className='text-1xl font-bold'>{docDetails.name}</h2>
                            <p className='text-gray-400'>{docDetails.Designation}</p>
                        </div>
                        <div>
                            <button className='bg-sky-600 hover:bg-sky-800 rounded-lg w-16 text-white'><i class="fa-solid fa-arrow-right p-4"></i></button>
                        </div>
                    </div>
    </div>
   

   </>
  )
}

export default TopDocCard
