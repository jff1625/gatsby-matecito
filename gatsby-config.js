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
          'EAAfDUV56O0YBAKHCg7tlZCZCN5QA62Ls9DvsoZChlWr6rFriWZBxOZCkBKgphpODBt4VVeqW1ZCi0HQdirUV9ot3RgS4zpUW4ARcZCuQN9G7lKZBLefZCj8c8RXJhMAvbonAyFwHQKqKDxh1RsbeZBwp1UYZBhQgMENQD1esoAb6tP50glvJNa0AmHfuqiarT4UIjZBapPw0ZAktczwZDZD', //'2185079081810758|283e027b4c931c574adf28b5119c3bb4', //'EAABle6h9zocBAI1uSl2N6Gsp35nKC6NSld38pKFMGZBXmFVJKrq38pQGfbLTeax8XkvoM6XoZA3ct1tGmjpjCtZBIiZA1Nsj5JXgDYGvqZAxUgGKdtA1kqHfWIgzFHVSdhVjrVeZAvcM6fwU2iolmxo3x77TocJymhsNrZA14Rt6t7a8yhGqTF4oGPZCP4SDZB4gZD',
        places: ['298595417204010'], //['2185079081810758'], //['298595417204010'],
        params: {
          fields:
            'feed{id,name,event,created_time,message,story,caption,full_picture,description,link,is_hidden,picture,place,status,type,limit=10},about,phone',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `src`, path: `${__dirname}/src/` },
    },
  ],
}
