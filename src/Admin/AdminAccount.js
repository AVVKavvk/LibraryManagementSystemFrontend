import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { axiosClient } from "../utils/axios"
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AdminID, deleteUser, getItem, IsAdmin, IsLogged, setItem, UserEmail } from "../utils/localStorage";
import Login from "../components/Login";
import Placeholder from "../helper/Placeholder";
import adminImg from '../img/admin.png'
const AdminAccount = () => {
  const { admin_id } = useParams() 
  const [adminData, setAdminData] = useState(null)
  const navigate = useNavigate()
  const islogged = getItem(IsLogged)
  
  useEffect(() => {
    GetAdminData()
  }, [admin_id]) 

  const GetAdminData = async () => {
    if (!islogged) return;
    try {
      const res = await axiosClient.get(`/admin-profile/${admin_id}`)
      setAdminData(res.data); 
    } catch (err) {
      console.error(err);
    }
  }

  const Logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      deleteUser(UserEmail)
      deleteUser(AdminID)
      deleteUser(IsAdmin)
      deleteUser(IsLogged)
      deleteUser(AdminID)
      navigate("/")
      window.location.reload();
    }
  }
  if (!islogged) return <Login/>

  return (
    <div className="w-full flex justify-center items-center py-10">
    {adminData ? (
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[600px] text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Profile</h1>

        <img 
            src={adminImg} 
            alt="Student" 
            className=" w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-300"
          />

        <div className="bg-green-400 rounded-md px-4 py-1 mb-4">
          <h2 className="text-xl font-semibold">Permissions</h2>
          <ul className="list-disc  list-inside flex flex-col items-start mt-2">
            <li className=" ml-10 text-center">Admin</li>
          </ul>
        </div>

        <div className="flex flex-col items-center shadow-lg rounded-md p-4 mb-4">
          <h1 className="text-xl font-semibold mb-2">{adminData?.name}</h1>
          <h2 className="flex justify-center gap-2 items-center mb-2">
            <FaPhoneAlt />
            <span>{adminData?.phone}</span>
          </h2>
          <h2 className="flex justify-center gap-2 items-center">
            <SiGmail />
            <span>{adminData?.email}</span>
          </h2>
        </div>

        <button 
          onClick={Logout} 
          className="bg-red-500 rounded-md p-2 px-3 w-[100px] hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    ) : (
      <Placeholder />
    )}
  </div>

  )
}

export default AdminAccount;
