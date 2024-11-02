import React, { useState } from 'react'
import { axiosClient } from '../utils/axios';

function GetPenaltyWithStudent() {
  const [mis, setMIS] = useState(null);
  const [data,setData ]= useState(null)

  const getStudentPenaltyDues = async () => {
    if (mis === "") {
      return;
    }
    try {
      const res = await axiosClient.get(`/student/dues-penality/${mis}`);
      setData(res?.data)      
    } catch (err) {
      console.error("Error fetching student data:", err);
    }
  };

  return (
    <div>
      <div className="bg-slate-700   rounded-md py-2 flex flex-col items-center justify-center shadow-lg mb-10"> 
      <div className="flex gap-5 justify-center items-center">
      <div className="flex w-[500px] mx-auto justify-center items-center gap-2 "> 
        <h1 className="text-lg text-white font-semibold">MIS :</h1> 
        <input 
          type="text" 
          required
          placeholder="Search by MIS ..." 
          onChange={(e) => setMIS(e.target.value)} 
          className="border border-gray-700 rounded-md p-2 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
        />
      </div>
      </div>
      <button 
        className="w-[150px] flex justify-center items-center mx-auto bg-green-500 text-white font-bold py-2 rounded-md mt-4 hover:bg-green-600 transition duration-200" 
        onClick={getStudentPenaltyDues}
      >
        Submit
      </button>
     </div>
     {
    data && (
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto my-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Dues: <span className="text-blue-600">{data?.dues}</span>
        </h1>
        <h1 className="text-2xl font-bold text-gray-800">
          Penalty: <span className="text-red-600">{data?.penalty}</span>
        </h1>
      </div>
    )
    }
    </div>
  )
}

export default GetPenaltyWithStudent