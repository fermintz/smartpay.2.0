const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  ssr:false,
  css:[
    "~/assets/styles/global.scss"
  ],
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  app:{
    head:{
      title:'스마트페이2.0',
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Icons'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Icons+Outlined'}
      ],

    },
  }
})
