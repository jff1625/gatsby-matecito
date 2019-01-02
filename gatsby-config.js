require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Matecito Latin Band',
    author: 'Jeff Boyes',
    description:
      'Matecito Latin Band plays the best of Latin rhythms also Mariachi Locally and internationally, we will make your event unforgettable.',
    canonicalUrl: 'https://www.matecito.co.nz',
    fbAppID: process.env.FB_APP_ID,
    fbPageID: process.env.FB_PAGE_ID,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Matecito Latin Band',
        short_name: 'Matecito',
        start_url: '/',
        background_color: '#FCBB15',
        theme_color: '#FCBB15',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-facebook`,
      options: {
        key: process.env.FB_KEY,
        places: [process.env.FB_PAGE_ID],
        params: {
          fields:
            'about,phone,name,feed{id,name,event,created_time,message,story,caption,full_picture,description,link,is_hidden,picture,place,status_type,from,type},events{id,name,start_time,place},albums{count,photos{images,id}},videos{description,id,updated_time,title,picture,source}',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/assets/video`,
      },
    },
  ],
}
