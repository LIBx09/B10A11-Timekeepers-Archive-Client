import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://timekeeper-s-archive-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
