
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { addCategory } from '../../servises/Category'


function CreateCategory() {

    const[form,setForm]=useState({name:"",slog:"",icon:"",})

     const {mutate,data,isLoading}=useMutation({mutationFn:addCategory})

    const formHandeler=(e)=>{
        setForm({...form,[e.target.name] : e.target.value})
    }

  



   const submitHandeler=(e)=>{
    e.preventDefault()
    if(!form.name||!form.icon||!form.slog) {
        toast.error("لطفا همه فرم را کامل کنید",{
            duration:3500, })
        return
    }
        mutate(form)
        toast.success("دسته بندی ایجاد شد")
    }
    


  return (
    <form className='flex flex-col items-start  ' onChange={formHandeler} onSubmit={submitHandeler} >
        <h3 className='w-fit lg:text-2xl md:text-lg border-solid border-b-4 mb-7 text-sm font-semibold border-divar'>ایجاد دسته بندی جدید</h3>
        <Toaster position='top-center '/>
        <label className='font-medium text-sm md:text-lg lg:text-xl' htmlFor="name">اسم دسته بندی</label>
        <input className= 'input mb-5  lg:min-w-96  h-3 md:h-8  min-w-64 ' type="text" name='name' />
        <label className='font-medium text-sm md:text-lg lg:text-xl' htmlFor="slog">اسلاگ</label>
        <input className='input mb-5 lg:min-w-96  h-6 md:h-8  min-w-64' type="text" name='slog' />
        <label className='font-medium text-sm md:text-lg lg:text-xl' htmlFor="icon">آیکون</label>
        <input className='input mb-5 lg:min-w-96  h-6 md:h-8 min-w-64' type="text" name='icon' />
        <button className='btn text-base lg:text-lg px-3 py-1 disabled:opacity-50' disabled={isLoading} type='submit'>ایجاد</button>
    </form>
  )
}

export default CreateCategory