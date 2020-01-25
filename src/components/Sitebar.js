import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sitebar = () => {
   return(
      <div>
         <Card>
            <CardBody>
               <CardTitle className="text-uppercase text-center md-3">
                  Newsletter
               </CardTitle>
               <Form className="text-center">
                  <FormGroup>
                     <Input
                        type="email"
                        name="email"
                        placeholder="Twój email"
                     />
                  </FormGroup>
                  <button className="btn btn-outline-warning text-uppercase">
                     Subskrybuj
                  </button>
               </Form>
            </CardBody>
         </Card>
         <Card>
            <CardBody>
               <CardTitle className="text-uppercase text-center">
                  Sprawdź nasz sklep!!
               </CardTitle>
               <StaticQuery query={sitebarQuery} render={data => {
                     return (
                        <Card>
                           <CardBody>
                              <a href="http://justgeek.pl" target="_blank" rel="noopener noreferrer">
                                 <Img fluid={data.file.childImageSharp.fluid } />
                              </a>
                           </CardBody>
                        </Card>
                     )
                  }}
               />
            </CardBody>
         </Card>
         <Card>
            <CardBody>
               <CardTitle className="text-center text-uppercase mb-3">
                  Ostatnie posty
               </CardTitle>
               <StaticQuery query={sitebarQuery} render={data => (
                  <div>
                     {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Card key={node.id}>
                           <Link to={node.fields.slug}>
                              <Img 
                                 className="card-image-top" 
                                 fluid={node.frontmatter.image.childImageSharp.fluid}
                              />
                           </Link>
                           <CardBody>
                              <CardTitle>
                                 <Link to={node.fields.slug}>
                                    {node.frontmatter.title}
                                 </Link>
                              </CardTitle>
                           </CardBody>
                        </Card>
                     ))}
                  </div>
                  )}
               />
            </CardBody>
         </Card>
      </div>
   )
}

const sitebarQuery = graphql`
   query sitebarQuery {
      file(relativePath: {eq: "justgeek.png"}) {
         childImageSharp {
            fluid(maxWidth: 300) {
               ...GatsbyImageSharpFluid
            }
         }
      }
      allMarkdownRemark(
         sort: { fields: [frontmatter___date], order: DESC}
         limit: 3
      ) {
         edges{
            node{
               id
               frontmatter{
                  title
                  image{
                     childImageSharp{
                        fluid(maxWidth: 300){
                           ...GatsbyImageSharpFluid
                        }
                     }
                  }
               }
               fields {
                  slug
               }
            }
         }
      }
   }
`



export default Sitebar