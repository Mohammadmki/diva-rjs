import api from "../configs/api"

const profile=async()=>{
     return await api.get("user/whoami").then((res)=>res || false)
}
export {profile}