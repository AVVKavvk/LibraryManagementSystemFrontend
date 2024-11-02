import React, { useState } from 'react'
import { getItem, UserEmail } from '../utils/localStorage'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showToast } from '../slice/appConfigSlice'
import { TOAST_ERROR } from '../App'
import { axiosClient } from '../utils/axios'

function UpdateNamePhone() {
  const [name, setName]= useState("")
  const [phone, setPhone]= useState("")
  const [password, setPassword]= useState("")
  const email =getItem(UserEmail)
  
  const dispatch= useDispatch('')
  const navigate = useNavigate("")

  const validatePhoneNumber = (phone) => {

    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const updateDetails= async (e)=>{
    e.preventDefault();
    if (!email){

      navigate("/login")
      return ;
    }
    if (!validatePhoneNumber(phone)){
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: "Phone Number not vaild",
        })
      );
      return 
     }

    try {
      const res = await axiosClient.put("/admin",{
        email,
        password,
        name,
        phone
      })      
      
    } catch (err) {
      
    }
  }
  return (

    <div>
      <form onSubmit={updateDetails} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Update Profile</h2>

        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="number"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Account Password</label>
          <input
            type="text"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <button
          type="submit" 
          className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateNamePhone