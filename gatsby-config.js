module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Redux saga samples`,
        short_name: `Redux saga samples`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `assets/images/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
