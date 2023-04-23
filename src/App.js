import React,{useState} from 'react';
import image from './image/login.jpg';
import {FcGoogle} from "react-icons/fc";

export default function App() {
const [show, setShow]=useState(false);
const handleShow =()=>{
  setShow(!show);
}
  return (

    // it isn't not responsive, so you should make it a responsive as homework?

   <div className=" bg-gray-200 mb-72 rounded-2xl mt-28 h-[600px] md:mx-[400px]">
   <div className="flex   justify-around h-[600px] ">
    <div className='pt-6 items-center justify-center'>
      <h1 className='text-blue-900 text-2xl font-bold text-center'>Login</h1>
      <p className='text-blue-900 font-bold text-center pt-3'>if you already a member. Easily log in </p>
      <form className='flex flex-col pt-6'>
        <input type="email" placeholder="Email" className="h-12 focus:outline-none mb-6 placeholder:font-bold font-bold placeholder:text-blue-900 text-blue-900 pl-2 rounded-lg w-full "/>
        <div className="flex relative">
        <input type={!show ? "password":"text"} placeholder='Password' className="h-12 focus:outline-none mb-6 placeholder:font-bold font-bold placeholder:text-blue-900 text-blue-900 pl-2 rounded-lg w-full "/>
        <div onClick={handleShow} className='mt-2 ml-1' >
          {show ? (
            <svg  className="absolute h-10 w-6 top-1 left-62 right-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>

          ):(
            <svg className="absolute h-10 w-6 top-1 left-62 right-6 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
          )}
        </div>
                 </div>

        <button className="h-12 mb-6 text-white font-bold bg-blue-900 pl-2 rounded-lg w-full duration-300 hover:text-xl">Log In</button>
      </form>   
      
      <div className='grid grid-cols-3 mt-4 mb-3'>
        <hr className="font-bold border border-gray-400"/>
        <p className='pl-6 mt-[-10px] font-bold text-blue-900'>OR</p>
        <hr className="font-bold border border-gray-400"/>
      </div>
      <button className="h-12 mb-6 text-black text-sm font-bold bg-white pl-2 rounded-lg w-full flex justify-around items-center hover:scale-100 duration-300 hover:text-lg hover:text-blue-800 "> <FcGoogle size={30} className='text-center mr-[-100px]'/>Login with Google</button>
      <p className='text-blue-900 font-bold text-start pt-3 border-gray-500 pb-3 border-b-4 duration-300 hover:text-xl'>Forget Password ?</p>
      <div className="flex justify-between pt-3">
        <p className='text-blue-900 font-bold text-start pt-3 text-sm'>Don't have an account ? Create</p>
        <button className="h-12 mb-6 text-blue-900 text-sm font-bold bg-white text-center ml-3 rounded-lg w-24 hover:font-bold  duration-300 hover:text-xl">Register</button>
      </div>
    </div>
    <div className="w-[400px] h-[600px] pt-6">
      <img src={image} alt="images"  className="h-[550px]  w-full rounded-lg"/>
    </div>
    </div>
   </div>
  )
}

