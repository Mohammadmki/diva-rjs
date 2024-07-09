import { useState } from 'react'
import CheckOTP from '../components/auth/CheckOTP'
import SendOTP from '../components/auth/SendOTP'

function Authpage() {
    const[step,setstep]=useState(1)
    const[mobile,setMobile]=useState()
    const[code,setcode]=useState()
  return (
    <div className='w-full h-full flex justify-center items-center backdrop-brightness-100 '>
       {step==1&&<SendOTP setstep={setstep} setMobile={setMobile} mobile={mobile}/>}
       {step==2&&<CheckOTP setstep={setstep} setcode={setcode} mobile={mobile} code={code}/>}
    </div>
  )
}

export default Authpage