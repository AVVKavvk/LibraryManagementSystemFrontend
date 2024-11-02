import React, { useEffect, useState } from 'react'
import { axiosClient } from '../utils/axios'

function GetAllAdmin() {
  const [allAdmins, setAllAdmins] = useState([]) 

  useEffect(() => {
    getAdmins()
  }, [])
  
  const getAdmins = async () => {
    try {
      const res = await axiosClient.get("/admin/all")
      setAllAdmins(res?.data || [])
    } catch (err) {
      console.error("Error fetching admins:", err)
    }
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 py-10">
      <div className="w-full  bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Admin List</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {allAdmins.length > 0 ? (
            allAdmins.map((admin, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-gray-700">{admin?.name}</h3>
                <p className="text-gray-600">Email: {admin?.email}</p>
                <p className="text-gray-600">Phone: {admin?.phone}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No admins available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default GetAllAdmin
