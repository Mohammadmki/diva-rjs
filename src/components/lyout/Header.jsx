import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import SupportIcon from '@mui/icons-material/Support';
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';

function Header() {
 const[show,setshow]=useState(false)

  return (

    <header className='flex flex-row flex-wrap border-b-2 py-2 justify-between items-center border-neutral-300 border-solid '>
        <Link to={"/"}>
        <img src="../../../public/divar.svg" className='xl:w-16 lg:w-16 w-12 cursor-pointer border-neutral-300 border-l-2 border-solid pl-3' alt="" />
        </Link>
        
       <p className="navbar-text">
       تهران 
         <LocationOnOutlinedIcon/>
       </p>
       <div className='relative'>
       <p className="navbar-text">
        
          <ArrowBackIosNewIcon className='rotate-90  mr-2'/>
          </p>
         {show&&  <div style={{transform:"opacity:0"}} className='duration-500 ease-in-out opacity-1 bg-green-400 w-full min-h-28 absolute'>
          </div>}
          </div>
        <div className='relative h-12 group  xl:mr-4  md:mr-2 lg:placeholder:text-lg lg:font-semibold '>
        <input type="text" className='peer bg-neutral-200 md:w-48 md:h-9 lg:h-12 lg:w-72  h-full w-full rounded-md placeholder:text-neutral-400 placeholder:font-semibold md:placeholder:text-base md:placeholder:font-extralight  px-1 '  placeholder='جستجو در تمام اگهی ها' />
        <SearchIcon  style={{fontSize:"30px"}}  className=' group-hover:text-neutral-600 absolute top-0 left-0   text-neutral-400  m-2'/>
        <div  className='transition-all delay-100 duration-500 top-[100px] bottom-2 hidden peer-focus:top-[50px] peer-focus:flex bg-red-500 opacity-0 peer-focus:opacity-100 ease-out absolute min-h-56  w-full h-full'>jh</div>
        </div>
       <p className="navbar-text">
        دیوار من
        <PersonOutlineOutlinedIcon />
      </p>
       <p className='navbar-text'>
        
         <ChatIcon />
       </p>
       <p className="navbar-text">
       پشتیبانی
         <SupportIcon/>
       </p>
       <p className="navbar-text">
        
        <PublicIcon/>
       </p>
      <button className='btn'>
        ثبت اگهی
      </button>
    </header>
  )
}

export default Header