import React, { useRef, useState } from 'react'
import Header from './Header'

import Authpage from '../../pages/Authpage'
import Footer from './Footer'
import { CloseFullscreen } from '@mui/icons-material'

function Lyout({children}) {

  const [ShowAuth,setShowAuth]=useState(false)
  const[showPages,setshowPages]=useState(false)
  const [showcategory,setShowcategory]=useState(false)
  const [showsearch,setShowsearch]=useState(false)

  
 

  const showHandler=()=>{
    
  
    if(showcategory){
      setShowcategory(false)
      
      return
    }
    setshowPages(false)
    
  }


  return (
   <>
   <Header setShowsearch={setShowsearch} showsearch={showsearch} showcategory={showcategory} setShowAuth={setShowAuth} setShowcategory={setShowcategory} showPages={showPages} setshowPages={setshowPages}/>
   {ShowAuth&&<Authpage setShowAuth={setShowAuth}/>}
   <div aria-disabled={showcategory||showsearch||showPages?true:false} className='transition-all aria-disabled:backdrop-filter-none aria-disabled:bg-white md:aria-disabled:bg-transparent md:aria-disabled:backdrop-brightness-90 h-full duration-300 ease-in-out' onClick={showHandler}>
   <div   aria-disabled={showcategory||showPages||showsearch?true:false} className='opacity-100 transition-all duration-200 ease-in-out min-h-[100vh]  md:mt-14 aria-disabled:hidden aria-disabled:opacity-0 md:aria-disabled:opacity-100 md:aria-disabled:inline-block z-40 md:aria-disabled:pointer-events-none w-full   '>{children }</div>
   </div>
   <Footer/>
   </>
  )
}

export default Lyout