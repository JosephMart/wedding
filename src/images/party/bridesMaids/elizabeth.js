import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "party/bridesMaids/elizabeth.jpg" }
      ) {
        childImageSharp {
          fixed(height: 250, width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img
      className="partyImg"
      fixed={data.placeholderImage.childImageSharp.fixed}
      style={{
        borderRadius: "50%",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    />
  )
}

export default Image
