import React from 'react'
import bgVidMp4 from '../assets/bg.mp4'
import bgVidWbm from '../assets/bg.webm'
import HealthSolution from './HealthSolution'
import Ourdoc from './Ourdoc'
import Footer from './Footer'
const Home = () => {
  return (
    <>
        <div>
        <video src={bgVidMp4}
        autoPlay 
        loop 
        muted 
        playsInline 
        className=' absolute top-16 left-0   w-full h-[90vh] object-cover -z-20'
        ></video>
        <div className="absolute top-16 left-0 w-full h-[90vh] bg-black opacity-80 z-0"></div>

        <div className="absolute top-19 left-0 w-full h-[90vh] flex items-center justify-center z-0 text-white text-center">
          <div>
            <h1 className="text-6xl max-md:text-4xl font-bold ">Welcome to <span className='text-sky-400'>MediCare</span></h1>
            <p>Your health, our priority</p>
          </div>
        </div>

        </div>
        <div className='absolute top-[100vh] w-full '>
            <HealthSolution/>
            <Ourdoc/>
            <Footer/>
        </div>
        
    </>
  )
}

export default Home
