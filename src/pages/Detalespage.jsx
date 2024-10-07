import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdReportProblem } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { deletemarks, savedpost } from '../features/post/savedSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { profile } from '../servises/user';
import Authpage from './Authpage';
import {  useNavigate } from 'react-router-dom';


function Detalespage() {
   
    const[showAuth,setShowAuth]=useState(false)
    const [showConnections,setShowConnections]=useState(false)

  const post=useSelector((store)=>store.detale)
   const savepost=useSelector((store)=>store.saved)
   
   const savedposts=useSelector((store)=>store.saved)
   const{data,isLoading,error}=useQuery({queryKey:["getprofile"],queryFn:profile})

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const showHandler=(e)=>{
    if(!data){
      setShowAuth(true)
      return  
    }

    setShowConnections(true)
    e.target.disabled=true
  }



 


  const savedHandler=()=>{
    if(!data){
      setShowAuth(true)
      return 
    }
    if(!savepost.posts.length){
      dispatch(savedpost(post.post))
       
    }
   for(let i=0;i<savepost.posts.length;i++){

    if(savepost.posts[i]._id==post.post._id){
         
      dispatch(deletemarks(post.post._id))
           toast.success("اگهی از نشان ها برداشته شد")
           
    }else{
      
      dispatch(savedpost(post.post))
     
    }

   }
  
  }

  return (
    <div onClick={()=>{showConnections&&setShowConnections(false)}} aria-disabled={showConnections} className='md:aria-disabled:backdrop-brightness-200 aria-disabled:backdrop-brightness-75  '>
    <div aria-disabled={showConnections}  className='md:grid md:pt-4 pt-2 relative flex  flex-col-reverse md:grid-cols-2 md:aria-disabled:pointer-events-auto aria-disabled:pointer-events-none  md:gap-x-8 px-1 md:px-5'>
      {showAuth&&<Authpage setShowAuth={setShowAuth}/>}
      <div className='flex flex-col' >
        <Toaster/>
        <h1 className='md:text-2xl text-lg mt-2 md:mt-0 lg:text-3xl xl:text-4xl '>{post.post.options.title}</h1>
        <p className='font-extralight text-xs md:text-base lg:text-lg border-neutral-300 border-solid border-b-2 pb-5 text-neutral-500 mt-3 w-full '>درتاریخ{new Date(post?.post.createdAt).toLocaleDateString("fa-IR")}در {post.post.options.city} </p>
        <p className='cursor-pointer w-full flex flex-row justify-between py-2 md:py-4 border-solid border-b-2 border-neutral-300'> <span className='flex flex-row-reverse gap-x-2 font-extralight lg:text-lg xl:text-xl text-xs'>زنگ های خطر قبل از معامله<MdReportProblem className='text-lg text-neutral-500' /></span> <i ><IoIosArrowBack className='text-neutral-400' /></i></p>
        <div className='mt-4  flex justify-between items-center '>
          <div className='md:static fixed bottom-0 gap-x-3 grid grid-cols-2 py-5 md:py-3 px-2 w-full md:bg-transparent bg-neutral-100 '>
        <button disabled={showConnections} onClick={showHandler}  className='transition-all col-span-1 duration-300  ease-in-out btn md:flex md:justify-center  py-2 text-xs  md:px-4 md:disabled:bg-neutral-200 text-nowrap w-full h-full md:disabled:cursor-not-allowed md:disabled:text-neutral-400'>اطلاعات تماس</button>
        <button  className='btn  py-2 text-xs   bg-white text-neutral-500 border-2 w-full h-full md:px-12 md:flex md:justify-center  rounded-sm md:rounded-md border-neutral-300 md:mr-4'>چت</button>
        </div>
        <div className='flex md:px-0 px-2 flex-row  justify-end fixed md:mt-0  md:static w-full bg-transparent  h-fit mt-11  top-0  gap-2 '>
        <i className='transition-all cursor-pointer  w-fit duration-300 ease-in-out text-neutral-500 hover:bg-neutral-200  p-1 rounded-full '> <FiShare2 className='md:navbaricons'/></i> 
    <i className='transition-all text-neutral-500 cursor-pointer duration-300 ease-in-out   hover:bg-neutral-200  p-1 rounded-full' onClick={savedHandler}><FaRegBookmark  className='md:navbaricons' /></i>
    
        </div>
        </div>
       
        <div aria-disabled={showConnections}  className='transition-all  duration-300 ease-in-out  px-3 md:px-0 py-2 h-0  fixed bg-white  w-full  aria-disabled:h-44 bottom-0 md:static md:aria-disabled:h-28   overflow-hidden' >
          <div className='flex flex-row justify-between mt-4'>
            <p className='text-neutral-400 text-base lg:text-lg xl:text-xl'>شماره موبایل</p>
            <span onClick={()=>navigator.clipboard.writeText('09011548798')} className='text-divar  hover:opacity-90 text-base lg:text-lg xl:text-xl cursor-pointer'> 09011548798 <i className='transition-all duration-300 ease-in-out rounded-full mr-3 w-fit hover:bg-neutral-100 p-2 hover:opacity-100' > <ContentCopyOutlinedIcon className=' text-neutral-500'/> </i></span>
          </div>
          <div className='flex flex-row justify-between mt-4'>
            <p className='text-neutral-400 text-base lg:text-lg xl:text-xl'>چت</p>
            <span className='text-divar hover:opacity-90 text-base lg:text-lg xl:text-xl cursor-pointer'>پیام در چت</span>
          </div>
        </div>
        <div className='bg-blue-100 py-4'>
          <h4 className='text-neutral-600 text-sm lg:text-lg xl:text-xl'>هشدار پلیس</h4>
          <p className='text-neutral-400 font-extralight mt-2 text-xs lg:text-base'>لطفاً پیش از انجام معامله و هر نوع پرداخت وجه، از صحت کالا یا خدمات ارائه‌شده، به‌صورت حضوری اطمینان حاصل نمایید.</p>

        </div>
        <div className='mb-24'>
          <h4 className='text-base lg:text-xl xl:text-2xl'>توضیحات</h4>
          <p className='text-sm lg:text-lg xl:text-xl'>{post.post.options.content}</p>
        </div>
      </div>
      <div className='w-full  md:col-span-1 h-56  md:h-[450px] '>
    <img className='w-full h-full' src={`${import.meta.env.VITE_BASE_URL}${post?.post.images}`} alt="" />
     <input className='md:block hidden input mt-3 w-full min-h-32 bg-transparent  ' type="text" placeholder='یادداشت شما...' />
    <span className='text-sm md:block hidden text-neutral-400'>یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.</span>
     </div>
    </div>
    </div>
  )
}

export default Detalespage