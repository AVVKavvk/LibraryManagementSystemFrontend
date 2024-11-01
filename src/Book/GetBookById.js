import React, { useEffect, useState } from 'react'
import { axiosClient } from '../utils/axios';
import bookImg from '../img/book.svg';

function GetBookById() {
  const [book, setBook] = useState({});
  const [bookId, setBookId] = useState("")
  const [isData, setIsData] = useState(false)

  const getBook = async () => {
    if (bookId == ""){
      return ;
    }
    try {
      const res = await axiosClient.get(`/book/${bookId}`);
      if (res?.data) {
        setBook(res?.data)
        setIsData(true)
      }
    } catch (err) {
      setIsData(false)
    }
  };
  return (
    <div className="flex flex-col mx-auto   justify-center items-center">

    <div className="bg-slate-700 w-[1300px]  rounded-md py-2 flex flex-col items-center justify-center shadow-lg mb-10"> 
      <div className="flex w-[500px] mx-auto justify-center items-center gap-2 "> 
        <h1 className="text-lg text-white font-semibold">Book ID:</h1> 
        <input 
          type="text" 
          required
          placeholder="Search by ID..." 
          onChange={(e) => setBookId(e.target.value)} 
          className="border border-gray-700 rounded-md p-2 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
        />
      </div>
      <button 
        className="w-[150px] flex justify-center items-center mx-auto bg-green-500 text-white font-bold py-2 rounded-md mt-4 hover:bg-green-600 transition duration-200" 
        onClick={getBook}
      >
        Submit
      </button>
    </div>

     {
     isData 
     &&
     <div key={book?._id} className="flex text-white gap-36 items-center bg-gray-800 w-[1000px] rounded-md p-4">
            <div className="ml-14 flex flex-col gap-6">
              <img src={bookImg} alt="" width="200px" />
              <div className="flex items-center mb-2">
                <span className="w-[170px] font-bold">Remaining books:</span>
                <span>{book?.count}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start w-[650px]">
              <div className="flex items-center mb-2">
                <span className="w-[100px] font-bold">Name:</span>
                <span className="ml-4">{book?.name}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-[100px] font-bold">BookID:</span>
                <span className="ml-4">{book?.bookId}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-[100px] font-bold">Course:</span>
                <span className="ml-4">{book?.course}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-[100px] font-bold">Sem:</span>
                <span className="ml-4">{book?.sem}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-[100px] font-bold">Penalty:</span>
                <span className="ml-4">{book?.penalty}</span>
              </div>
            </div>
     </div>
     }
    </div>
  )
}

export default GetBookById