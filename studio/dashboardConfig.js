export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61ef044b87f59f70a5ccd429',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cke6rx2p',
                  apiId: 'e4a1d4ff-fc78-4ec1-b0d9-46e7ba7a8f35'
                },
                {
                  buildHookId: '61ef044b6363bb7d6e5acb6c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3epmviwj',
                  apiId: 'a4844d0d-877a-470a-9f86-01a835a552eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/braedenf/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3epmviwj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
