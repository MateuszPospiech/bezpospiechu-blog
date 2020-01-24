import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'

const IndexPage = () => {
  return (
  <Layout pageTitle="Blog BezPospiechu">
    <SEO title="Home" keywords={['gatsby', 'blog podróżniczy']} />
      <StaticQuery query={indexQuery} render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)}

const indexQuery = graphql`
  query{
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges{
        node{
          id
          frontmatter{
            author
            date(formatString: "DD-MM-YYYY")
            title
            tags
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
               slug
            }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
