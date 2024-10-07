import React from 'react'
import { Outlet } from 'react-router-dom'

function Outlets() {
  return (
   <div className="w-full h-full justify-center items-center"><Outlet/></div>
  )
}

export default Outlets