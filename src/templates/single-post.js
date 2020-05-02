import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Badge, Card, CardBody, CardTitle } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import { DiscussionEmbed } from 'disqus-react'

const SinglePost = ({ data, pageContext }) => {
   const post = data.markdownRemark.frontmatter

   const baseUrl = 'http://bezpospiechu.com/'
   const disqusShortname = 'bezpospiechu-com'
   const disqusConfig = { 
      identifier: data.markdownRemark.id,
      title: post.title,
      url: baseUrl + pageContext.slug
   }
   let firstImg = post.galeryImages.slice(0, 1);
   let lastImg = post.galeryImages.slice(post.galeryImages.length -1);

   return (
      <Layout pageTitle={post.title}>
         <SEO title={post.title} />
         <Card>
            <Img classname="card-image-top" fluid={post.image.childImageSharp.fluid} alt="BezPospiechu" title="BezPospiechu" />
            <CardBody>
               <CardTitle>
                  <time className="text-info">{post.date}</time> autor{` `}
                  <span className="text-info">{post.author}</span>
               </CardTitle>
               <CardTitle>
                  <h2 className="h4">{post.subtitle}</h2>
               </CardTitle>
               <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

               {/* Temp Galerry */}
               <div className="masonry_grid">
                  {/* {lastImg.map(galeryImage => (
                     <div className="masonry_grid--item">
                        <Img fluid={galeryImage.childImageSharp.fluid} alt="BezPospiechu galeria" title="Bez Pospiechu galeria"/>
                     </div>
                  ))} */}
                  {post.galeryImages.map(galeryImage => (
                     <div className="masonry_grid--item">
                        <Img fluid={galeryImage.childImageSharp.fluid} alt="BezPospiechu galeria" title="Bez Pospiechu galeria"/>
                     </div>
                  ))}
                  {/* {firstImg.map(galeryImage => (
                     <div className="masonry_grid--item">
                        <Img fluid={galeryImage.childImageSharp.fluid} alt="BezPospiechu galeria" title="Bez Pospiechu galeria"/>
                     </div>
                  ))} */}
               </div>
               {/* End Temp Galerry */}

               <ul className="post-tags">
                  {post.tags.map(tag => (
                     <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`} title={`BezPospiechu tag: ${slugify(tag)}`}>
                           <Badge color="primary">{tag}</Badge>
                        </Link>
                     </li>
                  ))}
               </ul>
               {/* Share section */}
               <h3 className="text-center">
                  Podziel się na
               </h3>
               <div className="text-center social-share-links">
                  <ul>
                     <li>
                        <a href={'http://facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug} className="facebook" target="_blank" title="BezPospiechu udostępnij na facebook" rel="noopener noreferrer">
                           <i className="fab fa-facebook-f fa-2x"/>
                        </a>
                     </li>
                     <li>
                        <a href={'http://twitter.com/sharer/share?url=' + baseUrl + pageContext.slug + '&text=' + post.title + '&viatwitterHandle'} className="twitter" target="_blank" title="BezPospiechu udostępnij na twitter" rel="noopener noreferrer">
                           <i className="fab fa-twitter fa-2x"/>
                        </a>
                     </li>
                     <li>
                        <a href={'http://plus.google.com/sharer/share?url=' + baseUrl + pageContext.slug} className="google" target="_blank" title="BezPospiechu udostępnij na google+" rel="noopener noreferrer">
                           <i className="fab fa-google fa-2x"/>
                        </a>
                     </li>
                     <li>
                        <a href={'http://linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug} className="linkedin" target="_blank" title="BezPospiechu udostępnij na linkedIn" rel="noopener noreferrer">
                           <i className="fab fa-linkedin fa-2x"/>
                        </a>
                     </li>
                  </ul>
               </div>
            </CardBody>
         </Card>
         <Card>
            <CardBody>
               <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </CardBody>
         </Card>
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
            subtitle
            author
            date(formatString: "DD-MM-YYYY")
            tags
            galeryImages {
               childImageSharp {
                  fluid(maxWidth: 900) {
                     ...GatsbyImageSharpFluid
                  }
               }
            }
            image {
               childImageSharp {
                  fluid(maxWidth: 900) {
                     ...GatsbyImageSharpFluid
                  }
               }
            }
         }
      }
   }
`

export default SinglePost