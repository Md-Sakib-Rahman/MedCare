import React from 'react'
import Logo from '../assets/logo.png' 

const Footer = () => {
  return (
   <>
   
   <div className='bg-slate-200 h-full w-full py-4 overflow-hidden'>
      
        <div className='flex max-lg:flex-col '>
                <div className=' basis-1/3 gap-3  grow'>
                    <div className="flex justify-center items-center mt-8 mx-auto"><img className='w-36 max-lg:w-44 max-md:w-[100px]' src={Logo} alt="" /> <h2 className='text-4xl font-bold text-sky-600'>MediCare</h2></div>
                    <p className='text-sky-900 text-center font-semibold text-xl my-2 max-lg:text-2xl'>Your Health, Our Priority</p>
                    <p className='mt-6 w-96 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui laboriosam sint similique ducimus commodi repudiandae id ipsam deleniti optio necessitatibus nesciunt mollitia blanditiis, nam consectetur neque culpa, error illo.</p>
                </div>
                <div className=' basis-1/3 text-center mt-8'>
                    <h2 className='text-4xl font-bold text-sky-900 max-md:text-2xl'>Important links</h2>
                    <ul className='text-center text-xl w-[300px] mx-auto'>
                        <li className='p-3 my-6 lg:ml-8 items-center  flex max-lg:justify-center'><i class="fa-regular fa-circle-check mr-4"></i> <div>Support</div></li>
                        <li className='p-3 my-6 lg:ml-8  items-center flex max-lg:justify-center'><i class="fa-regular fa-circle-check mr-4"></i> <div>Privacy policy</div></li>
                        <li className='p-3 my-6 lg:ml-8 items-center  flex max-lg:justify-center'><i class="fa-regular fa-circle-check mr-4"></i> <div>Terms and condition</div></li>
                        <li className='p-3 my-6 lg:ml-8 items-center  flex max-lg:justify-center'><i class="fa-regular fa-circle-check mr-4"></i> <div>Site map</div></li>
                    </ul>
                </div>
                <div className='basis-1/3 text-left mt-8 p-4'>
                    <h2 className='text-4xl text-center font-bold text-sky-900 max-md:text-2xl'>Contact</h2>
                    <div className='w-[200px] mx-auto'>
                    <p className='p-3 text-xl my-6 lg:ml-8 max-lg:text-center'>013 37837</p>
                    <p className='p-3 text-xl my-6 lg:ml-8 max-lg:text-center'>013 37837</p>
                    <p className='p-3 text-xl my-6 lg:ml-8 max-lg:text-center'>info@medicare.com</p>
                    </div>
                    
                    <div className='flex justify-center gap-10 items-center text-4xl text-sky-600 max-md:text-2xl'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-solid fa-envelope"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
        </div>
        <div>
            
        </div>

    </div>
   
   </>
  )
}

export default Footer
