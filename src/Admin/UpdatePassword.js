import React, { useState } from 'react'
import { getItem, IsAdmin, UserEmail } from '../utils/localStorage'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showToast } from '../slice/appConfigSlice'
import { TOAST_ERROR } from '../App'
import { axiosClient } from '../utils/axios'
import Login from '../components/Login'

function UpdatePassword() {
  const [newPassword, setNewPassword]= useState("")
  const [password, setPassword]= useState("")
  const email =getItem(UserEmail)
  const isAdmin = getItem(IsAdmin)

  const navigate = useNavigate("")
  const dispatch= useDispatch('')

  const updateDetails= async (e)=>{
    e.preventDefault();
    if (!email){

      navigate("/login")
      return ;
    }

    if (password === newPassword){
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: "Both password can't same",
        })
      );
      return ;
    }
    try {
      const res = await axiosClient.put("/admin/password",{
        admin:{
          email,
          password
        },
        newPassword
      })      
      
    } catch (err) {
      
    }

    if (!isAdmin) return <Login/>
  }
  return (
    <div>
    <form onSubmit={updateDetails} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Update Password</h2>

      <div>
        <label className="block text-gray-700">New Password</label>
        <input
          type="text"
          value={newPassword}
          required
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>

      <div>
        <label className="block text-gray-700">Old Password</label>
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

export default UpdatePassword