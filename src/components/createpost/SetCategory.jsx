import { useQuery } from '@tanstack/react-query'
import React, {  useState } from 'react'
import { getCategory } from '../../servises/Category'
import Loader from '../Loader/Loader'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch, useSelector } from 'react-redux'
import {  FilterbySearch } from '../../features/Filter/filterSlice'

function SetCategory({setStep,setPost}) {
   
    const [category,setcategory]=useState([])
    const[search,setsearch]=useState()
    
      const {data:categories,isLoading:Loading}=useQuery({queryKey:["category"],queryFn:getCategory})

   


   
    const post=useSelector((store)=>store.posts)

    const disptch=useDispatch()


      const searchHandler=(e)=>{
        setsearch(e.target.value.toLowerCase())
        if(!search) return
   const searchedpost=post.allpost.filter((i)=>i.options.title.includes(search))
      if(searchedpost.length){
        console.log(searchedpost)
        for(let i=0;i<categories.data.length;i++){
          if(categories.data[i]._id==searchedpost[0].category){
        setcategory(categories.data[i])
          }
      }

       }
            
            }

           

  return (
   
    <div className='w-[500px] container mx-auto my-5'>
        <h2 className='text-xl font-light' >ثبت اگهی</h2>
        <p className='text-sm text-neutral-400 mt-3'>انتخاب دسته بندی</p>
        <input  onChange={searchHandler}  className='input rounded-none w-full h-9 mb-10 mt-6 placeholder:text-neutral-400 placeholder:font-extralight ' type="text" placeholder='جست و جو در دسته ها' />
         {Loading ?<Loader/>:
        <>
          {!!category.length ?
          <ul>
             <li onClick={()=>{setStep(2), setPost({category:category[0]._id})}} className='cursor-pointer flex flex-row justify-between items-baseline border-b-2 border-solid border-neutral-200 mb-4 pt-2 pb-4 px-2 ' >
              <p className='flex flex-row-reverse'>{category[0].name}<img src={`${category[0].icon}.svg`} alt="" /></p> 
             <ArrowBackIosNewIcon style={{fontSize:"20px"}} className=' text-neutral-500' />
             </li>
          </ul> :  <ul>
           {categories?.data.map((category)=>(
             <li onClick={()=>{setStep(2), setPost({category:category._id})}} key={category._id} className='cursor-pointer flex flex-row justify-between items-baseline border-b-2 border-solid border-neutral-200 mb-4 pt-2 pb-4 px-2 ' >
              <p className='flex flex-row-reverse'>{category.name}<img src={`${category.icon}.svg`} alt="" /></p> 
             <ArrowBackIosNewIcon style={{fontSize:"20px"}} className=' text-neutral-500' />
             </li>

           ))}
           </ul> }
        
           
        </> 
}
       
          
   
  
    </div>
  )
}

export default SetCategory