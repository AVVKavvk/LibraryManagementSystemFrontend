import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../utils/axios';
import stuImg from '../img/student.png'

function GetStudentWithMIS() {
  const { mis } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    getStudentWithMIS();
  }, []);

  const getStudentWithMIS = async () => {
    if (mis === "") {
      return;
    }
    try {
      const res = await axiosClient.get(`/admin/student/${mis}`);
      setStudent(res?.data);
    } catch (err) {
      console.error("Error fetching student data:", err);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-10">
      {student && (
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[600px] text-center">
          <img 
            src={stuImg} 
            alt="Student" 
            className=" w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-300"
          />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">{student?.name}</h1>
          <p className="text-gray-500 mb-1">{student?.mis}</p>
          <p className="text-gray-500 mb-4">{student?.email}</p>

          <div className="text-left space-y-2">
            <p><strong>Phone:</strong> {student?.phone}</p>
            <p><strong>Course:</strong> {student?.course}</p>
            <p><strong>Semester:</strong> {student?.sem}</p>
            <p><strong>Total Penalty:</strong> ₹ {student?.totalPenalty || 0}</p>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Books Borrowed</h2>
          <ul className="list-disc list-inside flex flex-col justify-center  items-center text-left space-y-2">
            {student?.books && student.books.map((book, index) => (
              <li key={index} className="text-gray-700">
                {book}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GetStudentWithMIS;
