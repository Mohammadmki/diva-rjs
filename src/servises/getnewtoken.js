import api from "../configs/api"
import { getcookie } from "../utils/cookie"

const newToken=async()=>{
const refreshToken=getcookie("refreshToken")
if(!refreshToken)return
 
 try {
    const response=await api.post("auth/check-refresh-token",{refreshToken})
    return response
 } catch (error) {
    return error
 }

}
export {newToken}