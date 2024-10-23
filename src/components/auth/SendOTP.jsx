import  { useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { sentOtp } from '../../servises/auth';
import { useNavigate } from 'react-router-dom';

function SendOTP({mobile,setMobile,setstep,setShowAuth}) {
  const input=useRef(null)
  const [show,setShow]=useState(true)
  const navigate=useNavigate()
 const [Loading,setLoading]=useState(false)

  const submitHandeler= async (e)=>{
   e.preventDefault()
   if(mobile.length!==11){
  input.current.nextSibling.className="text-red-600 text-xs md:text-sm block"
   input.current.className=' border-solid pr-3 h-9 rounded-md w-full border-red-600 border-2 placeholder:text-neutral-400 '
   return
   }
   setLoading(true)
   const{res,error}= await sentOtp(mobile)
    setLoading(false)
    if(res)setstep(2)
  }
  return (
    
     <form className={show?' flex flex-col w-[300px] md:w-[420px] bg-white px-1 py-4 lg:w-[500px]' :'hidden'} onSubmit={submitHandeler}>
      <div className='flex flex-row justify-between border-solid border-neutral-200  border-b-2 py-5 mb-6'>
        <h2 className='text-base md:text-xl'>ورود به حساب کاربری</h2>
        <CloseIcon onClick={()=>{setShow(false),setShowAuth(false)}}   className='cursor-pointer'/>
      </div>
      <div className='border-neutral-200 mb-4 pb-3 border-b-2 border-solid'>
      <h4 className='md:text-lg text-base font-semibold mb-6'>شماره موبایل خود را وارد کنید</h4>
      <p className='text-neutral-400 mb-3 text-xs md:text-sm font-extralight'>برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.</p>
      <input ref={input} className='md:placeholder:text-base placeholder:text-sm transition-all  duration-500 ease-in-out border-solid pr-3 h-6 md:h-9 rounded-md w-full border-neutral-300 border-2 placeholder:text-neutral-400 hover:border-black input' onChange={e=>setMobile(e.target.value)} value={mobile} type="text" placeholder='شماره موبایل' />
      <p className='hidden' >لطفاً شماره موبایل معتبر وادر کنید</p>
      <p className='mt-2 md:text-base text-sm'>شرایط استفاده از خدمات و حریم خصوصی دیوار را می‌پذیرم</p>
      </div>
      <div className='flex flex-row-reverse justify-between ' >
      <button className='bg-divar cursor-pointer text-white w-20 md:w-24 disabled:opacity-50 text-base md:text-xl self-end md:h-9 h-7 md:py-1 rounded-md' disabled={Loading} type='submit' >تایید</button>
      <p className='text-xs md:text-base' >شماره اکانت ادمین <span className='text-divar w-fit' >09189990099</span></p>
      </div>
      </form>
    
   
  )
}

export default SendOTP