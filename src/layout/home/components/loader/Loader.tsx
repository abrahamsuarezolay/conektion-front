

import React from 'react'
import { ScaleLoader } from 'react-spinners'
import "./Loader.scss"

const Loader = () => {
  return (
    <div className='loader-container'>
        <ScaleLoader color='#c5143d' height={50} width={10} />
    </div>
  )
}

export default Loader