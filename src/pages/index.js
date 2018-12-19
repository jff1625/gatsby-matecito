import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import gerardo from '../assets/images/gerardo01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Latin Music for your event</h2>
                </header>
                <p>
                  Matecito Latin Band plays the best of Latin rhythms also
                  Mariachi locally and internationally, we will make your event
                  unforgettable.
                </p>
              </div>
              <span className="image">
                <img src={gerardo} alt="" />
              </span>
            </div>
          </section>

          <section id="news" className="main special">
            <header className="major">
              <h2>News</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code" />
                <h3>Ipsum consequat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy" />
                <h3>Amed sed feugiat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond" />
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="about" className="main special">
            <header className="major">
              <h2>About</h2>
              <p>
                The Matecito Latin Band was formed by Gerardo Torres after he
                returned to NZ from Peru in 2000. Before emigrating to NZ,
                Gerardo was a professional singer and entertainer in his
                homeland of Peru, working for more than 20 years with some of
                the best international Latin and Salsa bands. During his career
                as an entertainer, Gerardo has performed in front of many of
                Peru's diplomats and Presidents of his country.
              </p>
              <p>
                After emigrating to NZ, Gerardo was introduced to local musician
                Brian Hodges, who was the leader of the Garden City Big Band at
                that time. Gerardo and Brian went on to form "Mambo Jambo",
                which was NZ's largest Latin Band at that time consisting of 14
                members.
              </p>
              <p>
                Gerardo realised that a smaller band would be a more affordable
                choice for regular gigs, so he also formed a 5 piece Latin Band
                which is made up of 5 members of the larger band. This smaller
                band is known as the 'Matecito Latin Band'. Both bands play a
                variety of Latin music including Salsa, Merengue, Cumbia, Cha
                cha cha and Latin Rock.
              </p>
              <p>
                The 14 piece band has a unique live brass section, whereas the
                smaller band uses backing tracks for the brass. Gerardo also
                created a Latin trio known as the Candela Troupe, with three
                dancers/singers.
              </p>
              <p>
                Ideal For: wedding dance, private party, corporate dance
                function, ball.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <p>Contact us now for all enquiries</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="mailto:&#103;&#116;&#111;&#114;&#114;&#101;&#115;&#95;&#112;&#101;&#114;&#117;&#64;&#121;&#97;&#104;&#111;&#111;&#46;&#101;&#115;%3Fsubject%3DContact%20Request%26body%3DYour%20Name%3A%0A%0APhone%20Number%3A%0A%0AYour%20Question%3A">
                    Email Us
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
