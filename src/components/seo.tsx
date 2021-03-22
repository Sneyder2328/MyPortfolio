import * as React from "react"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import { FormattedMessage } from "react-intl"

export const SEO = ({ lang, title, ...props }) => {
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
  console.log("props in seo=", props);
  const url = props.location.pathname;
  const metaDescription = data.site.siteMetadata.description
  const { siteUrl, author } = data.site.siteMetadata

  return (
    <FormattedMessage id="title">
      {(txt) => (
        <Helmet
          htmlAttributes={{ lang }}
          defaultTitle={txt} titleTemplate={`%s | ${txt}`}
          meta={[
            {
              name: `author`,
              content: author.name,
            },
            {
              name: `description`,
              content: metaDescription,
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
              content: `${siteUrl}${withPrefix(url)}`,
            },
            {
              property: `og:description`,
              content: metaDescription,
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
              content: metaDescription,
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

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }