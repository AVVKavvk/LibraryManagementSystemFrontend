import { useState } from "react";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import { useDispatch } from "react-redux";
import { axiosClient } from "../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import { AdminID, getItem, IsAdmin, IsLogged, setItem, UserEmail, UserName, UserNumber } from "../utils/localStorage";

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch= useDispatch('')
  const navigate = useNavigate('')

  const SubmitForm = async (e) => {
    e.preventDefault();
    
     try {
        const res = await axiosClient.post('/login/admin',{
          email,
          password
        })        
        if (res){            
          setItem(UserEmail,res?.data?.email)
          setItem(UserName,res?.data?.name)
          setItem(UserNumber,res?.data?.phone)
          setItem(AdminID,res?.data?._id)
          setItem(IsAdmin,true)
          setItem(IsLogged,true)
          navigate('/')
          
        }

     } catch (err) {
      
     }

  };

  return (
    <div>
      <form onSubmit={SubmitForm} className="max-w-[400px] mx-auto p-6 my-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
        {[
          { label: 'Email', type: 'email', stateSetter: setEmail },
          { label: 'Password', type: 'password', stateSetter: setPassword },

        ].map(({ label, type, stateSetter }) => (
          <div key={label} className="flex flex-row items-center mx-auto justify-center gap-5 rounded-md m-2 p-3 w-full bg-white shadow-md">
            <label className="w-[100px] text-center font-medium text-gray-700">{label}</label>
            <input
              type={type}
              onChange={e => stateSetter(e.target.value)}
              className="bg-gray-200 rounded-md p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-[150px] flex justify-center items-center mx-auto bg-green-500 text-white font-bold py-2 rounded-md mt-4 hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
        <div className="flex mt-8 justify-center items-center gap-2">
          <h2>Don't have account </h2>
        <Link to="/admin/signup"
          className="w-[80px] flex justify-center items-center py-2 bg-green-400 text-white font-bold  rounded-md hover:bg-green-500 transition duration-200"
        >
          Sign in
        </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminSignup;
