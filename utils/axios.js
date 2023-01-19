import axios from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: "http://blog.faculdaderealiza.com.br:3030",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
