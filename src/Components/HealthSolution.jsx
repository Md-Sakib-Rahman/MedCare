import React from 'react'

const HealthSolution = () => {
  return (
    <div>
      <div className='pl-12 max-sm:pl-8 max-sm:pr-8'>
            <div className='border-l-4 border-sky-600 '>
                <h2 className='text-sky-600 font-bold ml-8 mt-5'>HEALTH SOLUTIONS</h2>
                
            </div>
            <h2 className='text-2xl font-semibold mt-5 mb-5'>Healthcare services for your well-being </h2>
            
            </div>
            <div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='w-[300px] xl:w-[350px] p-4 mx-auto flex flex-col gap-5 justify-between items-start border-gray-500/30 border-2 rounded-lg mb-5 hover:bg-gray-100'>
                    <div className=' border-2 border-gray-300   rounded-lg p-1 aspect-square' ><i class=" fa-solid fa-tooth text-4xl text-sky-600 "></i></div>
                    <h2 className='text-2xl font-bold'>Dentist</h2>
                    <p className='text-gray-400'>Offering Expert dental care for routine check-ups, cleanings and advanced treatments.</p>
                    <i class="fa-solid fa-arrow-up-right-from-square text-sky-600 text-3xl"></i>    
                </div>
                <div className='w-[300px] xl:w-[350px] p-4 mx-auto flex flex-col gap-5 justify-between items-start border-gray-500/30 border-2 rounded-lg mb-5 hover:bg-gray-100'>
                    <div className=' border-2 border-gray-300   rounded-lg p-1 aspect-square'><i class="fa-solid fa-children text-4xl text-sky-600"></i></div>
                    <h2 className='text-2xl font-bold'>Pediatrics</h2>
                    <p className='text-gray-400'>Comprehensive healthcare for children. From new-borns to adoloscents.</p>
                    <i class="fa-solid fa-arrow-up-right-from-square text-sky-600 text-3xl "></i>    
                </div>
                <div className='w-[300px] xl:w-[350px] p-4 mx-auto flex flex-col gap-5 justify-between items-start border-gray-500/30 border-2 rounded-lg mb-5 hover:bg-gray-100'>
                    <div className=' border-2 border-gray-300   rounded-lg p-1 aspect-square'><i class="fa-solid fa-heart-pulse text-4xl text-sky-600"></i></div>
                    <h2 className='text-2xl font-bold'>Cardiology</h2>
                    <p className='text-gray-400'>Specialized heart care, providing diagnosis and treatment for cardiovascular conditions </p>
                    <i class="fa-solid fa-arrow-up-right-from-square text-sky-600 text-3xl"></i>    
                </div>
            </div>
    </div>
  )
}

export default HealthSolution
