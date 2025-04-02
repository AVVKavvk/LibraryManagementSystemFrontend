import React, { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Loader from "../helper/Loader";

import Intro from "./Intro";
const GetAllExpiryBooks = lazy(() => import("./GetAllExpiryBooks"));
const GetAssignBookByBookId = lazy(() => import("./GetAssignBookByBookId"));
const GetAssignBookWithDays = lazy(() => import("./GetAssignBookWithDays"));
const GetAssignBookWithMIS = lazy(() => import("./GetAssignBookWithMIS"));
const GetAllAssignBooks = lazy(() => import("./GetAllAssignBooks"));

function Assign() {
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
              to="/assign/all"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-500"
            >
              All Assign Books
            </Link>
          </li>
          <li>
            <Link
              to="/assign/expiry"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-500"
            >
              All Expiry Books
            </Link>
          </li>
          <li>
            <Link
              to="/assign/mis"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-500"
            >
              Find Book By MIS
            </Link>
          </li>
          <li>
            <Link
              to="/assign/bookId"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-500"
            >
              Find Book By BookId
            </Link>
          </li>
          <li>
            <Link
              to="/assign/days"
              className="w-full p-2 block rounded-lg bg-gray-700 hover:bg-green-500"
            >
              Find Book By days
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <Routes>
          <Route
            path="expiry"
            element={
              <Suspense fallback={<Loader />}>
                <GetAllExpiryBooks />
              </Suspense>
            }
          />
          <Route
            path="bookId"
            element={
              <Suspense fallback={<Loader />}>
                <GetAssignBookByBookId />
              </Suspense>
            }
          />
          <Route
            path="days"
            element={
              <Suspense fallback={<Loader />}>
                <GetAssignBookWithDays />
              </Suspense>
            }
          />
          <Route
            path="mis"
            element={
              <Suspense fallback={<Loader />}>
                <GetAssignBookWithMIS />
              </Suspense>
            }
          />
          <Route
            path="all"
            element={
              <Suspense fallback={<Loader />}>
                <GetAllAssignBooks />
              </Suspense>
            }
          />

          <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </div>
  );
}

export default Assign;
