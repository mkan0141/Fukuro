export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:type', property: 'og:type', content: 'Website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Fukuro'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://fukuro.mkan0141.dev'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Fukuroはブラウザ上で画面を録画できるWebアプリです。'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://fukuro.mkan0141.dev/ogp/fukuro_logo.png'
        },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Fukuro' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/style.css'},
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-sweetalert2/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
