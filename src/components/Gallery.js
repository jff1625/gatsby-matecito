import React from 'react'
import ImageGallery from 'react-image-gallery'
import { StaticQuery, graphql } from 'gatsby'

//low rent state value, so we can stop video playing when it slides out of view
const videoRefs = []

export default () => (
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
        videos: allFacebookVideos {
          edges {
            node {
              id
              title
              description
              updated_time
              source
              picture
            }
          }
        }
      }
    `}
    render={data => {
      console.log('gallery')
      const galleryItems = []

      data.videos.edges.forEach(video => {
        const videoElement = (
          <video
            controls
            src={video.node.source}
            poster={video.node.picture}
            width="100%"
            ref={React.createRef()}
          >
            Sorry, your browser doesn't support this video
          </video>
        )
        videoRefs.push(videoElement.ref)
        galleryItems.push({
          thumbnail: video.node.picture,
          renderItem: () => (
            <div className="image-gallery-image">{videoElement}</div>
          ),
        })
      })

      data.albums.edges.forEach(album => {
        album.node.photos.data.forEach(item => {
          galleryItems.push({
            thumbnail: item.images[item.images.length - 1].source,
            original: item.images[0].source,
          })
        })
      })

      return (
        <ImageGallery
          items={galleryItems}
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          onSlide={_onSlide}
        />
      )
    }}
  />
)

const _onSlide = () => {
  //stop all the videos
  videoRefs.forEach(ref => ref.current && ref.current.pause())
}
