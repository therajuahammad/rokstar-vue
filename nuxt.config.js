export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Rokstar - Vue Portfolio Template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    '~/main.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome'
  ],
  modules: [],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: [300, 400, 500, 600, 700],
        ital: [400]
      },
      'Russo+One': true
    }
  },
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true
    }
  }
}
