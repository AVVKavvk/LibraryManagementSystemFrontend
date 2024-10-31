import { useState } from "react";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import { useDispatch } from "react-redux";
import { axiosClient } from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { getItem, setItem, UserCourse, UserEmail, UserMIS, UserName, UserNumber, UserSem } from "../utils/localStorage";

const StudentSignup = () => {
  const [password, setPassword] = useState("");
  const [mis, setMIS] = useState("");

  const dispatch= useDispatch('')
  const navigate = useNavigate('')


  const validateMIS = (mis) => {
    const misRegex = /^[0-9]{9}$/;
    return misRegex.test(mis);
  };

  const SubmitForm = async (e) => {
    e.preventDefault();

     if (!validateMIS(mis)){
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: "MIS not vaild",
        })
      );
      return 
     }     
     try {
        const res = await axiosClient.post('/student/password',{
          password,
          mis
        })
        
        if (res){
          const data= res?.data
          setItem(UserEmail,data?.email)
          setItem(UserName, data?.name)
          setItem(UserNumber,data?.phone)
          setItem(UserCourse,data?.course)
          setItem(UserSem,data?.sem)
          setItem(UserMIS,data?.mis)

          // console.log(getItem(UserEmail),getItem(UserName),getItem(UserCourse),getItem(UserMIS),getItem(UserSem),getItem(UserNumber));
          navigate("/")
        }

     } catch (err) {
      
     }

  };

  return (
    <div>
      <form onSubmit={SubmitForm} className="max-w-[400px] mx-auto py-6 my-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
        {[
          { label: 'MIS', type: 'text', stateSetter: setMIS },
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
      </form>
    </div>
  );
};

export default StudentSignup;
