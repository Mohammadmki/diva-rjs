import  { useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { checkOtp } from '../../servises/auth';
import { setcookie } from '../../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { profile } from '../../servises/user';



function CheckOTP({setstep,code,setcode,mobile,setShowAuth}) {
  const [show,setShow]=useState(true)
  const [Loading,setLoading]=useState(false)

const input=useRef(null)
const navigate=useNavigate()
const{refetch}=useQuery({queryKey:["getprofile"],queryFn:profile})

  const submitHandeler=async(e)=>{
    e.preventDefault()
    if(code.length!==5){
      input.current.nextSibling.className="text-red-600 text-sm block"
   input.current.className=' border-solid pr-3 h-9 rounded-md w-full border-red-600 border-2 placeholder:text-neutral-400 '
   
    }
    setLoading(true)
    const {res}= await checkOtp(mobile,code)
    if(res){
      setShow(false)
      setcookie(res.data)
      refetch()
    }

  }
  console.log(show)
 
  return (
    <form onSubmit={submitHandeler} className={show?'flex flex-col py-3 bg-white px-2 w-[450px]':"hidden"} >
      <div className='flex flex-row justify-between border-solid border-b-2 pb-7  border-neutral-200 mb-8'>
        <h2 className='md:text-xl text-base'>ورود به حساب کاربری</h2>
        <CloseIcon onClick={()=>{setShow(false),setShowAuth(false)}}  className='cursor-pointer'/>
      </div>
      <h4 className='md:text-lg text-base font-semibold mb-7'>کد تایید را وارد نمایید</h4>
      <input className='transition-all input  duration-500 ease-in-out border-solid pr-3 h-6 md:h-9 rounded-md w-full border-neutral-300 border-2 placeholder:text-neutral-400 hover:border-black focus:border-divar' value={code} onChange={(e)=>setcode(e.target.value)} ref={input} type="text" placeholder='کد تایید 5 رقمی' />
      <p className='text-red-600 text-sm mt-2 font-light hidden'>کد تایید معتبر نیست</p>
      <p onClick={()=>setstep(1)} className='transition-all duration-500 ease-in-out bg-neutral-200 text-neutral-400 w-fit rounded-full text-sm px-3 py-1 self-end cursor-pointer mt-2 hover:bg-neutral-300 hover:text-neutral-500'>تغییر شماره موبایل </p>
      <hr className='mt-7 mb-2'></hr>
      <div className='flex flex-row-reverse justify-between' >
      <button className='bg-divar cursor-pointer disabled:opacity-50 text-white flex items-center justify-center w-16 md:w-24 text-base md:text-xl self-end h-7 md:h-9 py-1 rounded-md' disabled={Loading} type='submit' >ورود</button>
      <p className=' text-xs md:text-base' >کد تایید شما: <span className='text-divar' >12345</span></p>
      </div>
     
    </form>
  )
}

export default CheckOTP