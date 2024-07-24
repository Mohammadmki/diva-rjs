import { useState } from "react"

import SetCategory from "../components/createpost/SetCategory"
import SetDiscreption from "../components/createpost/SetDiscreption"


function CreatePosts() {
  const [post,setPost]=useState({category:"",city:"",amount:null,images:null,content:"",title:""})
  const [step,setStep]=useState(1
  )
console.log(post)
  return (
    <div>
        { step==1 && <  SetCategory setPost={setPost} setStep={setStep} />}
        {step==2 && <SetDiscreption setStep={setStep} post={post} setPost={setPost} />}
    </div>
  )
}

export default CreatePosts