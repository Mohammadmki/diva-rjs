import  { useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { sentOtp } from '../../servises/auth';

function SendOTP({mobile,setMobile,setstep}) {
  const input=useRef(null)
  const [show,setShow]=useState(true)

  const submitHandeler= async (e)=>{
   e.preventDefault()
   if(mobile.length!==11){
  input.current.nextSibling.className="text-red-600 text-sm block"
   input.current.className=' border-solid pr-3 h-9 rounded-md w-full border-red-600 border-2 placeholder:text-neutral-400 '
   console.log(input)
   
   }
   const{res,error}= await sentOtp(mobile)
   console.log({res,error})
  
    if(res)setstep(2)
  }
  return (
    
     <form className={show?' flex flex-col md:w-[420px] bg-white px-1 py-2 lg:w-[500px]' :'hidden'} onSubmit={submitHandeler}>
      <div className='flex flex-row justify-between border-solid border-neutral-200  border-b-2 py-5 mb-6'>
        <h2 className='text-xl'>ورود به حساب کاربری</h2>
        <CloseIcon onClick={()=>setShow(false)}   className='cursor-pointer'/>
      </div>
      <div className='border-neutral-200 mb-4 pb-3 border-b-2 border-solid'>
      <h4 className='text-lg font-semibold mb-6'>شماره موبایل خود را وارد کنید</h4>
      <p className='text-neutral-400 mb-3 text-sm font-extralight'>برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.</p>
      <input ref={input} className='transition-all  duration-500 ease-in-out border-solid pr-3 h-9 rounded-md w-full border-neutral-300 border-2 placeholder:text-neutral-400 hover:border-black focus:border-divar' onChange={e=>setMobile(e.target.value)} value={mobile} type="text" placeholder='شماره موبایل' />
      <p className='hidden' >لطفاً شماره موبایل معتبر وادر کنید</p>
      <p className='mt-2'>شرایط استفاده از خدمات و حریم خصوصی دیوار را می‌پذیرم</p>
      </div>
      <button className='bg-divar cursor-pointer text-white w-24 text-xl self-end h-9 py-1 rounded-md' type='submit' >تایید</button>
      </form>
    
   
  )
}

export default SendOTP