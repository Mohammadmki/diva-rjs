import React from 'react'
import { getcookie } from '../../utils/cookie'
import axios from 'axios'
import { FaRegImage } from "react-icons/fa6";
import { MdAddCircle } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SetDiscreption({setStep,step,post,setPost}) {
  const changeHandler=(e)=>{
     if(e.target.name=="images"){
      
     setPost({...post,[e.target.name]:e.target.files[0]})
     }else{
      setPost({...post,[e.target.name]:e.target.value})
     }
  
  }
const navigate=useNavigate()
 

  const submitHandler=(e)=>{
  e.preventDefault()
   if(!post.amount||!post.title||!post.city) {
    toast.error("لطفا همه فرم را کامل کنید")
    return
   }
  const formData=new FormData()
  for(let i in post){
    formData.append(i,post[i])
  }
  const token=getcookie("accessToken")
  axios.post(`${import.meta.env.VITE_BASE_URL}post/create`,formData,{
    headers:{
      "Content-Type":"multipart/form-data",
      Authorization:`bearer ${token}`
    }
  }).then((res)=>toast.success("اگهی با موفقیت ایجاد شد") ).catch(toast.error("اگهی ایجاد نشد لطفا بعدا امتحان کنید"))
  
  }

  return (
    <div className='relative flex w-[420px] px-3 container mx-auto my-5 flex-col'>
      <Toaster/>
      <h2 className='text-xl font-light mb-12' >ثبت اگهی</h2>
     
     
      <button onClick={()=>setStep(1)} className='btn px-3  text-base self-end absolute top-0 '>تغییر دسته بندی</button>
      
      <form onSubmit={submitHandler} onChange={changeHandler} className=' flex flex-col'>
        <label htmlFor="city">شهر</label>
        <input className='input mt-3 mb-7' type="text" id='city' name='city' />
        <label htmlFor="title">عنوان</label>
        <input className='input mt-3 mb-7' type="text" name='title' id='title' />
        <label htmlFor="amount">قیمت</label>
        <input className='input mt-3 mb-7' type="text" name='amount' id='amount' />
        <label htmlFor="content">توضیحات اگهی </label>
        <textarea className='input mt-3 mb-7 h-44' type="text" name='content' id='content' />
        <div  className=' w-fit mb-6 h-fit'>
          <h3 className=' md:text-lg lg:text-xl font-medium mb-4'>عکس اگهی</h3>
        <label className='transition-all flex justify-center duration-300 ease-in-out bg-transparent opacity-70 hover:opacity-100 relative cursor-pointer md:text-4xl lg:text-6xl border-dashed rounded-md text-neutral-500 border-neutral-300 border-2 p-2   w-full ' htmlFor="images"><FaRegImage/> <MdAddCircle className='absolute top-0 right-0 md:text-lg lg:text-2xl mr-3 lg:mr-1 mt-[2px] bg-transparent text-divar'  /></label>
        <input className='hidden'  type="file" name='images' id='images' />
        </div>
        <div className='flex flex-row-reverse self-end gap-x-4'>
        <button className='btn px-3 py-0 '>ثبت اگهی</button>
        <button onClick={()=>{setStep(1),setPost({})}} className='px-5 py-2 rounded-md bg-white border-solid border-neutral-300  border-2 w-fit'>انصراف</button>
        </div>
      </form>
    </div>
  )
}

export default SetDiscreption