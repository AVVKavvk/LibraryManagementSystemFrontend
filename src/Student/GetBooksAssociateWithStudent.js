import React, { useState } from 'react';
import { axiosClient } from '../utils/axios';

function GetBooksAssociateWithStudent() {
  const [mis, setMIS] = useState("");
  const [data, setData] = useState(null);

  const getbooksWithMIS = async () => {
    if (mis === "") {
      return;
    }
    try {
      const res = await axiosClient.get(`/student/books/${mis}`);
      setData(res?.data); // Assuming data is an array of strings
    } catch (err) {
      console.error("Error fetching student data:", err);
    }
  };

  return (
    <div>
      <div className="bg-slate-700 rounded-md py-2 flex flex-col items-center justify-center shadow-lg mb-10"> 
        <div className="flex gap-5 justify-center items-center">
          <div className="flex w-[500px] mx-auto justify-center items-center gap-2"> 
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
          onClick={getbooksWithMIS}
        >
          Submit
        </button>
      </div>

      {data && (
        <div className="w-full flex flex-col items-center py-10">
          

        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Books Associated with MIS: {mis}</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            {data.length > 0 ? (
              data.map((book, index) => (
                <li key={index} className="text-gray-700">
                  {book}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No books found for this MIS.</li>
            )}
          </ul>
        </div>
        </div>
      )}
    </div>
  );
}

export default GetBooksAssociateWithStudent;
