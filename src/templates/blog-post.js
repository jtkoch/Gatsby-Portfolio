import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPost = ({ data }) => {
  console.log("data,", data)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Blog" />
        <div className="blog-post-container">
          <div className="blog-post">
            <Link className="button" to="/Blog">← Back</Link>
            <h2 className="blog-post-title">{frontmatter.title}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="blog-post-image">
              <Img fluid={frontmatter.image.childImageSharp.fluid} />
            </div>
          </div>
          <Link className="button" to="/Blog">
            ← Back
          </Link>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default BlogPost

export const BlogQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`