import React from 'react'
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer';
import { Carousel } from "flowbite-react";

const AboutEl = () => {
    console.log("AboutEl component rendered");
  return (
    <>
       <div className='py-[80px] md:mx-20'>
            
            <div className="h-[300px] sm:h-[400px] xl:h-[600px]  ">
            <Carousel>
                <img src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                <img src="https://images.pexels.com/photos/6519838/pexels-photo-6519838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                <img src="https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                <img src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                <img src="https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
            </Carousel>
            </div>
            <div className='text-center font-bold text-4xl my-10 text-sky-600'>
                <h1>About Us</h1>
            </div>
            <Fade left>
            <div className='flex max-md:flex-col justify-center items-center max-md:text-center max-md:gap-10 my-8'>
                <div className='md:w-[50%] md:p-6'>
                     <img className='w-[80%] rounded-full mx-auto max-md:max-w-[380px] ' src="https://images.pexels.com/photos/5207114/pexels-photo-5207114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  " alt="" />
                </div>
                <div className='md:w-[50%] lg:p-6 max-md:max-w-[450px] max-md:mx-auto'>
                    <h2 className='text-3xl font-bold text-sky-800 max-md:text-xl '>24/7 Hotline Available </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique culpa sed mollitia. Error minima ea dolores eligendi aperiam nihil aspernatur ducimus, quas doloremque ipsum esse ad at magnam amet.</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='flex max-md:flex-col-reverse justify-center items-center max-md:text-center max-md:gap-10 my-8'>
                <div className='md:w-[50%] lg:p-6 max-md:max-w-[450px] max-md:mx-auto '>
                    <h2 className='text-3xl font-bold text-sky-800 max-md:text-xl'>Ambulance Services</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique culpa sed mollitia. Error minima ea dolores eligendi aperiam nihil aspernatur ducimus, quas doloremque ipsum esse ad at magnam amet.</p>
                </div>
                <div className='md:w-[50%] md:p-6 pr-0'>
                     <img className='w-[80%] rounded-full mx-auto  max-md:max-w-[380px] ' src="https://images.pexels.com/photos/8942484/pexels-photo-8942484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className='flex max-md:flex-col justify-center items-center max-md:text-center max-md:gap-10 my-8'>
                <div className='md:w-[50%] md:p-6'>
                     <img className='w-[80%] rounded-full mx-auto  max-md:max-w-[380px] ' src="https://images.pexels.com/photos/3985154/pexels-photo-3985154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='md:w-[50%] lg:p-6 max-md:max-w-[450px] max-md:mx-auto'>
                    <h2 className='text-3xl font-bold text-sky-800 max-md:text-xl'>Health Education Workshops</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique culpa sed mollitia. Error minima ea dolores eligendi aperiam nihil aspernatur ducimus, quas doloremque ipsum esse ad at magnam amet.</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='flex max-md:flex-col-reverse justify-center items-center max-md:text-center max-md:gap-10 my-8'>
                <div className='md:w-[50%] lg:p-6 max-md:max-w-[450px] max-md:mx-auto'>
                    <h2 className='text-3xl font-bold text-sky-800 max-md:text-xl'>Medical Camps</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique culpa sed mollitia. Error minima ea dolores eligendi aperiam nihil aspernatur ducimus, quas doloremque ipsum esse ad at magnam amet.</p>
                </div>
                <div className='md:w-[50%] md:p-6 pr-0'>
                     <img className='w-[80%] rounded-full mx-auto  max-md:max-w-[380px] ' src="https://images.pexels.com/photos/5214998/pexels-photo-5214998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            </Fade>

            
       </div>
       <Footer/>
    </>
  )
}

export default AboutEl
