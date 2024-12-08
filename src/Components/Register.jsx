import React, { useState } from 'react'
import Navbar from './Navbar'
import Logo from '../assets/logo.png' ;
import {auth, googleProvider} from "./Firebase/firebase.config"
import { createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = ({setRegisteredEmail, registeredEmail}) => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate = useNavigate();

   const handleSignUp= async ()=>{
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // User created successfully
        alert("Account created successfully!");
        console.log("User:", userCredential.user);
        setRegisteredEmail(userCredential.user.email)
        navigate("/");  // Navigate to home page
    })
    .catch((error) => {
        // Handle specific errors
        if (error.code === "auth/email-already-in-use") {
            alert("This email is already registered.");
            navigate("/"); 
        } else {
            console.error("Error during sign-up:", error.message);
            alert("An error occurred: " + error.message);
        }
    });

   } ;
   const handleSignUpWithGoogle= async ()=>{
    console.log("handleSignUpWithGoogle was clicked")
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google User:", user);
      setRegisteredEmail(user.email);
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Error: " + error.message);
    }
   }
  return (
    <>
        <Navbar registeredEmail={registeredEmail} setRegisteredEmail={setRegisteredEmail}/>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-40">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={Logo}
            className="mx-auto  w-52"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" 
          onSubmit={(e) => {
            e.preventDefault(); 
            handleSignUp(); 
          }}
          >
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder='Enter Your Email'
                  onChange={(e)=> setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder='Enter Your Password'
                  onChange={(e)=> setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                
                 type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              <div className="mt-10 text-center text-sm/6 text-gray-800">
                <p>Sign up with : </p>
                <div className=' mt-5 flex justify-center items-center gap-6'>
                <button onClick={handleSignUpWithGoogle} className='p-4'><i class="fa-brands fa-google text-3xl text-blue-500"></i></button>
                <i class="fa-brands fa-github text-3xl text-blue-500"></i>
                </div>
           </div>
            </div>
          </form>
           
         
        </div>
      </div>
    </>
  )
}

export default Register
