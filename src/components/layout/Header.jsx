import React, { useRef, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineSupport } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../servises/Category';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector} from 'react-redux';
import {  filterbyCategory, FilterbySearch } from '../../features/Filter/filterSlice';
import { profile } from '../../servises/user';
import { e2p } from '../../utils/number';



function Header({showsearch,setShowsearch,showcategory,setShowcategory,showPages,setshowPages,setShowAuth}) {

  const location=useLocation()
 

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
  setshowPages(false)
  navigate("/")
  
 }
 
 const filter=useSelector((Store)=>Store.filter)



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
   
    <header aria-disabled={location.pathname=="/"?"false":"true"}  className='fixed  z-50 h-fit top-0 m-0 md:py-0 py-2 px-1 w-full bg-neutral-100 md:bg-white  aria-disabled:hidden md:aria-disabled:inline-block flex md:flex-row flex-row-reverse flex-wrap border-b-2  justify-center items-center border-neutral-300 border-solid '>
    
      <ul aria-disabled={showsearch} className='transition-all duration-200 ease-in-out flex aria-disabled:bg-transparent aria-disabled:border-none w-full md:bg-transparent md:py-0 py-1 md:border-none border-solid border-neutral-300 border-2 bg-white items-end md:items-center justify-around'>
        <li className='md:inline-block hidden'>
        <Link to={"/"}>
        <img src="../../../public/divar.svg" className=' lg:w-16 md:w-14 w-8 cursor-pointer border-neutral-300 border-l-2 border-solid pl-3' alt="" />
        </Link>
        </li>
          
       <li aria-disabled={showsearch} className="transition-all duration-200 ease-in-out md:border-none relative aria-disabled:opacity-0 md:aria-disabled:opacity-100 border-l-2 md:aria-disabled:inline-block aria-disabled:hidden border-neutral-300 border-solid">
      <p className='navbar-text '>
       تهران 
         <MdOutlineLocationOn className='navbaricons' />
         </p>
       </li>
   
       <li onClick={()=>{showcategory?setShowcategory(false):setShowcategory(true), setshowPages(false)}}  className="group md:inline-block hidden relative ">
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
          <div  className='relative md:w-fit w-full'>
        <input  onBlur={()=>setShowsearch(false)} onFocus={()=>setShowsearch(true)}  onChange={changeHandler} type="text" className='peer bg-transparent md:bg-neutral-200  flex items-center justify-center w-full md:w-56 md:h-10 lg:h-12 lg:w-72 h-4  placeholder:text-sm rounded-sm md:rounded-md placeholder:text-neutral-400 placeholder:font-semibold md:placeholder:text-base md:placeholder:font-extralight  px-1 '  placeholder={filter.category.length?` جست و جو در ${filter.category[0].name}`:"جست و جو در همه اگهی ها"} />
        <IoMdSearch  className='transition-all  ease-in-out  duration-500 text-neutral-400  peer-hover:text-neutral-600 absolute top-0 left-0 mb-1 md:m-2 text-lg'/>
        <div  className='transition-all hidden md:peer-focus:block opacity-0 duration-500 ease-in-out drop-shadow-xl translate-y-[-40px]  peer-focus:animate-navbar  bg-white min-h-32 w-full absolute'></div>
        </div>
        
       <li id='menu'   className="relative md:inline-block hidden">
        <p onClick={()=>{showPages? setshowPages(false):setshowPages(true),setShowcategory(false)}}   className='peer navbar-text'  >
        دیوار من
        <FaRegUser className='navbaricons' />
        </p>
        <ul aria-disabled={showPages}  className='menu '>
         {user&& <li className='li flex-col' onClick={()=>setshowPages(false)}>
           { user?.data.role=="ADMIN"&& <Link to={"/admin"} className='text-menu'>ادمین دیوار</Link>}
           { user?.data.role=="USER"&&  <Link to={"/my-divar/my-posts"} className='text-menu'>کاربر دیوار</Link>}
            <span className='text-neutral-300 text-[0.55rem] md:text-sm font-light mr-3 '>تلفن {e2p(user?.data.mobile)}</span>
          </li>
}
          <li className='li md:inline-block hidden  group'>
          <p className='text-menu w-full h-full' aria-valuetext='/my-divar/my-posts' onClick={pageHandler} >
          اگهی های من </p>
          </li>
          <li className='li  group '>
            <p className='text-menu  w-full h-full' aria-valuetext='/my-divar/Book-Marks' onClick={pageHandler}>
            نشان ها
            </p>
          </li>
          <li className='li border-none'>
            {!user&&<p className='text-menu' onClick={()=>{setShowAuth(true),setshowPages(false)}}>ورود</p>}
          {user&&<p onClick={DeleteHandler} className='text-menu'>خروج</p>}
            </li>
        </ul>
      </li>
       <li className=' md:inline hidden'>
        <p className='navbar-text'>
        چت
         <IoChatbubbleOutline className='navbaricons' />
         </p>
       </li>
       <li className="navbar-text md:inline-block hidden">
       <p className='navbar-text'>
       پشتیبانی
         <MdOutlineSupport className='navbaricons' />
         </p>
       </li>
       <li className="navbar-text md:inline-block hidden" >
       <p className='navbar-text'>
        fa
        <BiWorld className='navbaricons' />
        </p>
       </li>
      <li>
      <button onClick={()=>{user?navigate("/new"):setShowAuth(true)}} className='btn  md:inline-block hidden'>
        ثبت اگهی
      </button>
      </li>
      </ul>
    </header>
    
  )
}

export default Header