import React, { lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Intro from './Intro';

const CreateBook = lazy(() => import('./CreateBook'));
const GetAllBooks = lazy(()=>import('./GetAllBooks'))
const GetBookById = lazy(()=>import('./GetBookById.js'))


const Book = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-[300px] bg-gray-900 text-white p-4 h-screen">
        <h2 className="text-xl font-semibold mb-4 text-center">Book Sections</h2>
        <ul className="space-y-2 text-center">
          <li>
            <Link
              to="/books/intro"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              to="/books/add-book"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              Add Book
            </Link>
          </li>
          <li>
            <Link
              to="/books/allbooks"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              to="/books/book"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              Book By ID
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <Routes>
          <Route path="intro" element={<Intro />} />
          <Route path="add-book" element={<CreateBook />} />
          <Route path="allbooks" element={<GetAllBooks />} />
          <Route path="book" element={<GetBookById />} />
          <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </div>
  );
};

export default Book;