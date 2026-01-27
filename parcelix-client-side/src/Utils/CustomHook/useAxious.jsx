import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_LINK,
});

const useAxious = () => {
    return axiosInstance;
};

export default useAxious;