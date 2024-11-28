import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bushel API",
  description: "Developer Docs",
  // rewrites : {
  //   '/Swift/:scheme.docarchive' : `Swift/:scheme.doccarchive/index.html`
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'REST API', link: '/rest' },
      { text: 'CLI', link: '/cli' },
      { text: 'Swift DocC', link: '/swift-docc/BushelFoundation/index.html' },
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
    }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
