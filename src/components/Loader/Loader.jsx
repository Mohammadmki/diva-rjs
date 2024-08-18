import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='w-full h-full mt-28 col-span-full flex items-center justify-items-center justify-center mx-auto'>
        <TailSpin  color='#a62626'  width='550px'  height={'100px'} />
    </div>
  )
}

export default Loader