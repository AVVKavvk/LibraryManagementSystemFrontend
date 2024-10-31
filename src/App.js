import toast, { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { axiosClient } from "./utils/axios";

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
    AA();
  }, []);

  return (
    <div>
      <LoadingBar color="#f11946" ref={loadingRef} />
      <div>
        <Toaster />
      </div>
      <div>
        {data && typeof data === "object" ? (
          JSON.stringify(data, null, 2) 
        ) : (
          <p>{data}</p>
        )}
      </div>

      <h1 className=" bg-green-400">
        vipin
      </h1>
    </div>
  );
}

export default App;
