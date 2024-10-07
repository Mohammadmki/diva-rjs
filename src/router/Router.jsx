import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { Navigate, Route, Routes } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'
import AdminPage from '../pages/AdminPage'
import Detalespage from '../pages/Detalespage'
import Mypost from '../pages/Mypost'
import Notfoundpage from '../pages/Notfoundpage'
import CreatePosts from '../pages/Createpost'
import Authpage from '../pages/Authpage'
import { profile } from '../servises/user'
import BookMarks from '../pages/BookMarks'
import { ClassSharp, Dashboard } from '@mui/icons-material'
import Category from '../pages/Category'
import DashbordPage from '../pages/DashbordPage'

function Router() {

 

    const{data,isLoading,error}=useQuery({queryKey:["getprofile"],queryFn:profile})
  

    return (
    <Routes>
        <Route index element={<Mainpage/>} />
        <Route path='/admin' element={data&&data.data.role=="ADMIN" ? <AdminPage/>:<Navigate to={"/"} />}/>
        <Route path='/:id' element={<Detalespage/>}/>

        <Route path='/new' element={<CreatePosts/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='*' element={<Notfoundpage/>} />
        <Route path='/my-divar' element={<DashbordPage/>} >
        <Route path='my-posts' element={<Mypost/>} />
        <Route path='book-Marks' element={<BookMarks/>}/>
        </Route>
    </Routes>
  )
}

export default Router