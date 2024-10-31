import React from 'react'
import { PiStudent } from 'react-icons/pi'
import { RiAdminFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="flex max-w-[1300px] text-2xl flex-col justify-center  gap-20 items-center mx-auto mt-10 ">
      <h1 className="">Welcome to <span className=" text-3xl font-bold">Librohub</span></h1>
      <div className=" w-full flex justify-between  items-center">
      
      <Link to="/admin/signup" className="flex justify-center items-center flex-col mx-auto gap-5 bg-gray-300 rounded-md  w-[300px] h-[300px] hover:scale-105 transition-all duration-500">
        <h1>Sign In as Admin </h1>
        <RiAdminFill size={70}/>
      </Link>
      <Link  to= "/student/signup" className="flex justify-center items-center flex-col mx-auto gap-5 bg-gray-300 rounded-md  w-[300px] h-[300px] hover:scale-105 transition-all duration-500">
        <h1>Sign In as Student </h1>
        <PiStudent size={80}/>
      </Link>
      </div>
    </div>
  )
}

export default Signup