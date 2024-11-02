import React, { lazy } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AdminID, getItem, IsAdmin } from '../utils/localStorage'
import Login from '../components/Login'
import Signup from '../components/Signup'

const AdminSignup = lazy(()=>import('../Signup/AdminSignup'))
const AdminAccount = lazy(()=>import('./AdminAccount'))
const GetAllAdmins = lazy(()=>import('./GetAllAdmin'))
const UpdateNamePhone = lazy(()=>import('./UpdateNamePhone'))
const UpdatePassword = lazy(()=>import('./UpdatePassword'))
const DeleteAccount = lazy(()=>import('./DeleteAccount'))
const ProfilePage = lazy(()=>import('./ProfilePage'))

function Admin() {
  const admin_id =getItem(AdminID)
  const isAdmin = getItem(IsAdmin)

  if (!isAdmin) return <Login/>

  return (
    <div className="flex min-h-screen">

      <div className="w-[300px] bg-gray-900 text-white p-4 h-screen">
      <h2 className="text-xl font-semibold mb-4 text-center">Admin Sections</h2>
      <ul className="space-y-2 text-center">
        <li>
          <Link 
          to={`/admin/${admin_id}`} className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-600">
            Your Account
          </Link>
          </li>
          <li>
          <Link 
          to="/admin/all" className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-600">
            All Admins
          </Link>
          </li>
        <li>
          <Link 
          to="/admin/update" className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-yellow-400">
            Update Basic Details
          </Link>
          </li>
        <li>
          <Link 
          to="/admin/update-password" className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-yellow-400">
            Update Password
          </Link>
          </li>
        <li>
          <Link 
          to="/admin/add" className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-yellow-400">
            Add Admin
          </Link>
          </li>
        
        <li>
          <Link 
          to="/admin/del" className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-red-500">
            Delete Account
          </Link>
          </li>

      </ul>

      </div>
      <div className="flex-1 bg-gray-100 p-6">
        <Routes>

          <Route
           path=":admin_id"
           element={<AdminAccount/>}
          />
          <Route
           path="update"
           element={<UpdateNamePhone/>}
          />
          <Route
           path="update-password"
           element={<UpdatePassword/>}
          />
          <Route
           path="all"
           element={<GetAllAdmins/>}
          />
          <Route
           path="add"
           element={<AdminSignup/>}
          />
          <Route
           path="del"
           element={<DeleteAccount/>}
          />
          <Route
           path="*"
           element={<ProfilePage/>}
          />
        </Routes>
      </div>
    </div>
  )
}

export default Admin