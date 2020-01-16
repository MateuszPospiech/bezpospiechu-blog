import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const SinglePost = ({ data, pageContext }) => {
   const post = data.markdownRemark.frontmatter

   const baseUrl = 'https://mateuszpospiech.pl/'
   return (
      <Layout pageTitle={post.title}>
         <SEO title={post.title}/>
         <Card>
            <Img classname="card-image-top" fluid={post.image.childImageSharp.fluid}/>
            <CardBody>
               <CardSubtitle>
                  <span className="text-info">{post.date}</span> by{` `}
                  <span className="text-info">{post.author}</span>
               </CardSubtitle>
               <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
               <ul className="post-tags">
                  {post.tags.map(tag => (
                     <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                           <Badge color="primary">{tag}</Badge>
                        </Link>
                     </li>
                  ))}
               </ul>
            </CardBody>
         </Card>
         <h3 className="text-center">
            Podziel się na
         </h3>
         <div className="text-center social-share-links">
            <ul>
               <li><a href={'http://facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug} classname="facebook" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-facebook-f fa-2x"></i>
               </a></li>
               <li><a href={'http://twitter.com/sharer/share?url=' + baseUrl + pageContext.slug + '&text=' + post.title + '&via' + 'twitterHandle'} classname="twitter" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-twitter fa-2x"></i>
               </a></li>
               <li><a href={'http://plus.google.com/sharer/share?url=' + baseUrl + pageContext.slug} classname="google" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-google fa-2x"></i>
               </a></li>
               <li><a href={'http://linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug} classname="linkedin" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-linkedin fa-2x"></i>
               </a></li>
            </ul>
         </div>
      </Layout>
   )
}

export const postQuery = graphql`
   query blogPostBySlug($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
         id
         html
         frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            tags
            image {
               childImageSharp {
                  fluid(maxWidth: 700) {
                     ...GatsbyImageSharpFluid
                  }
               }
            }
         }
      }
   }
`

export default SinglePost