import React, { useState } from 'react'
import { getItem, IsLogged } from '../utils/localStorage'
import Login from '../components/Login'
import { useDispatch } from 'react-redux'
import { showToast } from '../slice/appConfigSlice'
import { TOAST_ERROR } from '../App'
import { axiosClient } from '../utils/axios'
import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom'

function GetAllStudentWithBookId() {
  const [bookId, setBookId] = useState("")
  const [allMIS, setAllMIS] = useState([])
  const isLogged = getItem(IsLogged)
  const dispatch = useDispatch()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    if (bookId === ""){
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: "BookId can't be empty",
        })
      );
      return ;
    }

    try {
      const res = await axiosClient.get(`/book/student/${bookId}`)
      setAllMIS(res?.data)
    } catch (err) {
      
    }
    
  }


  if (!isLogged) return <Login/>

  return (
    <div>
      
      <div className="bg-slate-700   rounded-md py-2 flex flex-col items-center justify-center shadow-lg mb-10"> 
      <div className="flex gap-5 justify-center items-center">
      <div className="flex w-[500px] mx-auto justify-center items-center gap-2 "> 
        <h1 className="text-lg text-white font-semibold">Book Id:</h1> 
        <input 
          type="text" 
          required
          placeholder="Search by Id ..." 
          onChange={(e) => setBookId(e.target.value)} 
          className="border border-gray-700 rounded-md p-2 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
        />
      </div>
      </div>
      <button 
        className="w-[150px] flex justify-center items-center mx-auto bg-green-500 text-white font-bold py-2 rounded-md mt-4 hover:bg-green-600 transition duration-200" 
        onClick={handleSubmit}
      >
        Submit
      </button>
     </div>

      {
      allMIS.length>0 
       &&
      <div className="flex justify-center mx-auto w-[1220px]">
        <ul className="flex flex-wrap justify-center w-[1000px] items-center shadow-lg gap-5 py-10 px-3">
          {
            allMIS.length>0 && allMIS.map((mis)=>{
              return (
                <Link to={`/student/${mis}`} data-tooltip-id="student-profile" data-tooltip-content="Student profile" className=" bg-gray-800 text-white px-3 py-1  rounded text-xl" key={mis}>
                    {mis}
                    <Tooltip id="student-profile" style={{
                      backgroundColor: "#8282ec",
                      borderRadius:"2px",
                      color: "black"
                    }} />
                </Link>
                
                
              )
            })
          }
        </ul>
      </div>
      }
    </div>
  )
}

export default GetAllStudentWithBookId