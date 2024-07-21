import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCtegory } from "../../features/Category/ctegorySlice"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { deletecategory } from "../../features/Category/delCategorySlice";


function Categorys() {
const g=4

const dispatch=useDispatch()

const category=useSelector((store)=>store.category)

useEffect(()=>{
 dispatch(getCtegory())

},[])


  return (
    <div>
      {category.categories.map((category)=>(
        <div key={category._id} className="flex flex-row justify-between w-full py-3 px-1 border-solid border-neutral-300 border-2 my-6 rounded-md">
          <p className="flex flex-row-reverse">{category.name} <img src={`${category.icon}.svg`} alt="" /> </p>
        <p>slug:{category.slug} <span onClick={()=>dispatch(deletecategory(category._id))}  className="transition-all duration-300 ease-in-out hover:text-divar mr-2 text-neutral-400 cursor-pointer"><DeleteOutlinedIcon /></span> </p>
        </div>
      ))}
    </div>
  )
}

export default Categorys