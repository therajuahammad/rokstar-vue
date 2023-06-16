require('dotenv').config();
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
  plugins: [
    { src: '~/plugins/vue-toast.js', mode: 'client' }
  ],
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
  env: {
    PUBLIC_SERVICE_ID: process.env.PUBLIC_SERVICE_ID,
    PUBLIC_TEMPLATE_ID: process.env.PUBLIC_TEMPLATE_ID,
    PUBLIC_PUBLIC_KEY: process.env.PUBLIC_PUBLIC_KEY,
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: [300, 400, 500, 600, 700],
        ital: [400]
      },
      'Russo+One': {
        wght: [400]
      }
    }
  },
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: ['faSpinner', 'faHeart', 'faAngleUp'],
      brands: ['faFacebook', 'faLinkedin', 'faGithub', 'faTwitter'],
      regular: ['faCirclePlay', 'faArrowAltCircleRight']
    }
  }
}
