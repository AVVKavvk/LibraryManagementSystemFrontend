import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { axiosClient } from "../utils/axios"
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AdminID, deleteUser, getItem, IsAdmin, IsLogged, setItem, UserEmail } from "../utils/localStorage";
import Login from "../components/Login";
import Placeholder from "../helper/Placeholder";

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
    <div>
      {
        adminData
        ?
        <div className="flex max-w-[1000px] text-xl mx-auto justify-center  shadow-lg  rounded px-5 py-10 gap-7 mt-8 h-[50vh] ">
        <div className="flex flex-col gap-16 justify-center items-center ">
          <div className="flex justify-center flex-col w-[400px] items-center mx-auto gap-5 shadow-lg rounded-md p-4 ">
            <h1 className="bg-green-400 rounded-md px-4 py-1">
              Permissions
            </h1>
            <ul className=" list-disc list-inside flex gap-2 flex-col">
            <li className="">
              Admin
            </li>
            </ul>
          </div>
          <button 
            onClick={Logout} 
            className="bg-red-500 rounded-md p-2 px-3 w-[100px] hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <div className="flex justify-center flex-col items-center py-10 mx-auto gap-10 shadow-md rounded-md p-4 ">
          <h1 className="bg-green-400 rounded-md px-4 py-1">
            Profile
          </h1>
          <div className="flex justify-center shadow-lg rounded-md p-4 items-center mx-auto flex-col gap-5">
            <h1>{adminData?.name}</h1>
            <h2 className="flex justify-center mx-auto gap-5 items-center "> 
              <FaPhoneAlt/>
              <span>{adminData?.phone}</span>
            </h2>
            <h2 className="flex justify-center mx-auto gap-5 items-center"> 
              <SiGmail/>
              <span>{adminData?.email}</span>
            </h2>
          </div>
        </div>
        </div>
        :
        <Placeholder/>
      }
    </div>
  )
}

export default AdminAccount;
