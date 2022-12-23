import axios from "axios";
import { toast } from "react-toastify";
import { store } from "../../store";
import { START_LOADER, STOP_LOADER } from "../../store/types/loader";

const ClientRequest = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api",
});

// Add a request interceptor
ClientRequest.interceptors.request.use(
  function (config) {
    store.dispatch({ type: START_LOADER });
    return config;
  },
  function (error) {
    store.dispatch({ type: STOP_LOADER });
    toast.error(error.message || "Something Went Wrong");
    return Promise.reject(error);
  }
);

// Add a response interceptor
ClientRequest.interceptors.response.use(
  function (response) {
    // Do something with response data
    store.dispatch({ type: STOP_LOADER });
    return response;
  },
  function (error) {
    store.dispatch({ type: STOP_LOADER });
    toast.error(error?.response?.data?.errors?.[0]?.error || error.message || "Something Went Wrong");
    return Promise.reject(error);
  }
);

export default ClientRequest;
