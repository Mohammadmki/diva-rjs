import axios from "axios";
import { getcookie, setcookie } from "../utils/cookie";
import { newToken } from "../servises/getnewtoken";

const api=axios.create({baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "Content-Type":"application/json",
    }
})

api.interceptors.request.use(
    (request)=>{
        const accessToken=getcookie("accessToken")
        
        if(accessToken){
            request.headers["Authorization"]=`bearer ${accessToken}`
        }
        return request
},
(error)=>{
    return Promise.reject(error)
}
)
api.interceptors.response.use(
(res)=>{
    return res
},
async(error)=>{
  const originalreq=error.config
  
  if(error.message=="Request failed with status code 401"&& !originalreq._retry){
    originalreq._retry=true
    const res=await newToken()
    if(!res?.data) return
    console.log('first')
    setcookie(res.data);
    return api(originalreq)
  }
       
    }

)
export default api