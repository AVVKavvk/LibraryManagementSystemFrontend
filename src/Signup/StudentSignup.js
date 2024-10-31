import { useState } from "react";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import { useDispatch } from "react-redux";
import { axiosClient } from "../utils/axios";
import { Link, useNavigate } from "react-router-dom";

const StudentSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [sem, setSem] = useState("");
  const [mis, setMIS] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  const dispatch= useDispatch('')
  const navigate = useNavigate('')

  const validatePhoneNumber = (phone) => {

    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validateMIS = (mis) => {

    const misRegex = /^[0-9]{9}$/;
    return misRegex.test(mis);
  };

  const SubmitForm = async (e) => {
    e.preventDefault();

     if (!validatePhoneNumber(phone)){
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: "Phone Number not vaild",
        })
      );
      return 
     }

     if (!validateMIS(mis)){
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: "MIS not vaild",
        })
      );
      return 
     }

     if (password !== confirm){
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: "Password must same",
        })
      );
      return 
     }

     try {
        const res = await axiosClient.post('/student',{
          name,
          email,
          phone,
          password,
          sem,
          course,
          mis
        })
        console.log(res);
        
        if (res){            
          navigate("/student/login")
        }

     } catch (err) {
      
     }

  };

  return (
    <div>
      <form onSubmit={SubmitForm} className="max-w-[500px] mx-auto py-6 my-8 px-5 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
        {[
          { label: 'Name', type: 'text', stateSetter: setName },
          { label: 'MIS', type: 'text', stateSetter: setMIS },
          { label: 'Course', type: 'text', stateSetter: setCourse },
          { label: 'Sem', type: 'text', stateSetter: setSem },
          { label: 'Phone', type: 'tel', stateSetter: setPhone },
          { label: 'Email', type: 'email', stateSetter: setEmail },
          { label: 'Password', type: 'password', stateSetter: setPassword },
          { label: 'Confirm Password', type: 'password', stateSetter: setConfirmPassword },
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
          <h2>Already have an account </h2>
        <Link to="/student/login"
          className="w-[60px] flex justify-center items-center py-2 bg-green-400 text-white font-bold  rounded-md hover:bg-green-500 transition duration-200"
        >
          Login
        </Link>
        </div>
      </form>
    </div>
  );
};

export default StudentSignup;
