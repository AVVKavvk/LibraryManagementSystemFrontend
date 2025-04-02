import React, { useState } from "react";
import { axiosClient } from "../utils/axios";
import { getItem, IsAdmin } from "../utils/localStorage";
import { Navigate } from "react-router-dom";

function CreateBook() {
  const isAdmin = getItem(IsAdmin);

  const [name, setName] = useState("");
  const [bookId, setBookId] = useState("");
  const [course, setCourse] = useState("");
  const [sem, setSem] = useState("");
  const [count, setCount] = useState(0);
  const [penalty, setPenalty] = useState(0.0);

  const IsValidInput = () => {
    if (!name.trim()) return false;
    if (!bookId.trim()) return false;
    if (!course.trim()) return false;
    if (!sem.trim()) return false;
    if (count <= 0 || !Number.isInteger(count)) return false;
    if (penalty < 0) return false;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!IsValidInput()) {
      return;
    }

    try {
      const res = await axiosClient.post("/admin/book", {
        name,
        bookId,
        course,
        sem,
        count,
        penalty,
      });
    } catch (err) {}
  };

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Add Book</h2>

        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

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
          <label className="block text-gray-700">Course</label>
          <input
            type="text"
            value={course}
            required
            onChange={(e) => setCourse(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-700">Semester</label>
          <input
            type="text"
            value={sem}
            required
            onChange={(e) => setSem(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-700">Count</label>
          <input
            type="number"
            value={count}
            required
            onChange={(e) => setCount(parseInt(e.target.value, 10))}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-700">Penalty</label>
          <input
            type="number"
            value={penalty}
            required
            onChange={(e) => setPenalty(parseFloat(e.target.value))}
            step="0.01"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default CreateBook;
