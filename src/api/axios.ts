import axios, {AxiosInstance} from "axios";

// global url
// const BASE_URL = "http://172.16.15.25:28";

// local url  
const BASE_URL = "https://visually-informed-manatee.ngrok-free.app"

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": "any"
  }
});

export default axiosInstance;
