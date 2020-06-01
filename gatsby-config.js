require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `矽谷輕鬆談 Just Kidding Tech`,
    siteTitleAlt: `矽谷輕鬆談 Just Kidding Tech`,
    siteHeadline: `矽谷輕鬆談 Just Kidding Tech`,
    siteDescription: `矽谷輕鬆談 Just Kidding Tech`,
    siteImage: `/banner.jpg`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: "MMM DD, Y",
        navigation: [
          {
            title: `文章列表`,
            slug: `/blog`,
          },
          {
            title: `標籤`,
            slug: `/tags`,
          },
          {
            title: `Podcast`,
            slug: `/podcast`,
          },
          {
            title: `關於我們`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Facebook`,
            url: `https://www.facebook.com/jktech.io/`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/jktech.io/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
  ],
}
