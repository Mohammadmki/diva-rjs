import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineSupport } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../servises/Category';
import Loader from '../Loader/Loader';
import { useDispatch} from 'react-redux';
import { getPosts } from '../../servises/getposts';
import {  filterbyCategory, FilterbySearch } from '../../features/Filter/filterSlice';
import { profile } from '../../servises/user';
import { e2p } from '../../utils/number';


function Header({showcategory,setShowcategory,showPages,setshowPages,setShowAuth}) {





 const navigate=useNavigate()

 const {data:category,isLoading}=useQuery({queryKey:["category"],queryFn:getCategory})

 const{data:user,isLoading:load,refetch}=useQuery({queryKey:["getprofile"],queryFn:profile})

 
const dispatch=useDispatch()



 const changeHandler=(e)=>{
 dispatch(FilterbySearch(e.target.value))

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
 setShowcategory(false)
 setshowPages(false)

 }

  return (
   
    <header  className='fixed  z-50 h-fit top-0 m-0 px-1 w-full bg-white  flex flex-row flex-wrap border-b-2 py-2 justify-center items-center border-neutral-300 border-solid '>
    
      <ul className='flex w-full items-end md:items-center justify-around'>
        <li>
        <Link to={"/"}>
        <img src="../../../public/divar.svg" className=' lg:w-16 md:w-14 w-8 cursor-pointer border-neutral-300 border-l-2 border-solid pl-3' alt="" />
        </Link>
        </li>
          
       <li className="navbar-text relative">
       تهران 
         <MdOutlineLocationOn className='navbaricons' />
       </li>
   
       <li onClick={()=>{showcategory?setShowcategory(false):setShowcategory(true), setshowPages(false)}}  className="group relative ">
        <p aria-disabled={showcategory} className='group peer navbar-text'>
        <i className='transition-all mr-[2px] md:mr-3 duration-300 ease-in-out -rotate-90 group-aria-disabled:rotate-90'> <IoIosArrowBack className='navbaricons' /></i>
         دسته ها
    
         </p>
          <ul aria-disabled={showcategory} className='menu' >
                {isLoading? <Loader/>:
                <>
                {category?.data.map((category)=>(
                <li onClick={()=>{setShowcategory(false),dispatch(filterbyCategory({category}))}} key={category._id} className='li border-none justify-between transition-none'>
                  <p className='text-menu'>
                {category.name}
                     <img className='w-3 md:w-4' src={`${category.icon}.svg`} alt="" />
                     </p>
                     <IoIosArrowBack className='navbaricons' />
                </li>
           ))}
           </>
          }
              
          </ul>
          </li>
          <div className='relative '>
        <input  onChange={changeHandler} type="text" className='peer bg-neutral-200  flex items-center justify-center md:w-56 md:h-10 lg:h-12 lg:w-72 h-4 w-24 placeholder:text-[0.40rem] rounded-sm md:rounded-md placeholder:text-neutral-400 placeholder:font-semibold md:placeholder:text-base md:placeholder:font-extralight  px-1 '  placeholder='جستجو در تمام اگهی ها' />
        <IoMdSearch  className='transition-all  ease-in-out  duration-500 text-neutral-400  peer-hover:text-neutral-600 absolute top-0 left-0 mt-1 md:m-2 navbaricons'/>
        <div  className='transition-all hidden peer-focus:block opacity-0 duration-500 ease-in-out drop-shadow-xl translate-y-[-40px]  peer-focus:animate-navbar  bg-white min-h-32 w-full absolute'></div>
        </div>
        
       <li id='menu'  className="relative">
        <p onClick={()=>{showPages? setshowPages(false):setshowPages(true),setShowcategory(false)}}   className='peer navbar-text'  >
        دیوار من
        <FaRegUser className='navbaricons' />
        </p>
        <ul aria-disabled={showPages}  className='menu '>
         {user&& <li className='li flex-col'>
           { user?.data.role=="ADMIN"&& <Link to={"/admin"} className='text-menu'>ادمین دیوار</Link>}
           { user?.data.role=="USER"&& <p className='text-menu'>کاربر دیوار</p>}
            <span className='text-neutral-300 text-[0.55rem] md:text-sm font-light mr-3 '>تلفن {e2p(user?.data.mobile)}</span>
          </li>
}
          <li className='li  group'>
          <p className='text-menu w-full h-full' aria-valuetext='/my-posts' onClick={pageHandler} >
          اگهی های من </p>
          </li>
          <li className='li  group '>
            <p className='text-menu  w-full h-full' aria-valuetext='/Book-Marks' onClick={pageHandler}>
            نشان ها
            </p>
          </li>
          <li className='li border-none'>
            {!user&&<p className='text-menu' onClick={()=>setShowAuth(true)}>ورود</p>}
          {user&&<p onClick={DeleteHandler} className='text-menu'>خروج</p>}
            </li>
        </ul>
      </li>
       <li className='navbar-text'>
        چت
         <IoChatbubbleOutline className='navbaricons' />
       </li>
       <li className="navbar-text">
       پشتیبانی
         <MdOutlineSupport className='navbaricons' />
       </li>
       <li className="navbar-text" >
        fa
        <BiWorld className='navbaricons' />
       </li>
      <li>
      <button onClick={()=>{user?navigate("/new"):setShowAuth(true)}} className='btn'>
        ثبت اگهی
      </button>
      </li>
      </ul>
    </header>
    
  )
}

export default Header