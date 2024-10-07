import React, { useEffect, useState } from 'react'
import { getCategory } from '../servises/Category'
import { useQuery } from '@tanstack/react-query'
import { IoIosArrowBack } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SetCategory from '../components/createpost/SetCategory'
import { filterbyCategory } from '../features/Filter/filterSlice'


function Category() {

  
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {data:categorys,isLoading}=useQuery({queryKey:["category"],queryFn:getCategory})



  return (
      <ul className=''>
        <h3 className='text-xl pt-4 font-medium pb-3 w-full bg-neutral-200'>دسته ی اگهی ها</h3>
        {categorys?.data.map((category)=>(
                <li onClick={()=>{  dispatch(filterbyCategory({category})), navigate("/")}} key={category._id} className='li border-none justify-between transition-none'>
                  <p className='text-base flex gap-x-1 text-neutral-700 flex-row-reverse'>
                {category.name}
                     <img className='w-5' src={`${category.icon}.svg`} alt="" />
                     </p>
                     <IoIosArrowBack className='text-xl text-neutral-400' />
                </li>
  ))}
</ul>
  )}
export default Category