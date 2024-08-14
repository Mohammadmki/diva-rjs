import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { deletemarks, savedpost } from '../features/post/savedSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { profile } from '../servises/user';
import Authpage from './Authpage';
import {  useNavigate } from 'react-router-dom';


function Detalespage() {
   
    const[showAuth,setShowAuth]=useState(false)
  const connections=useRef(null)
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

    connections.current.ariaDisabled=true
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
    <div  className='grid grid-cols-2  gap-x-8  px-5'>
      {showAuth&&<Authpage setShowAuth={setShowAuth}/>}
      <div >
        <Toaster/>
        <h1 className='md:text-2xl lg:text-3xl xl:text-4xl '>{post?.post.options.title}</h1>
        <p className='font-extralight text-base lg:text-lg border-neutral-300 border-solid border-b-2 pb-5 text-neutral-500 mt-3 w-full '>درتاریخ{new Date(post?.post.createdAt).toLocaleDateString("fa-IR")}در {post.post.options.city} </p>
        <p className='w-full   flex flex-row justify-between py-4 border-solid border-b-2 border-neutral-300'> <span className='flex flex-row-reverse gap-x-2 font-extralight lg:text-lg xl:text-xl text-base'>زنگ های خطر قبل از معامله<ReportProblemIcon style={{fontSize:"1.5rem",color:"silver"}}/></span> <i ><ArrowBackIosNewIcon style={{fontSize:"1rem",color:"silver"}}/></i></p>
        <div className='mt-4  flex justify-between items-center '>
          <div>
        <button disabled:false onClick={showHandler}  className='transition-all duration-300 ease-in-out btn px-4 disabled:bg-neutral-200 disabled:cursor-not-allowed disabled:text-neutral-400'>اطلاعات تماس</button>
        <button  className='btn bg-white text-neutral-500 border-2 px-12  py-2 rounded-md border-neutral-300 mr-4'>چت</button>
    
        </div>
        <div className='flex flex-row gap-2 '>
        <i className='transition-all duration-300 ease-in-out  hover:bg-neutral-200  p-1 rounded-full '> <ShareOutlinedIcon  style={{fontSize:"1.3rem",color:"rgb(115,115,115)"}}/></i> 
    <i className='transition-all text-neutral-500  duration-300 ease-in-out   hover:bg-neutral-200  p-1 rounded-full' onClick={savedHandler}><BookmarkBorderOutlinedIcon/></i>
    
        </div>
        </div>
        <div aria-disabled:false ref={connections} className='transition-all  duration-300 ease-in-out py-2 h-0 aria-disabled:h-28   overflow-hidden' >
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
          <h4 className='text-neutral-600 text-base lg:text-lg xl:text-xl'>هشدار پلیس</h4>
          <p className='text-neutral-400 font-extralight mt-2 text-sm lg:text-base'>لطفاً پیش از انجام معامله و هر نوع پرداخت وجه، از صحت کالا یا خدمات ارائه‌شده، به‌صورت حضوری اطمینان حاصل نمایید.</p>

        </div>
        <div>
          <h4 className='text-base lg:text-xl xl:text-2xl'>توضیحات</h4>
          <p className='text-base lg:text-lg xl:text-xl'>{post.post.options.content}</p>
        </div>
      </div>
      <div>
    <img className='w-full h-[450px] ' src={`${import.meta.env.VITE_BASE_URL}${post?.post.images}`} alt="" />
     <input className='input mt-3 w-full min-h-32 bg-transparent  ' type="text" placeholder='یادداشت شما...' />
    <span className='text-sm text-neutral-400'>یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.</span>
     </div>
    </div>
  )
}

export default Detalespage