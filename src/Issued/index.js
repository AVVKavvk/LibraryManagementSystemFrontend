import React, { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { getItem, IsAdmin } from "../utils/localStorage";
import Loader from "../helper/Loader";
import Intro from "./Intro";

const AssignBook = lazy(() => import("./AssignBook"));
const DeleteAssignBook = lazy(() => import("./DeleteAssignBook"));

const Issued = () => {
  const isAdmin = getItem(IsAdmin);

  if (!isAdmin) {
    return <div>You are not authorized to view this page.</div>;
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-[300px] bg-gray-900 text-white p-4 h-screen">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Book Sections
        </h2>
        <ul className="space-y-2 text-center">
          <li>
            <Link
              to="/issued/assign"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-500"
            >
              Assign book
            </Link>
          </li>
          <li>
            <Link
              to="/issued/delete"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-red-500"
            >
              Unassign book
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <Routes>
          <Route
            path="assign"
            element={
              <Suspense fallback={<Loader />}>
                <AssignBook />
              </Suspense>
            }
          />
          <Route
            path="delete"
            element={
              <Suspense fallback={<Loader />}>
                <DeleteAssignBook />
              </Suspense>
            }
          />

          <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </div>
  );
};

export default Issued;
