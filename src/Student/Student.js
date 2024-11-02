import React, { lazy } from "react"
import { Link, Route, Routes } from "react-router-dom"

const GetAllStudentWithBookId = lazy(()=>import('./GetAllStudentWithBookId'))
const GetStudentWIthMIS = lazy(()=>import('./GetStudentWIthMIS'))
const FindStudent = lazy(()=>import('./FindStudent'))
const GetPenaltyDuesWithStudent = lazy(()=>import('./GetPenaltyDuesWithStudent'))
const GetBooksAssociateWithStudent = lazy(()=>import('./GetBooksAssociateWithStudent'))
const IntroPage = lazy(()=>import('./StudentIntroPage'))


const Student = ()=>{
  return (
    <div className="flex min-h-screen">

    <div className="w-[300px] bg-gray-900 text-white p-4 h-screen">
    <h2 className="text-xl font-semibold mb-4 text-center">Student Sections</h2>
    <ul className="space-y-2 text-center">
      <li>
        <Link 
        to={`/student/all`} className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-600">
          All students with Book
        </Link>
        </li>
        <li>
        <Link 
        to="/student/find" className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-600">
          Find Student
        </Link>
        </li>
        <li>
        <Link 
        to="/student/penalty-due" className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-600">
          Student Penalty and Dues
        </Link>
        </li>
        <li>
        <Link 
        to="/student/books" className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-600">
          Books Associate with Student
        </Link>
        </li>

    </ul>

    </div>
    <div className="flex-1 bg-gray-100 p-6">
      <Routes>

        <Route
         path="all"
         element={<GetAllStudentWithBookId/>}
        />
        <Route
         path="find"
         element={<FindStudent/>}
        />
        <Route
         path=":mis"
         element={<GetStudentWIthMIS/>}
        />
        <Route
         path="penalty-due"
         element={<GetPenaltyDuesWithStudent/>}
        />
        <Route
         path="books"
         element={<GetBooksAssociateWithStudent/>}
        />
        <Route
         path="*"
         element={<IntroPage/>}
        />
      </Routes>
    </div>
  </div>

  )
}

export default Student