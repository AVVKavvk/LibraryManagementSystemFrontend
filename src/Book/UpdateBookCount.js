import React, { useState } from "react";
import { axiosClient } from "../utils/axios";
import { getItem, IsAdmin } from "../utils/localStorage";
import { Navigate } from "react-router-dom";

function UpdateBookCount() {
  const isAdmin = getItem(IsAdmin);

  const [bookId, setBookId] = useState("");
  const [count, setCount] = useState(0);

  const updateCount = async (e) => {
    e.preventDefault();

    if (bookId === "") {
      alert("BookID required");
      return;
    }

    if (count <= 0) {
      alert("Book quantity should be 1 or more");
      return;
    }

    try {
      const intCount = parseInt(count, 0);
      const res = await axiosClient.put(`/admin/book/${bookId}`, {
        count: intCount,
      });
      console.log(res);
    } catch (err) {
      alert("An error occurred while updating the book count");
    }
  };

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <form
        onSubmit={updateCount}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">
          Update Book Count
        </h2>

        <div>
          <label className="block text-gray-700">Book ID</label>
          <input
            type="text"
            value={bookId}
            required
            onChange={(e) => setBookId(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            value={count}
            required
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateBookCount;
