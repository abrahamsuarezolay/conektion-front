import React from 'react'
import "./AboutUsLayout.scss"
import { AboutUsHeader } from '../components/AboutUsHeader/AboutUsHeader'
import AboutUsBody from '../components/AboutUsBody/AboutUsBody'

function AboutUsLayout() {
  return (
    <div className='about-us-container'>
      <AboutUsHeader />
      <AboutUsBody />
    </div>
  )
}

export default AboutUsLayout