import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Lyout({children}) {
  return (
   <>
   <Header/>
   <div className='min-h-[100vh] w-full'>{children}</div>
   <Footer/>
   </>
  )
}

export default Lyout