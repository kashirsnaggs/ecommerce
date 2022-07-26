import React from 'react';
import Link from 'next/link.js'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
        <div>
          <p className="beats-solo">small text</p>
          <h3>MID TEXT</h3>
          <img src="" alt="headphones" className="hero-banner-image"/>

          <div>
            <Link href="/product/ID">
              <button type='button'>BUTTON</button>
            </Link>
            <div className="desc">
            <h5>DESC</h5>
            <p>desc</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner