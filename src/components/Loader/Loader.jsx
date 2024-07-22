import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='w-full h-full justify-center items-center'>
        <TailSpin color='#a62626'  width='550px' height={'100px'} />
    </div>
  )
}

export default Loader