import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Contact details</h2>
      <dl className="alt">
        <dt>Phone</dt>
        <dd>(021) 1043691</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:&#103;&#116;&#111;&#114;&#114;&#101;&#115;&#95;&#112;&#101;&#114;&#117;&#64;&#121;&#97;&#104;&#111;&#111;&#46;&#101;&#115;?subject=Contact%20Request&body=Your%20Name%3A%0A%0APhone%20Number%3A%0A%0AYour%20Question%3A">
            <span className="backwards">
              se.oohay@<span className="hide">foo</span>urep_serrotg
            </span>
          </a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/Matecito-Latin-Band-298595417204010/"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jff1625/gatsby-matecito"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Matecito Latin Band. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
