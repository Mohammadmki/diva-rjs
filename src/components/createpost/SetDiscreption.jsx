import React from 'react'
import { getcookie } from '../../utils/cookie'
import axios from 'axios'

function SetDiscreption({setStep,step,post,setPost}) {
  const changeHandler=(e)=>{
     if(e.target.name=="images"){
     setPost({...post,[e.target.name]:e.target.files[0]})
     }else{
      setPost({...post,[e.target.name]:e.target.value})
     }
  
  }

 

  const submitHandler=(e)=>{
  e.preventDefault()
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
  }).then((res)=>console.log(res)).catch(error=>console.log(error))

  }

  return (
    <div className='relative flex w-[420px] px-3 container mx-auto my-5 flex-col'>
      
      <h2 className='text-xl font-light mb-12' >ثبت اگهی</h2>
     
     
      <button onClick={()=>setStep(1)} className='btn px-3  text-base self-end absolute top-0 '>تغییر دسته بندی</button>
      
      <form onSubmit={submitHandler} onChange={changeHandler} className=' flex flex-col'>
        <label htmlFor="city">شهر</label>
        <input className='input mt-3 mb-7' type="text" id='city' name='city' />
        <label htmlFor="title">عنوان</label>
        <input className='input mt-3 mb-7' type="text" name='title' id='title' />
        <label htmlFor="content">توضیحات</label>
        <input className='input mt-3 mb-7' type="text" name='content' id='content' />
        <label htmlFor="amount">قیمت</label>
        <input className='input mt-3 mb-7' type="text" name='amount' id='amount' />
        <label htmlFor="content">توضیحات اگهی </label>
        <textarea className='input mt-3 mb-7 h-44' type="text" name='content' id='content' />
        <label htmlFor="images">عکس</label>
        <input className='input mt-3 mb-4 file:text-red-300' type="file" name='images' id='images' />
        <div className='flex flex-row-reverse self-end gap-x-4'>
        <button className='btn px-3 py-0 '>ثبت اگهی</button>
        <button onClick={()=>{setStep(1),setPost({})}} className='px-5 py-2 rounded-md bg-white border-solid border-neutral-300  border-2 w-fit'>انصراف</button>
        </div>
      </form>
    </div>
  )
}

export default SetDiscreption