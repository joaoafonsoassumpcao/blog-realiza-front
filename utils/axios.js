import axios from "axios";
// config

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: "https://blog.faculdaderealiza.com.br:3030",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
