import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { Link } from "react-router-dom";
const Ambulance = () => {
  return (
    <>
    <div className='flex max-md:flex-col justify-between items-center gap-10  md:px-10 md:border-l-4  md:border-sky-600 mx-10 '>
            <h1 className='pt-8 text-center text-4xl text-sky-600 font-bold md:w-[50%] lg:w-[40%] '>Emergency Ambulance Services</h1>
                    <form className="flex  flex-col gap-4 mx-auto px-4 md:w-[50%] lg:w-[60%]">
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="Name" value="Your Full Name" />
                        </div>
                        <TextInput id="Name" type="email" placeholder="Type Your Full Name" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="phone" value="Your phone number" />
                        </div>
                        <TextInput id="phone" type="text" placeholder="Type your Phone number" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="location" value="Location" />
                        </div>
                        <TextInput id="location" type="text"placeholder="Type your Location" required shadow />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </Link>
                        </Label>
                    </div>
                    <Button type="submit">Request and Ambulance</Button>
                    </form>
            </div>
    </>
  )
}

export default Ambulance
