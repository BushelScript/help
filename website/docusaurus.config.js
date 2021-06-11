module.exports={
  "title": "BushelScript Help",
  "tagline": "Guides, reference material, and other docs for BushelScript",
  "url": "https://bushelscript.github.io",
  "baseUrl": "/help/",
  "organizationName": "BushelScript",
  "projectName": "help",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "docs",
          "sidebarPath": "./sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.scss"
        }
      }
    ]
  ],
  "plugins": ["docusaurus-plugin-sass"],
  "themeConfig": {
    "navbar": {
      "title": "BushelScript Help",
      "style": "primary",
      "hideOnScroll": true,
      "logo": {
        "src": "img/favicon.ico"
      },
      "items": [
        {
          "to": "docs/tutorial",
          "label": "Quick Tutorial",
          "position": "left"
        },
        {
          "to": "docs/ref",
          "label": "Reference",
          "position": "left"
        },
        {
          "to": "docs/integration",
          "label": "Integration",
          "position": "left"
        },
        {
          "to": "docs/internal",
          "label": "Internals",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [
        {
          "title": "Links",
          "items": [
            {
              "label": "Main Site",
              "href": "https://bushelscript.github.io"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/BushelScript/BushelScript"
            }
          ]
        },
        {
          "title": "More Help",
          "items": [
            {
              "label": "GitHub Discussions",
              "href": "https://github.com/BushelScript/BushelScript/discussions"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/xdyCK9t"
            }
          ]
        }
      ],
      "logo": {
      }
    },
    "colorMode": {
      defaultMode: "light",
      "disableSwitch": true // Dark mode is broken for some reason. I'd like to have it sometime.
    }
  }
}
