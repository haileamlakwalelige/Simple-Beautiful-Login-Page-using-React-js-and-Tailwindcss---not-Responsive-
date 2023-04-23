import image from './image/login.jpg';

export default function Other() {
  return (
   <div className=" bg-gray-50  rounded-2xl min-h-screen flex items-center justify-center">
   <div className="flex   justify-center h-[600px]  bg-gray-200  rounded-2xl shadow-lg m-20 w-[100vh] sm:w-1/2 sm:mr-[-50px] mr-0  pl-[-750px]">
    <div className='pt-6 items-center justify-center pr-6'>
      <h1 className='text-blue-900 text-2xl font-bold text-center'>Login</h1>
      <p className='text-blue-900 font-bold text-center pt-3'>if you already a member. Easily log in </p>
      <form className='flex flex-col pt-6'>
        <input type="email" placeholder="Email" className="h-12 mb-6 placeholder:font-bold ml-3 mr-6 placeholder:text-blue-900 pl-2 rounded-lg w-full "/>
        <input type="password" placeholder='Password' className="h-12 mb-6 placeholder:font-bold placeholder:text-blue-900 pl-2 rounded-lg w-full "/>
        <button className="h-12 mb-6 text-white font-bold bg-blue-900 pl-2 rounded-lg w-full ">Log In</button>
      </form>   
      <div className='grid grid-cols-3 mt-4 mb-3'>
        <hr className="font-bold border border-gray-400"/>
        <p className='pl-6 mt-[-10px]'>OR</p>
        <hr className="font-bold border border-gray-400"/>
      </div>
      <button className="h-12 mb-6 text-black text-sm font-bold bg-white pl-2 rounded-lg w-full ">Login with Google</button>
      <p className='text-blue-900 font-bold text-start pt-3 border-gray-500 pb-3 border-b-4'>Forget Password ?</p>
      <div className="flex justify-between pt-3">
        <p className='text-blue-900 font-bold text-start pt-3 text-sm'>Don't have an account ? Create</p>
        <button className="h-12 mb-6 text-blue-900 text-sm font-bold bg-white text-center ml-3 rounded-lg w-24">Register</button>
      </div>
    </div>
    <div className="w-1/2 h-[600px] pt-6">
      <img src={image} alt="images"  className="h-[550px]   w-full rounded-lg"/>
    </div>
    </div>
   </div>
  )
}


