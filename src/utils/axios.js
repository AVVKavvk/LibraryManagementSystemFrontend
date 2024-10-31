import axios from "axios";
import store from "../slice/store";
import { setLoading, showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import {getItem,UserEmail} from './localStorage'
export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (request) => {
    store.dispatch(setLoading(true));
    const admin_email = getItem(UserEmail)
    request.headers['X-Admin-Email'] = `${admin_email}`;
    return request;
  },
  (error) => {
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    const data = response.data;
    store.dispatch(setLoading(false));

    if (data.statusCode === 200) {
      store.dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: `${data.msg}`,
        })
      );
      return data;
    }

    return Promise.reject(new Error("Unexpected status code"));
  },
  (error) => {
    store.dispatch(setLoading(false));

    let errorMessage = "An error occurred";
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;

      if (status === 400) {
        errorMessage = data.msg || "Bad Request - You are not authorized";
      } else if (status === 401) {
        errorMessage = data.msg || "Unauthorized - Please log in";
      } else {
        errorMessage = data.msg || error.message;
      }

      store.dispatch(
        showToast({
          type: TOAST_ERROR,
          message: errorMessage,
        })
      );
    } else {
      errorMessage = error.message;
      store.dispatch(
        showToast({
          type: TOAST_ERROR,
          message: errorMessage,
        })
      );
    }

    return Promise.reject(errorMessage);
  }
);
