import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://task-management-platform-server-theta.vercel.app/Tasks"
//   baseURL: "http://localhost:5000/Tasks"
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;