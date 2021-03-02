import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <SEO title="Blog" />
        <div className="cards-container">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="cards" >
                <div className="card">
                  <Link className="post-title" to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  <p>{post.frontmatter.date}</p>
                  <div className="thumbnail" >
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                  </div>
                  <p className="excerpt">{post.excerpt}</p>
                  <Link className="button" to={post.frontmatter.path}>Keep Reading →</Link>
              </div>
            </div>
          ))}
          </div>
      </Layout>
    )
  }
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                excerpt(pruneLength: 60)
                id
                frontmatter {
                  path
                  title
                  date(formatString: "MMMM DD, YYYY")
                  image {
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
    `}
    render={(data, count) => <Blog data={data} count={count} />}
  />
)