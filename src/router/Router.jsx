import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'
import AdminPage from '../pages/AdminPage'
import Detalespage from '../pages/Detalespage'
import Notfoundpage from '../pages/Notfoundpage'
import Dashboard from '../pages/Dashboard'
import { useQuery } from '@tanstack/react-query'
import { profile } from '../servises/getprofile'
import Authpage from '../pages/Authpage'

function Router() {

  const{data,isLoading,error}=useQuery({queryKey:["getprofile"],queryFn:profile})

  const navigate=useNavigate()

  return (
    <Routes>
        <Route index element={<Mainpage/>} />
        <Route path='/admin' element={data&&data?.data.role==="ADMIN"?<AdminPage/>:navigate("/")} />
        <Route path='dashboard' element={data ? <Dashboard/>:<Authpage/>}/>
        <Route path='/:id' element={<Detalespage/>} />
         <Route path='*' element={<Notfoundpage/>}/>
    </Routes>
  )
}

export default Router