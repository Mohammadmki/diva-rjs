import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import SupportIcon from '@mui/icons-material/Support';
import PublicIcon from '@mui/icons-material/Public';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../servises/Category';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../servises/getposts';
import {  Filterpost } from '../../features/Filter/filterSlice';
import { profile } from '../../servises/user';
import { e2p } from '../../utils/number';


function Header({showcategory,setShowcategory,showPages,setshowPages,setShowAuth}) {

const[search,setSearch]=useState('')



 const navigate=useNavigate()

 const {data:category,isLoading}=useQuery({queryKey:["category"],queryFn:getCategory})
 const {data,isLoading:Loading,}=useQuery({queryKey:["getposts"],queryFn:getPosts})
 const{data:user,isLoading:load,refetch}=useQuery({queryKey:["getprofile"],queryFn:profile})

 
const dispatch=useDispatch()



 const changeHandler=(e)=>{
 setSearch(e.target.value)
 dispatch(Filterpost({search,data,category}))
 }

 const DeleteHandler=()=>{
  document.cookie='refreshToken=;expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie='accessToken=; expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;'
  refetch()
  navigate("/")
 }
 
 const pageHandler=(e)=>{
  if(!user){
    setShowAuth(true)
    return
  }
 navigate(e.target.ariaValueText)
console.log(e.target.ariaValueText) 

 }

  return (
   
    <header  className='fixed z-50 h-fit top-0 m-0 pl-3 w-full bg-white  flex flex-row flex-wrap border-b-2 py-2 justify-between items-center border-neutral-300 border-solid '>
    
      <ul className='flex w-full justify-around'>
        <li>
        <Link to={"/"}>
        <img src="../../../public/divar.svg" className='xl:w-16 lg:w-16 w-12 cursor-pointer border-neutral-300 border-l-2 border-solid pl-3' alt="" />
        </Link>
        </li>
          
       <li className="navbar-text relative">
       تهران 
         <LocationOnOutlinedIcon  />
       </li>
   
       <li onClick={()=>showcategory?setShowcategory(false):setShowcategory(true)}  className="group relative ">
        <p aria-disabled={showcategory} className='group peer navbar-text'>
        <i className='transition-all mr-3 duration-300 ease-in-out -rotate-90 group-aria-disabled:rotate-90'> <ArrowBackIosNewIcon  style={{fontSize:"1rem "}}/></i>
         دسته ها
    
         </p>
          <ul aria-disabled={showcategory} className='menu' >
                {isLoading? <Loader/>:
                <>
                {category?.data.map((category)=>(
                <li key={category._id} className='li border-none justify-between transition-none'>
                  <p className='text-menu'>
                {category.name}
                     <img className='w-4' src={`${category.icon}.svg`} alt="" />
                     </p>
                    <ArrowBackIosNewIcon   style={{fontSize:'0.9rem'}} />
                </li>
           ))}
           </>
          }
              
          </ul>
          </li>
          <div className='relative'>
        <input value={search} onChange={changeHandler} type="text" className='peer bg-neutral-200 md:w-56 md:h-10 lg:h-12 lg:w-72  h-full w-full rounded-md placeholder:text-neutral-400 placeholder:font-semibold md:placeholder:text-base md:placeholder:font-extralight  px-1 '  placeholder='جستجو در تمام اگهی ها' />
        <SearchIcon  className='transition-all ease-in-out  duration-500 text-neutral-400  peer-hover:text-neutral-600 absolute top-0 left-0 m-2 '/>
        <div  className='transition-all hidden peer-focus:block opacity-0 duration-500 ease-in-out drop-shadow-xl translate-y-[-40px]  peer-focus:animate-navbar  bg-white min-h-32 w-full absolute'></div>
        </div>
        
       <li id='menu'  className="relative">
        <p onClick={()=>showPages? setshowPages(false):setshowPages(true)}   className='peer navbar-text'  >
        دیوار من
        <PersonOutlineOutlinedIcon  />
        </p>
        <ul aria-disabled={showPages}  className='menu '>
         {user&& <li className='li flex-col'>
           { user?.data.role=="ADMIN"&& <Link to={"/admin"} className='text-menu'>ادمین دیوار</Link>}
           { user?.data.role=="USER"&& <p className='text-menu'>کاربر دیوار</p>}
            <span className='text-neutral-300 text-sm font-light mr-3 '>تلفن {e2p(user?.data.mobile)}</span>
          </li>
}
          <li className='li  group'>
          <p className='text-menu w-full h-full' aria-valuetext='/my-posts' onClick={pageHandler} >
          اگهی های من </p>
          </li>
          <li className='li  group '>
            <p className='text-menu w-full h-full' aria-valuetext='/Book-Marks' onClick={pageHandler}>
            نشان ها
            </p>
          </li>
          <li className='li border-none'>
            {!user&&<p onClick={()=>setShowAuth(true)}>ورود</p>}
          {user&&<p onClick={DeleteHandler} className='text-menu'>خروج</p>}
            </li>
        </ul>
      </li>
       <li className='navbar-text'>
        چت
         <ChatIcon  />
       </li>
       <li className="navbar-text">
       پشتیبانی
         <SupportIcon />
       </li>
       <li className="navbar-text" >
        fa
        <PublicIcon />
       </li>
      <li>
      <button onClick={()=>{!data?navigate("/new"):setShowAuth(true)}} className='btn'>
        ثبت اگهی
      </button>
      </li>
      </ul>
    </header>
    
  )
}

export default Header