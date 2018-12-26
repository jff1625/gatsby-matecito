import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Post from '../components/Post'

import gerardo from '../assets/images/gerardo01.jpg'

import { graphql } from 'gatsby'

export const query = graphql`
  {
    site: site {
      siteMetadata {
        title
        description
      }
    }
    feed: allFacebookFeed(limit: 10) {
      edges {
        node {
          id
          name
          message
          #story
          description
          picture
          full_picture
          created_time
        }
      }
    }
  }
`

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      numPostsToShow: 3,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  showMore(orLess = true) {
    const newVal = orLess ? this.state.numPostsToShow + 3 : 3
    this.setState(state => ({
      numPostsToShow: newVal,
    }))
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    // merge the posts and events and sort them by date
    const posts = this.props.data.feed.edges.slice(0, this.state.numPostsToShow)
    const showMoreOrLess = this.state.numPostsToShow < 9

    return (
      <Layout>
        <Helmet title={siteTitle} />

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
                <p>{siteDescription}</p>
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
              {posts.map(post => {
                return (
                  <li key={post.node.id}>
                    <Post props={post.node} />
                  </li>
                )
              })}
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <button
                    onClick={this.showMore.bind(this, showMoreOrLess)}
                    className="button"
                  >
                    Show {showMoreOrLess ? 'More' : 'Less'}
                  </button>
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
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <p>Contact us now for all enquiries</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="mailto:&#103;&#116;&#111;&#114;&#114;&#101;&#115;&#95;&#112;&#101;&#114;&#117;&#64;&#121;&#97;&#104;&#111;&#111;&#46;&#101;&#115;\">
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
