import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'
import AdminPage from '../pages/AdminPage'
import Detalespage from '../pages/Detalespage'
import Notfoundpage from '../pages/Notfoundpage'
import Dashboard from '../pages/Dashboard'

function Router() {
  return (
    <Routes>
        <Route index element={<Mainpage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='/:id' element={<Detalespage/>} />
         <Route path='*' element={<Notfoundpage/>}/>
    </Routes>
  )
}

export default Router