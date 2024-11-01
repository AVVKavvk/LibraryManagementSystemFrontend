import React, { useEffect, useState } from 'react';
import { axiosClient } from '../utils/axios';
import bookImg from '../img/book.svg';

function GetBookBySem() {
  const [books, setBooks] = useState({});
  const [AllBook, setAllBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalResult, setTotalResult] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [course, setCourse] = useState("")
  const [sem, setSem] = useState("")
  const [isData, setIsData] = useState(false)
  const pageSizes = [5, 10, 15, 20];

  useEffect(() => {
    divideIntoPage(AllBook, pageSize);
  }, [pageSize, AllBook]);

  useEffect(() => {
    searchByName(AllBook);
  }, [searchInput, AllBook]);

  const searchByName = (res) => {
    if (!searchInput) {
      divideIntoPage(res, pageSize);
    } else {
      const filteredBooks = res.filter(book =>
        book.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      divideIntoPage(filteredBooks, pageSize);
      setTotalResult(filteredBooks.length);
    }
  };

  const getAllBooksByCourse = async () => {
    if (course=="" || sem=="") {
      alert("All fields are required")
      return ;
    }

    try {
      const res = await axiosClient.get(`/book/${course}/${sem}`);
      if (res?.data) {
        setIsData(true)
        setAllBook(res?.data);
        divideIntoPage(res.data, pageSize);
        setTotalResult(res?.data?.length);
      }
    } catch (err) {
      setAllBook({})
      setIsData(false)
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
    <div>
     <div className="bg-slate-700   rounded-md py-2 flex flex-col items-center justify-center shadow-lg mb-10"> 
      <div className="flex gap-5 justify-center items-center">
      <div className="flex w-[500px] mx-auto justify-center items-center gap-2 "> 
        <h1 className="text-lg text-white font-semibold">Course:</h1> 
        <input 
          type="text" 
          required
          placeholder="Search by Course..." 
          onChange={(e) => setCourse(e.target.value)} 
          className="border border-gray-700 rounded-md p-2 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
        />
      </div>
      <div className="flex w-[500px] mx-auto justify-center items-center gap-2 "> 
        <h1 className="text-lg text-white font-semibold">Sem:</h1> 
        <input 
          type="text" 
          required
          placeholder="Search by Sem..." 
          onChange={(e) => setSem(e.target.value)} 
          className="border border-gray-700 rounded-md p-2 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
        />
      </div>
      </div>
      <button 
        className="w-[150px] flex justify-center items-center mx-auto bg-green-500 text-white font-bold py-2 rounded-md mt-4 hover:bg-green-600 transition duration-200" 
        onClick={getAllBooksByCourse}
      >
        Submit
      </button>
     </div>

    {
      isData && 
      <div className="mb-40">
        <div className="flex bg-slate-500 rounded-md h-[80px] w-[500px] mx-auto justify-center items-center gap-2 mb-10"> 
          <h1 className="text-lg font-semibold mb-4">Book Name:</h1> 
          <div className="flex justify-center h-10  items-center" >
          <input 
            type="text" 
            placeholder="Search by name..." 
            onChange={(e) => setSearchInput(e.target.value)} 
            className="border  border-gray-700  rounded-md p-2 mb-4"
          />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[1100px] text-white text-lg mx-auto gap-5">
          {books[currentPage] && books[currentPage].map((book) => (
            <div key={book._id} className="flex gap-36 items-center bg-gray-800 w-[1000px] rounded-md p-4">
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
          ))}

          <div className="text-black flex w-[1000px] justify-between items-center">
            <div className="flex gap-6">
              <h1 className="justify-start">Page {currentPage} of {lastPage},</h1>
              <h1 className="">Total books: {totalResult}</h1>
            </div>

            <div className="flex gap-7">
              {currentPage > 1 && (
                <button className="bg-slate-700 text-xl text-white w-[70px] h-[40px] rounded hover:bg-slate-800" onClick={() => handlePageChange(currentPage - 1)}>
                  Prev
                </button>
              )}

              {currentPage < lastPage && (
                <button className="bg-slate-700 text-xl text-white w-[70px] h-[40px] rounded hover:bg-slate-800" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === lastPage}>
                  Next
                </button>
              )}

              <label htmlFor="pageSize" className="text-lg font-semibold">Size:</label>
              <select 
                id="pageSize" 
                value={pageSize} 
                onChange={handlePageSizeChange} 
                className="border border-gray-300 rounded-md p-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                {pageSizes.map(size => (
                  <option key={size} value={size} className="bg-gray-800 text-white">
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  );
}

export default GetBookBySem