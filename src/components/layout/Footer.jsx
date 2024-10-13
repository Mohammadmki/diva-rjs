
import { IoList } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import {  NavLink, useLocation } from 'react-router-dom';

function Footer() {
 
    const location=useLocation()
    console.log(location.pathname)


  return (
    <footer aria-disabled={location.pathname=="/new"?"true":"false"} className='fixed z-50 md:hidden aria-disabled:hidden bottom-0 w-full py-1 bg-neutral-200 px-2'>
    <ul className='flex flex-row justify-between items-center'>
        <li >
            <NavLink to={"/"} className='text-footer'>
                <img src="/public/divar.svg"  />
            اگهی ها
            </NavLink>
            </li>
            <li >
                <NavLink to={"/category"} className='text-footer'>
                <IoList className='iconfooter'/>
                دسته ها
                </NavLink>
            </li>
            <li >
                <NavLink to={"/new"} className='text-footer'>
                    <IoMdAddCircle className='iconfooter'/>
                    ثبت اگهی
                </NavLink>
            </li>
            <li className='pointer-events-none'>
                <NavLink to={"/chat"} className='text-footer'>
                   <IoChatbubblesSharp className='iconfooter'/>
                    چت
                </NavLink>
            </li>
            <li >
                <NavLink to={"/my-divar"} className='text-footer'>
                    <FaUser className='iconfooter'/>
                    دیوار من
                </NavLink>
            </li>
    </ul>
    </footer>
  )
}

export default Footer
