import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, keywords, ogImage }) => {
  return (
    <Helmet>
      <html lang="en" />
      <meta charset="utf-8" />
      <title>{`${title}`}</title>
      <meta name="generator" content="Agility CMS" />
      <meta name="agility_timestamp" content={new Date().toLocaleString()} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  )
}

export default SEO
