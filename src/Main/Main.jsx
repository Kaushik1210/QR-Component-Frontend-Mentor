import React from 'react'


import images from '../content/images'
import './main.css'

const Main = () => {
  return (
    <div className='container'>
        <img src={images.imageqrcode}/>

        <h4>Improve your front-end skills by building projects</h4>

        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default Main
