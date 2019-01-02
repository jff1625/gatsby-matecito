import React from 'react'
import ImageGallery from 'react-image-gallery'
import { StaticQuery, graphql } from 'gatsby'
import poster from '../assets/images/matecito-poster.jpg'

class Gallery extends React.Component {
  constructor({ data }) {
    super(...arguments)
    this.state = {
      showVideo: {},
    }

    //array to keep the refs to the static videos so we can stop them upon 'slide'
    this.videoRefs = []

    //build gallery items list
    this.galleryItems = [
      ...this.getFbVideos(data),
      ...this.getStaticVideos(data),
      ...this.getImages(data),
    ]
  }

  render() {
    return (
      <ImageGallery
        items={this.galleryItems}
        showBullets={false}
        showFullscreenButton={false}
        showPlayButton={false}
        onSlide={this._onSlide.bind(this)}
      />
    )
  }

  _toggleShowVideo(id) {
    this.state.showVideo[id] = !Boolean(this.state.showVideo[id])
    this.setState({
      showVideo: this.state.showVideo,
    })
  }

  getFbVideos(data) {
    const list = []
    data.fbVideos.edges.forEach(video => {
      const videoID = JSON.parse(video.node.internal.content).id
      list.push({
        thumbnail: video.node.picture,
        original: video.node.picture,
        embedURL: `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F${
          data.site.siteMetadata.fbPageID
        }%2Fvideos%2F${videoID}%2F&show_text=false&appId=${
          data.site.siteMetadata.fbAppID
        }`,
        description: video.node.description,
        renderItem: this._renderVideo.bind(this),
      })
    })
    return list
  }

  getStaticVideos(data) {
    const list = []
    data.staticVideos.edges.forEach(video => {
      const title = video.node.name
      const ref = React.createRef()
      list.push({
        thumbnail: poster,
        description: 'blerg',
        renderItem: () => (
          <div className="image-gallery-image">
            <video
              controls
              src={video.node.publicURL}
              poster={poster}
              width="100%"
              ref={ref}
            >
              Sorry, your browser doesn't support this video
            </video>
            <span
              className="image-gallery-description"
              style={{ right: '0', left: 'initial' }}
            >
              {title}
            </span>
          </div>
        ),
      })
      this.videoRefs.push(ref)
    })
    return list
  }

  getImages(data) {
    const list = []
    data.albums.edges.forEach(album => {
      album.node.photos.data.forEach(item => {
        list.push({
          thumbnail: item.images[item.images.length - 1].source,
          original: item.images[0].source,
        })
      })
    })
    return list
  }

  _onSlide() {
    // stop all the local/static videos
    this.videoRefs.forEach(ref => ref.current && ref.current.pause())
    // stop all the fb videos
    this._toggleShowVideo()
  }

  _renderVideo(item) {
    return (
      <div className="image-gallery-image">
        <div className="video-wrapper">
          {this.state.showVideo[item.videoID] ? (
            <iframe
              src={item.embedURL}
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              allowFullScreen={true}
            />
          ) : (
            <a onClick={this._toggleShowVideo.bind(this, item.videoID)}>
              <div className="play-button" />
              <img src={item.thumbnail} />
              {item.description && (
                <span
                  className="image-gallery-description"
                  style={{ right: '0', left: 'initial' }}
                >
                  {item.description}
                </span>
              )}
            </a>
          )}
        </div>
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query GalleryQuery {
        albums: allFacebookAlbums {
          totalCount
          edges {
            node {
              id
              photos {
                data {
                  id
                  images {
                    source
                    width
                    height
                  }
                }
              }
            }
          }
        }
        fbVideos: allFacebookVideos {
          edges {
            node {
              id
              title
              description
              updated_time
              source
              picture
              internal {
                content
              }
            }
          }
        }
        staticVideos: allFile(filter: { sourceInstanceName: { eq: "video" } }) {
          edges {
            node {
              id
              extension
              dir
              name
              publicURL
              absolutePath
            }
          }
        }
        site: site {
          siteMetadata {
            title
            description
            canonicalUrl
            fbAppID
            fbPageID
          }
        }
      }
    `}
    render={data => <Gallery data={data} />}
  />
)
