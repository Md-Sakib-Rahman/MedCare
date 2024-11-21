
import  { React, useEffect, useState } from 'react'
import DocPic from '../assets/transparent-doc.png'
import TopDocCard from '../Components/TopDocCard'
const Ourdoc = () => {
    
    const [topDocs ,setTopDocs] = useState([]);
    
    useEffect(()=>{
        fetch("https://md-sakib-rahman.github.io/doctorsDB/db.json")
        .then(res => res.json())
        .then(data => setTopDocs(data.posts))
    }, [])
    const filteredDocs = topDocs.filter((doc) => doc.id <= 4);
  return (
    <>
      <div className='flex justify-center items-center lg:max-w-[90%] mx-auto max-lg:flex-col my-6'>

        <div className=' lg:w-[50%] max-lg:w-[100%] lg:border-l-4 max-lg:border-b-4 border-sky-500'>
            <img className=' object-contain max-lg:mx-auto' src={DocPic} alt="" />
        </div>
        <div className=' lg:w-[50%] max-lg:text-center max-lg:max-w-[90%] max-lg:mx-auto max-lg:my-6'>
            <h2 className='text-6xl md:text-5xl text-sky-950 font-bold '>
                Our <span className='text-sky-700'>expert</span> <br className='max-lg:hidden' />Specialist. 
            </h2>
            <div className='my-8'>
                <p className='font-bold'>Dr. Jenny Doe</p>
                <p className='text-gray-400'>MBBS / in psychology</p>
                <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis ea minus eum aliquid, sed porro incidunt facere, eos, ratione assumenda doloribus odit ipsam consequatur maiores necessitatibus perferendis. Iste possimus nostrum tempore autem. Cumque, repellendus! Blanditiis explicabo quaerat facere. Nihil iusto autem expedita rerum doloribus aliquam porro similique, sed cupiditate?</p>
            </div>
            <div className='bg-sky-500 text-white p-3 w-[60%] max-w-[310px] min-w-[260px] max-lg:w-[40%] flex gap-4 items-center rounded-xl my-3 max-lg:mx-auto max-lg:justify-center ' >
                <h1 className='text-4xl'>30+</h1>
                <div>
                    <p className='text-2xl'>YEARS</p>
                    <p className=''>profession experience </p>
                </div>
            </div>
        </div>

      </div>
      <h2 className='max-w-[90%] mx-auto text-4xl font-semibold text-sky-900 my-10 max-md:text-center'>And Other <span className='text-sky-600'>Top</span> Professionals</h2>
      <div id='docDiv' className='grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-6 max-w-[90%] mx-auto my-10'>

            
      {
                filteredDocs.map((docDetails) => (
                    <TopDocCard key={docDetails.id} docDetails={docDetails} />
                  ))
      }

      </div>
    </>
  )
}

export default Ourdoc
