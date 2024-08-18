import { useState } from "react"

import SetCategory from "../components/createpost/SetCategory"
import SetDiscreption from "../components/createpost/SetDiscreption"


function CreatePosts() {
  const [post,setPost]=useState({category:"",city:"",amount:null,images:null,content:"",title:""})
  const [step,setStep]=useState(1)

  return (
    <div className="px-2 pt-2 md:pt4 md:px-5">
        { step==1 && <  SetCategory setPost={setPost} setStep={setStep} />}
        {step==2 && <SetDiscreption setStep={setStep} post={post} setPost={setPost} />}
    </div>
  )
}

export default CreatePosts