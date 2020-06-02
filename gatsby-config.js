require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `矽谷輕鬆談 Just Kidding Tech`,
    siteTitleAlt: `矽谷輕鬆談 Just Kidding Tech`,
    siteHeadline: `矽谷輕鬆談 Just Kidding Tech`,
    siteUrl: `https://jktech.io`,
    siteDescription: `矽谷輕鬆談 Just Kidding Tech`,
    siteLanguage: `zh-TW`,
    siteImage: `/blog_hero.jpg`,
    author: `@kenjichao`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: "MMM DD, Y",
        mdx: false,
        blogPath: "/posts",
        navigation: [
          {
            title: `文章列表`,
            slug: `/posts`,
          },
          {
            title: `標籤`,
            slug: `/tags`,
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
          {
            name: `Podcast`,
            url: `https://anchor.fm/jktech`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-47125018-4",
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
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              showCaptions: true,
              markdownCaptions: false,
              quality: 90,
              backgroundColor: "none",
              disableBgImage: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/img`,
        path: `content/img`,
      },
    },
  ],
}
