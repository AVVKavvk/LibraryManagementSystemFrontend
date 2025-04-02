import React, { useState } from "react";
import { axiosClient } from "../utils/axios";

function DeleteAssignBook() {
  const [mis, setMis] = useState("");
  const [bookId, setBookId] = useState("");

  const IsValidInput = () => {
    if (!mis.trim()) return false;
    if (!bookId.trim()) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(mis, bookId, day);

    if (!IsValidInput()) {
      return;
    }

    try {
      await axiosClient.delete(`/admin/delete?mis=${mis}&bookId=${bookId}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Add Book</h2>

        <div>
          <label className="block text-gray-700">MIS</label>
          <input
            type="text"
            value={mis}
            required
            onChange={(e) => setMis(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-700">Book Id</label>
          <input
            type="text"
            value={bookId}
            required
            onChange={(e) => setBookId(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Unassign
        </button>
      </form>
    </>
  );
}
export default DeleteAssignBook;
