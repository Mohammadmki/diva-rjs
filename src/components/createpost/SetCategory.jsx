import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getPosts } from '../../servises/getposts'
import { getCategory } from '../../servises/Category'
import Loader from '../Loader/Loader'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch, useSelector } from 'react-redux'
import { FilterCategory, Filterpost } from '../../features/Filter/filterSlice'

function SetCategory({setStep,setPost}) {
    const [search,setSearch]=useState()
    const [category,setcategory]=useState([])
   
  
      const {data:categories,isLoading:Loading}=useQuery({queryKey:["category"],queryFn:getCategory})

   
    console.log(category)

   
    const Filter=useSelector((store)=>store.filter)
   
    const disptch=useDispatch()

      const {data,isLoading,error}=useQuery({queryKey:["getposts"],queryFn:getPosts})
    
    
     
       
     

      const searchHandler=(e)=>{

          setSearch(e.target.value.toLowerCase())

          disptch(Filterpost({data,search}))
         
               if(!Filter.post.length){
                setcategory([])
                return
              }
          for(let i=0;i<categories.data.length;i++){
            if(categories.data[i]._id==Filter.post[0].category){
              setcategory(()=>[categories.data[i]])
              }
            }
            console.log(category)  
            }

           

  return (
   
    <div className='w-[500px] container mx-auto my-5'>
        <h2 className='text-xl font-light' >ثبت اگهی</h2>
        <p className='text-sm text-neutral-400 mt-3'>انتخاب دسته بندی</p>
        <input value={search} onChange={searchHandler}  className='input rounded-none w-full h-9 mb-10 mt-6 placeholder:text-neutral-400 placeholder:font-extralight ' type="text" placeholder='جست و جو در دسته ها' />
         {Loading||isLoading ?<Loader/>:
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