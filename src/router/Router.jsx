import React, { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'
import AdminPage from '../pages/AdminPage'
import Detalespage from '../pages/Detalespage'
import Mypost from '../pages/Mypost'
import Notfoundpage from '../pages/Notfoundpage'
import CreatePosts from '../pages/Createpost'
import Authpage from '../pages/Authpage'
import { profile } from '../servises/user'
import BookMarks from '../pages/BookMarks'

function Router() {
    const navigate=useNavigate()
 

    const{data,isLoading,error}=useQuery({queryKey:["getprofile"],queryFn:profile})
  console.log(data)

    return (
    <Routes>
        <Route index element={<Mainpage/>} />
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/:id' element={<Detalespage/>}/>
        <Route path='/my-posts' element={<Mypost/>}/>
        <Route path='/Book-Marks' element={<BookMarks/>}/>
        <Route path='/new' element={data ?<CreatePosts/>:navigate("/auth")} />
        <Route path='/auth' element={<Authpage/>}/>
        <Route path='*' element={<Notfoundpage/>} />
    </Routes>
  )
}

export default Router