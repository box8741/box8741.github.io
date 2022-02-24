---
date: '2022-02-16'
title: 'Gatsby 블로그 RSS Feed 적용하기'
categories: ['Gatsby', 'RSS']
summary: 'RSS피드란? RSS(Rich Site Summary)는 뉴스나 블로그 사이트에서 주로 사용하는 콘텐츠 표현 방식이다. 웹 사이트의 콘텐츠를 XML 파일로 작성해 블로그, 뉴스 등 RSS 피드를 통해 구독할 수 있게 되는데 이로 인해 새로운 콘텐츠가 나오면 새로운 소식 알림이 뜨게 되어 지속적으로 노출시킬 수 있다.'
thumbnail: './gatsby-rss.png'
---

# RSS피드란?

RSS(**Rich Site Summary**)는 뉴스나 블로그 사이트에서 주로 사용하는 **콘텐츠 표현 방식**이다.

웹 사이트의 콘텐츠를 XML 파일로 작성해 블로그, 뉴스 등 RSS 피드를 통해 구독할 수 있게 되는데 이로 인해 새로운 콘텐츠가 나오면 새로운 소식 알림이 뜨게 되어 **지속적으로 노출**시킬 수 있다.

RSS가 나오기 전에는 원하는 정보를 얻기 위해 직접 사이트에 들어가야 했지만 RSS 관련 프로그램을 이용하면 자동으로 수집이 가능해졌기 때문에 **사용자는 각각의 사이트 방문 없이 최신 정보들만 한자리에서 볼 수 있다.**

# Gatsby RSS 라이브러리 세팅방법

RSS 피드를 생성하기 위해 `gatsby-plugin-feed` 라이브러리를 사용하면 쉽게 생성이 가능합니다.

```
npm install gatsby-plugin-feed
```

또는

```
yarn add gatsby-plugin-feed
```

### 플러그인 등록하기

해당 라이브러리를 설치한 후 `gatsby-config.js`에 플러그인을 등록해 줍니다.

```js
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
  },
  plugins: [
     ...,
    `gatsby-plugin-feed`
  ],
}
```

### Markdown 파일에 적용시키기

다음은 Markdown 파일에 적용시키기 위해 `gatsby-node.js`파일에 아래와 같이 작성해 줍니다.

```js
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
```

### 빌드

```
gatsby build
```

위의 모든 작업을 마치고 빌드를 하면 `{my.site.com}/rss.xml` 주소에 RSS가 생긴 것을 알 수 있습니다.

`gatsby-starter-blog` 와 같은 Markdown 콘텐츠가 기본적으로 설정이 되어 있는 경우 여기까지만 해도 잘 작동하겠지만 그렇지 않은 경우 아래와 같은 작업을 해야 합니다.

### RSS피드 플러그인 사용자 정의

`gatsby-config.js` 파일로 가서 블로그에 들어가는 Markdown 데이터에 맞게 `feeds`에 값을 넣어줍니다.

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
  ],
}
```

사이트 주소에 영어가 아닌 다른 링크가 있을 경우 URI를 인코딩하는 편이 좋습니다.

```js
serialize: ({ query: { site, allMarkdownRemark } }) => {
  return allMarkdownRemark.edges.map(edge => {
    return Object.assign({}, edge.node.frontmatter, {
      description: edge.node.excerpt,
      date: edge.node.frontmatter.date,
      url: encodeURI(site.siteMetadata.siteUrl + edge.node.fields.slug),
      guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
      custom_elements: [{ "content:encoded": edge.node.html }],
    })
  })
},
```

---

# 참고 자료

- [RSS wikipedia](https://ko.wikipedia.org/wiki/RSS)
- [Adding an RSS Feed](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-an-rss-feed/)
- [Gatsby 블로그 RSS Feed 생성시키기](https://ha-young.github.io/2020/gatsby/Gatsby-%EB%B8%94%EB%A1%9C%EA%B7%B8-RSS-Feed-%EC%83%9D%EC%84%B1%EC%8B%9C%ED%82%A4%EA%B8%B0/)
