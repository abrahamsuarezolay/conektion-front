import React, { useContext, useEffect, useState } from 'react'
import "./SectionHeader.scss"
import { SectionHeaderComponent } from '../../../../types/component.types'

export const SectionHeader:React.FC<SectionHeaderComponent> = ({ headerData }) => {

  return (
        <div className='section-header-container'>
          <img src={headerData?.imgUrl} alt='section-header' />
          <div className='section-content'>
            <h2>{headerData?.title}</h2>
            <p>{headerData?.subtitle}</p>
          </div>
        </div>
  )
}
