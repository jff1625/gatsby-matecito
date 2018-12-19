import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['header', 'news', 'about', 'contact']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="header">
          <a href="#">Home</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="news">
          <a href="#">News</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="about">
          <a href="#">About</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="contact">
          <a href="#">Contact</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
