import { useState } from "react"

import SetCategory from "../components/createpost/SetCategory"
import SetDiscreption from "../components/createpost/SetDiscreption"
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"



function CreatePosts() {
  const [post,setPost]=useState({category:"",city:"",amount:null,images:null,content:"",title:""})
  const [step,setStep]=useState(1)
const navigate=useNavigate()

const exitHandler=()=>{
navigate("/")
}


  return (
    <>
    <header className="md:hidden flex flex-row justify-between w-full py-3 px-2 z-50 bg-neutral-200 fixed top-0">
       <p>ثبت اگهی</p>
        <i onClick={exitHandler}><IoIosArrowBack/></i>
    </header>
    <div className="px-2 z-10 pt-2 h-full  md:pt4 md:px-5">
     
        { step==1 && <  SetCategory setPost={setPost} setStep={setStep} />}
        {step==2 && <SetDiscreption setStep={setStep} post={post} setPost={setPost} />}
    </div>
    </>
  )
}

export default CreatePosts