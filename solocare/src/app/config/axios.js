import axios from "axios";
export const instance = axios.create({
   baseURL: `https://api.semaphore.co/api/v4`,
   
    withCredentials:false
});