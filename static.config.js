import React from 'react';

const ga_tracking =
  "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-131654117-1', { 'anonymize_ip': true });";

export default {
  siteRoot: 'https://www.labrysinthe.com/',
  /**
   *  Enable bundleAnalyzer to check the pkg size footprint
   *  of a production/staging build
   */
  // bundleAnalyzer: true,

  plugins: ['react-static-plugin-styled-components'],
  getSiteData: () => ({
    title: 'Labrysinthe'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home'
    },
    {
      path: '/shows',
      component: 'src/containers/Shows'
    },
    {
      path: '/music',
      component: 'src/containers/Music'
    },
    {
      path: '/bio',
      component: 'src/containers/Bio'
    },
    {
      path: '/newsletter',
      component: 'src/containers/Newsletter'
    },
    {
      path: '/contact',
      component: 'src/containers/Contact'
    },
    {
      is404: true,
      component: 'src/containers/404'
    }
  ],
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131654117-1" />
        <script dangerouslySetInnerHTML={{ __html: ga_tracking }} />

        <title>Labrysinthe</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        {/* Facebook + Twitter thumbnails */}
        <meta property="og:title" content="Labrysinthe" />
        <meta property="og:description" content="Fire Loves Sugar &mdash; New EP out now!" />
        <meta property="og:image" content="https://www.labrysinthe.com/website-thumbnail.png" />
        <meta property="og:url" content="https://www.labrysinthe.com/" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicons */}

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#08000F" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#fbf4ff" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
