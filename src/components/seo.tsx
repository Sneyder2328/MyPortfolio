import * as React from "react"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import { FormattedMessage } from "react-intl"

export const SEO = ({ lang }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        description, siteUrl, 
        author {
          name, twitter
        }
      }
    }
  }
  `)
  const { siteUrl, author, description } = data.site.siteMetadata

  return (
    <FormattedMessage id="title">
      {(title) => (
        <Helmet
          htmlAttributes={{ lang }}
          defaultTitle={title} titleTemplate={`%s | ${title}`}
          meta={[
            {
              name: `author`,
              content: author.name,
            },
            {
              name: `description`,
              content: description,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:image`,
              content: `${siteUrl}${withPrefix('/meta.jpg')}`,
            },
            {
              property: `og:url`,
              content: `${siteUrl}}`,
            },
            {
              property: `og:description`,
              content: description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: ``,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: description,
            },
            {
              name: `twitter:author`,
              content: `@${author.twitter}`,
            },
            {
              name: `twitter:site`,
              content: `@${author.twitter}`,
            },
            {
              name: `twitter:image`,
              content: `${siteUrl}${withPrefix('/meta.jpg')}`,
            },
          ]}
        />
      )}
    </FormattedMessage>
  )
}