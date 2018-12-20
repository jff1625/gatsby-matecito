module.exports = {
  siteMetadata: {
    title: 'Matecito Latin Band',
    author: 'Jeff Boyes',
    description:
      'Matecito Latin Band plays the best of Latin rhythms also Mariachi Locally and internationally, we will make your event unforgettable.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
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
        key:
          'EAABle6h9zocBAI1uSl2N6Gsp35nKC6NSld38pKFMGZBXmFVJKrq38pQGfbLTeax8XkvoM6XoZA3ct1tGmjpjCtZBIiZA1Nsj5JXgDYGvqZAxUgGKdtA1kqHfWIgzFHVSdhVjrVeZAvcM6fwU2iolmxo3x77TocJymhsNrZA14Rt6t7a8yhGqTF4oGPZCP4SDZB4gZD',
        places: ['298595417204010'],
        params: {
          fields:
            'about,phone,events{name,description,id,is_page_owned,cover,end_time,start_time,parent_group,place,owner,picture,photos.limit(10),videos.limit(10),updated_time},posts{message,description,event,full_picture,picture,id,name,updated_time}',
        },
      },
    },
  ],
}
