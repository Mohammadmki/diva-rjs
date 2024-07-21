
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createcategory } from '../../features/Category/createCategorySlice'
import toast, { Toaster } from 'react-hot-toast'
import { Tornado } from '@mui/icons-material'

function CreateCategory() {

    const[form,setForm]=useState({name:"",slog:"",icon:"",})


    const formHandeler=(e)=>{
        setForm({...form,[e.target.name] : e.target.value})
    }
  const createCategory=useSelector((store)=>store.createcategory)
  


  const dispatch=useDispatch()
   const submitHandeler=(e)=>{
    e.preventDefault()
    if(!form.name||!form.icon||!form.slog) {
        toast.error("لطفا همه فرم را کامل کنید",{
            duration:3500,
        })
        return
    }
    dispatch((createcategory(form)))
    if(createCategory?.categorydata.status===201||createCategory?.categorydata.status===200){
        toast.success("دسته بندی با موفقیت ایجاد شد")
    }
    
   }


  return (
    <form className='flex flex-col items-start  ' onChange={formHandeler} onSubmit={submitHandeler} >
        <h3 className='w-fit lg:text-2xl border-solid border-b-4 mb-7 text-lg font-semibold border-divar'>ایجاد دسته بندی جدید</h3>
        <Toaster position='top-center '/>
        <label className='font-medium lg:text-xl' htmlFor="name">اسم دسته بندی</label>
        <input className= 'input mb-5 lg:min-w-96 min-h-8 min-w-64 ' type="text" name='name' />
        <label className='font-medium lg:text-xl' htmlFor="slog">اسلاگ</label>
        <input className='input mb-5 lg:min-w-96 min-h-8 min-w-64' type="text" name='slog' />
        <label className='font-medium lg:text-xl' htmlFor="icon">آیکون</label>
        <input className='input mb-5 lg:min-w-96 min-h-8 min-w-64' type="text" name='icon' />
        <button className='btn text-base lg:text-lg px-3 py-1 disabled:opacity-50' disabled={createCategory.Loading} type='submit'>ایجاد</button>
    </form>
  )
}

export default CreateCategory