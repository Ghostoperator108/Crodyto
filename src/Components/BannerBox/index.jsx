import React from 'react'
import { Link } from 'react-router-dom'
const BannerBox= () => {
  return (
    <div>
       <div className='box bannerbox'>
       <Link to="./">
            <img src='src\Components\AdsBannerSlider\oleg-ivanov-QhR78CbFPoE-unsplash.jpg' className='w-full' alt='banner-image'></img>
        </Link>
             
        </div>
    </div>
  )
}

export default BannerBox
