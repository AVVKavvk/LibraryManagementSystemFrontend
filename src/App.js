import toast, { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { axiosClient } from "./utils/axios";
import Loader from "./helper/Loader";
import { Route, Routes } from "react-router-dom";

const AdminSignup = lazy(()=> import('./Signup/AdminSignup'))
const AdminLogin = lazy(()=> import('./Login/AdminLogin'))
const StudentSignup = lazy(()=>import('./Signup/StudentSignup'))
const StudentLogin = lazy(()=>import('./Login/StudentLogin'))

export const TOAST_SUCCESS = "toast_success";
export const TOAST_ERROR = "toast_error";

function App() {
  const isLoading = useSelector((state) => state.appConfigReducer.isloading);
  const toastData = useSelector((state) => state.appConfigReducer.toastData);
  const loadingRef = useRef(null);
  const [data, setData] = useState({});

  const AA = async () => {
    try {
      const response = await axiosClient.get("admin/books");
      // console.log(response);
      
      // setData(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

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

  useEffect(() => {
    // AA();
  }, []);

  return (
    <div>
      <LoadingBar color="#f11946" ref={loadingRef} />
      <div>
        <Toaster />
      </div>

      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
