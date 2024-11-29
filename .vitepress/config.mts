import { defineConfig } from 'vitepress'
import * as fs from 'fs';


const baseURL =
  process.env.ENVIRONMENT=== 'production'
    ? 'https://docs.getbushel.app'
    : 'http://localhost:3000'
    
const modules = fs.readdirSync("public/swift-docc").filter( (name) => {
  return name.toLocaleLowerCase().startsWith("bushel")
}).map((name) => {
  const lowerCase = name.toLocaleLowerCase()
  return { 
    text: name, 
    link: `${baseURL}/swift-docc/${name}/documentation/${lowerCase}/`, 
    target: "_self"
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bushel API",
  description: "Developer Docs",
  vite : {
    assetsInclude : ["**/*.json"]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'REST API', link: '/rest' },
      { text: 'CLI', link: '/cli' },
      { text: 'Swift DocC', link: `${baseURL}/swift-docc/BushelFoundation/documentation/bushelfoundation`, target: "_self"},
      { text: 'Get Bushel', link: 'https://getbushel.app'}
    ],
    sidebar: [
      { 
        text: "REST API",
        items: [
          { text: 'Introduction', link: '/rest/' },   
          { text: 'Getting Started', link: '/rest/getting-started' },   
          {
            text: 'Endpoints',
            items: [       
              { text: 'Library', link: '/rest/endpoints/libraries' },
              { text: 'Machine', link: '/rest/endpoints/machines' },
              { text: 'Images', link: '/rest/endpoints/images' },
              { text: 'Screenshots', link: '/rest/endpoints/screenshots' },
              { text: 'Snapshots', link: '/rest/endpoints/snapshots' }
            ]
          }
        ]
      },
      { 
        text: "CLI",
        items: [
        { text: 'Introduction', link: '/cli/' },   
        { text: 'Getting Started', link: '/cli/getting-started' },   
        {
          text: 'Subcommands',
          items: [       
            { text: 'Library', link: '/cli/subcommands/libraries' },
            { text: 'Machine', link: '/cli/subcommands/machines' },
            { text: 'Images', link: '/cli/subcommands/images' },
            { text: 'Screenshots', link: '/cli/subcommands/screenshots' },
            { text: 'Snapshots', link: '/cli/subcommands/snapshots' }
          ]
        }
      ]
    },
    { 
        text: "Swift DocC",
        items: [
        { text: 'Introduction', link: '/docc/' },    
        {
          text: 'Modules',
          items: modules
        }
      ]
    }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
