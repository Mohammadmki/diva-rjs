import React, { useRef, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Authpage from '../../pages/Authpage'

function Lyout({children}) {

  const [ShowAuth,setShowAuth]=useState(false)
  const[showPages,setshowPages]=useState(false)
  const [showcategory,setShowcategory]=useState(false)
  const continer=useRef(null)

  
 

  const showHandler=()=>{
    
  
    if(showcategory){
      setShowcategory(false)
      
      return
    }
    setshowPages(false)
    
  }

  

  return (
   <>
   <Header showcategory={showcategory} setShowAuth={setShowAuth} setShowcategory={setShowcategory} showPages={showPages} setshowPages={setshowPages}/>
   {ShowAuth&&<Authpage setShowAuth={setShowAuth}/>}
   <div aria-disabled={showcategory||showPages?true:false} className='transition-all  aria-disabled:backdrop-brightness-90 h-full duration-300 ease-in-out' onClick={showHandler}>
   <div ref={continer}  aria-disabled={showcategory||showPages?true:false} className=' min-h-[100vh] mt-10 md:mt-14  z-40 aria-disabled:pointer-events-none w-full   '>{children }</div>
   </div>
   <Footer/>
   </>
  )
}

export default Lyout