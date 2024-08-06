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
import { ClassSharp } from '@mui/icons-material'

function Router() {

 

    const{data,isLoading,error}=useQuery({queryKey:["getprofile"],queryFn:profile})
    if(!data){
      console.log('first')
    }

    return (
    <Routes>
        <Route index element={<Mainpage/>} />
        <Route path='/admin' element={data&&data.data.role=="ADMIN" ? <AdminPage/>:<Navigate to={"/"} />}/>
        <Route path='/:id' element={<Detalespage/>}/>
        <Route path='/my-posts' element={data?<Mypost/>:<Authpage/>}/>
        <Route path='/Book-Marks' element={data ?<BookMarks/>:<Authpage />}/>
        <Route path='/new' element={data ?<CreatePosts/>:<Authpage />} />
       
        <Route path='*' element={<Notfoundpage/>} />
    </Routes>
  )
}

export default Router