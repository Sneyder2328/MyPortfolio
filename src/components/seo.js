import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export const SEO = ({ description, lang, meta, title }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title, description
      }
    }
  }
  `)

  const metaDescription = description || data.site.siteMetadata.description
  const defaultTitle = title || data.site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
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
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}