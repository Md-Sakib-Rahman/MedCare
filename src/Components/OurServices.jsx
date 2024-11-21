import {React, useState, useEffect} from 'react'
import Navbar from './Navbar'

// import DocApmntCard from "../Components/DocApmntCard";
import FindDoc from "../Components/FindDoc";
import Services from "../Components/Services";
import Ambulance from "../Components/Ambulance";
import Footer from "../Components/Footer";
function OurServices() {
    const [activeComponent, setActiveComponent] = useState("findDoctors");
    // const [topDocs ,setTopDocs] = useState([]);
    
    // useEffect(()=>{
    //     fetch("https://md-sakib-rahman.github.io/doctorsDB/db.json")
    //     .then(res => res.json())
    //     .then(data => setTopDocs(data.posts))
    // }, [])
  return (
    <>
        
        <Navbar/>
        <div className='py-24 '>

            <h1 className='py-8 mx-10 text-left text-4xl text-sky-600 font-bold'>Services</h1>
            <Ambulance/>

            <div>
                <div className='flex justify-center items-center mx-auto gap-10 my-10'>

                <button 
                className={`${
                activeComponent === "findDoctors" ? "bg-sky-800" : "bg-sky-600"} hover:bg-sky-800 rounded-lg text-white w-28 py-2 px-2`}
                onClick={() => setActiveComponent("findDoctors")}
                >Find Doctors</button>           

                <button    
                className={`${
                activeComponent === "findServices" ? "bg-sky-800" : "bg-sky-600"} hover:bg-sky-800 rounded-lg text-white w-28 py-2 px-2`
                          }
                onClick={() => setActiveComponent("findServices")}
                >Find Services</button>                                       
                    
                </div>
                {activeComponent === "findDoctors" && <FindDoc />}
                {activeComponent === "findServices" && <Services />}
                
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default OurServices
