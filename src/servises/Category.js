import api from "../configs/api"

const getCategory=()=>{
   return api.get("category")
}

const addCategory=(form)=>{
   return api.post("category",form)
}
const delCategory=(id)=>{
   return api.delete(`category/${id}`)
}

export {getCategory,addCategory,delCategory}