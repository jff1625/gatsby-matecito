import React from 'react'

import hero from '../assets/images/matecito-hero.jpg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={hero} alt="" />
    </span>
  </header>
)

export default Header
