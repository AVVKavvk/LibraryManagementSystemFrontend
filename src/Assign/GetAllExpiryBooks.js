import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axios";
import { Link } from "react-router-dom";
function GetAllExpiryBooks() {
  const [books, setBooks] = useState({});
  const [AllBook, setAllBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalResult, setTotalResult] = useState(0);
  const pageSizes = [5, 10, 15, 20];

  useEffect(() => {
    getAllBooks();
  }, []);

  useEffect(() => {
    divideIntoPage(AllBook, pageSize);
  }, [pageSize, AllBook]);

  const getAllBooks = async () => {
    try {
      const res = await axiosClient.get("/expiry-books");
      if (res?.data) {
        setAllBook(res?.data);
        divideIntoPage(res.data, pageSize);
        setTotalResult(res?.data?.length);
      }
    } catch (err) {
      setAllBook({});
    }
  };

  const divideIntoPage = (res, size) => {
    const totalBooks = res.length;
    const totalPages = Math.ceil(totalBooks / size);

    setTotalResult(totalBooks);
    setLastPage(totalPages);

    const paginatedBooks = {};
    for (let i = 0; i < totalPages; i++) {
      paginatedBooks[i + 1] = res.slice(i * size, i * size + size);
    }

    setBooks(paginatedBooks);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <div className="mb-40">
      <div className="flex flex-col justify-center items-center max-w-[1100px] text-white text-lg mx-auto gap-5">
        {books[currentPage] &&
          books[currentPage].map((book) => (
            <div key={book._id} className=" gap-16 bg-gray-800 ">
              <div className="grid grid-cols-2 gap-16 bg-gray-800 pl-10 w-[1000px] rounded-md p-4">
                <div className="flex flex-col justify-center">
                  <h1 className="text-lg font-bold mb-2  bg-violet-900 p-1 w-[150px] text-center rounded-md">
                    Book Details
                  </h1>
                  <div className="grid grid-cols-[100px_auto] gap-x-4 mb-2">
                    <span className="font-bold">BookID :</span>
                    <span>{book?.bookId}</span>
                  </div>
                  <div className="grid grid-cols-[100px_auto] gap-x-4 mb-2">
                    <span className="font-bold">Course :</span>
                    <span>{book?.course}</span>
                  </div>
                  <div className="grid grid-cols-[100px_auto] gap-x-4 mb-2">
                    <span className="font-bold">Sem :</span>
                    <span>{book?.sem}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h1 className="text-lg font-bold mb-2  bg-violet-900 p-1 w-[150px] text-center rounded-md">
                    Student Details
                  </h1>
                  <div className="grid grid-cols-[100px_auto] gap-x-4 mb-2">
                    <span className="font-bold">MIS :</span>
                    <Link
                      className=" hover:underline"
                      to={`/student/${book?.studentId}`}
                    >
                      {book?.studentId}
                    </Link>
                  </div>
                  <div className="grid grid-cols-[100px_auto] gap-x-4 mb-2">
                    <span className="font-bold">Name :</span>
                    <span>{book?.studentName}</span>
                  </div>
                </div>
              </div>
              <div className="h-[1px] bg-white rounded mx-3 my-2"></div>
              <div className="grid grid-cols-2 ml-10 justify-around items-center">
                <div className="grid grid-cols-[100px_auto]  gap-x-4 mb-2">
                  <span className="font-bold">Issued Date :</span>
                  <span className="text-lg font-bold mb-2  bg-green-500 p-1 w-[150px] text-center rounded-md">
                    {new Date(book?.issueDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="grid grid-cols-[100px_auto]  gap-x-4 mb-2">
                  <span className="font-bold">Return Date :</span>
                  <span className="text-lg font-bold mb-2  bg-red-500 p-1 w-[150px] text-center rounded-md">
                    {new Date(book?.returnDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}

        <div className="text-black flex w-[1000px] justify-between items-center">
          <div className="flex gap-6">
            <h1 className="justify-start">
              Page {currentPage} of {lastPage},
            </h1>
            <h1 className="">Total books: {totalResult}</h1>
          </div>

          <div className="flex gap-7">
            {currentPage > 1 && (
              <button
                className="bg-slate-700 text-xl text-white w-[70px] h-[40px] rounded hover:bg-slate-800"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Prev
              </button>
            )}

            {currentPage < lastPage && (
              <button
                className="bg-slate-700 text-xl text-white w-[70px] h-[40px] rounded hover:bg-slate-800"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === lastPage}
              >
                Next
              </button>
            )}

            <label htmlFor="pageSize" className="text-lg font-semibold">
              Size:
            </label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={handlePageSizeChange}
              className="border border-gray-300 rounded-md p-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              {pageSizes.map((size) => (
                <option
                  key={size}
                  value={size}
                  className="bg-gray-800 text-white"
                >
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetAllExpiryBooks;
