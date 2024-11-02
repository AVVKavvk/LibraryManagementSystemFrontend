import React, { useState } from 'react'
import { AdminID, deleteUser, getItem, IsAdmin, IsLogged, UserEmail } from '../utils/localStorage'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showToast } from '../slice/appConfigSlice'
import { TOAST_ERROR } from '../App'
import { axiosClient } from '../utils/axios'

function DeleteAccount() {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const userEmail =getItem(UserEmail)
  
  const dispatch= useDispatch('')
  const navigate = useNavigate("")

  const deleteAccount= async (e)=>{
    e.preventDefault();
    if (!userEmail){

      navigate("/login")
      return ;
    }
    if (userEmail !== email){
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: "Email not same as register email",
        })
      );
      return 
     }

    try {
      if(window.confirm("Are you sure ?")){
        const res = await axiosClient.delete(`/admin/${email}/${password}`)

        if(res){
        deleteUser(UserEmail)
        deleteUser(AdminID)
        deleteUser(IsAdmin)
        deleteUser(IsLogged)
        navigate("/")
        window.location.reload();
        }
      }
      
    } catch (err) {
      
    }
  }
  return (

    <div>
      <form onSubmit={deleteAccount} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Delete Profile</h2>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
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
          className="w-full py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Delete
        </button>
      </form>
    </div>
  )
}

export default DeleteAccount