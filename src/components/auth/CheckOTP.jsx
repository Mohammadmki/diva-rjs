import  { useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Flag, PhoneCallback } from '@mui/icons-material';
import { checkOtp } from '../../servises/auth';
import { setcookie } from '../../utils/cookie';

function CheckOTP({setstep,code,setcode,mobile}) {
  const [show,setShow]=useState(true)
const input=useRef(null)

  const submitHandeler=async(e)=>{
    e.preventDefault()
    if(code.length!==5){
      input.current.nextSibling.className="text-red-600 text-sm block"
   input.current.className=' border-solid pr-3 h-9 rounded-md w-full border-red-600 border-2 placeholder:text-neutral-400 '
   
    }
    const {res,error}= await checkOtp(mobile,code)
    if(res){
      setcookie(res.data)
    }
  }
 
  return (
    <form onSubmit={submitHandeler} className={show?'flex flex-col py-3 px-2 w-[450px]':"hidden"} >
      <div className='flex flex-row justify-between border-solid border-b-2 pb-7  border-neutral-200 mb-8'>
        <h2 className='text-xl'>ورود به حساب کاربری</h2>
        <CloseIcon onClick={()=>setShow(false)}  className='cursor-pointer'/>
      </div>
      <h4 className='text-lg font-semibold mb-7'>کد تایید را وارد نمایید</h4>
      <input className='transition-all   duration-500 ease-in-out border-solid pr-3 h-9 rounded-md w-full border-neutral-300 border-2 placeholder:text-neutral-400 hover:border-black focus:border-divar' value={code} onChange={(e)=>setcode(e.target.value)} ref={input} type="text" placeholder='کد تایید 5 رقمی' />
      <p className='text-red-600 text-sm mt-2 font-light hidden'>کد تایید معتبر نیست</p>
      <p onClick={()=>setstep(1)} className='transition-all duration-500 ease-in-out bg-neutral-200 text-neutral-400 w-fit rounded-full text-sm px-3 py-1 self-end cursor-pointer mt-2 hover:bg-neutral-300 hover:text-neutral-500'>تغییر شماره موبایل </p>
      <hr className='mt-7 mb-2'></hr>
      <button className='bg-divar cursor-pointer  text-white w-24 text-xl self-end h-9 py-1 rounded-md' type='submit' >ورود</button>
    </form>
  )
}

export default CheckOTP