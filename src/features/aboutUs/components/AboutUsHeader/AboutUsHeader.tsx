
import React, { useContext, useEffect, useState } from 'react'
import "./AboutUsHeader.scss"
import { AboutUsHeaderComponent } from '../../../../types/component.types'

export const AboutUsHeader:React.FC<AboutUsHeaderComponent> = ({ headerData }) => {

  return (
        <div className='about-us-header-container'>
          <img src={headerData?.imgUrl} alt='about-us-header' />
          <div className='about-us-content'>
            <h2>{headerData?.title}</h2>
            <p>{headerData?.subtitle}</p>
          </div>
        </div>
  )
}
