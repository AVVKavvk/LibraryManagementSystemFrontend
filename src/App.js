import toast, { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Loader from "./helper/Loader";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import PageNotFount from "./helper/PageNotFount";

const AdminSignup = lazy(() => import("./Signup/AdminSignup"));
const AdminLogin = lazy(() => import("./Login/AdminLogin"));
const StudentSignup = lazy(() => import("./Signup/StudentSignup"));
const StudentLogin = lazy(() => import("./Login/StudentLogin"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const Book = lazy(() => import("./Book/Book"));
const Admin = lazy(() => import("./Admin/Admin"));
const Student = lazy(() => import("./Student/Student"));
const Home = lazy(() => import("./components/Home"));
const Issued = lazy(() => import("./Issued"));
const Assign = lazy(() => import("./Assign"));

export const TOAST_SUCCESS = "toast_success";
export const TOAST_ERROR = "toast_error";

function App() {
  const isLoading = useSelector((state) => state.appConfigReducer.isloading);
  const toastData = useSelector((state) => state.appConfigReducer.toastData);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
  }, [isLoading]);

  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;
      case TOAST_ERROR:
        toast.error(toastData.message);
        break;
      default:
        break;
    }
  }, [toastData]);
  return (
    <div className="bg-slate-100 min-h-[100vh]">
      <LoadingBar color="#f11946" ref={loadingRef} />
      <Toaster />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/books/*"
          element={
            <Suspense fallback={<Loader />}>
              <Book />
            </Suspense>
          }
        />
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={<Loader />}>
              <Admin />
            </Suspense>
          }
        />
        <Route
          path="/student/*"
          element={
            <Suspense fallback={<Loader />}>
              <Student />
            </Suspense>
          }
        />
        <Route
          path="/issued/*"
          element={
            <Suspense fallback={<Loader />}>
              <Issued />
            </Suspense>
          }
        />
        <Route
          path="/assign/*"
          element={
            <Suspense fallback={<Loader />}>
              <Assign />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/admin/signup"
          element={
            <Suspense fallback={<Loader />}>
              <AdminSignup />
            </Suspense>
          }
        />
        <Route
          path="/student/signup"
          element={
            <Suspense fallback={<Loader />}>
              <StudentSignup />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/admin/login"
          element={
            <Suspense fallback={<Loader />}>
              <AdminLogin />
            </Suspense>
          }
        />
        <Route
          path="/student/login"
          element={
            <Suspense fallback={<Loader />}>
              <StudentLogin />
            </Suspense>
          }
        />
        <Route path="*" element={<PageNotFount />} />
      </Routes>
    </div>
  );
}

export default App;
