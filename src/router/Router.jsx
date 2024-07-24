import React from 'react'
import { profile } from '../servises/getprofile'
import { useQuery } from '@tanstack/react-query'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'
import AdminPage from '../pages/AdminPage'
import Detalespage from '../pages/Detalespage'
import Mypost from '../pages/Mypost'
import Notfoundpage from '../pages/Notfoundpage'
import CreatePosts from '../pages/Createpost'
import Authpage from '../pages/Authpage'

function Router() {
    const{data,isLoading,error}=useQuery({queryKey:["getprofile"],queryFn:profile})
  
    const navigate=useNavigate()

    return (
    <Routes>
        <Route index element={<Mainpage/>} />
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/:id' element={<Detalespage/>}/>
        <Route path='/myPosts' element={<Mypost/>}/>
        <Route path='/BookMarks' element={<Detalespage/>}/>
        <Route path='/new' element={data ?<CreatePosts/>:navigate("/auth")} />
        <Route path='/auth' element={<Authpage/>}/>
        <Route path='*' element={<Notfoundpage/>} />
    </Routes>
  )
}

export default Router