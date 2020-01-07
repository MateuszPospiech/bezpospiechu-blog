import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'
import { graphql } from 'gatsby'

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
                  <button className="btn btn-outline-success text-uppercase">
                     Subskrybuj
                  </button>
               </Form>
            </CardBody>
         </Card>
         <Card>
            <CardBody>
               <CardTitle className="text-uppercase text-center">
                  Sprawdź nasz sklep!
               </CardTitle>
               <img
                  src="https://via.placeholder.com/320x200"
                  alt="Reklama"
                  style={{ width: `100%` }}
               />
            </CardBody>
         </Card>
         <Card>
            <CardBody>
               <CardTitle className="text-center text-uppercase mb-3">
                  Ostatnie posty
               </CardTitle>

            </CardBody>
         </Card>
      </div>
   )
}

const sitebarQuery = graphql`
   query sitebarQuery {
      allmarkdownRemark(
         sort: { fields: [frontmatter___date], order: DESC}
         limit: 3
      ) {
         edges{
            node{
               id
               frontmatter{
                  title
                  path
                  images{
                     childImagesSharp{
                        fluid(maxWidth: 300){
                           ...GatsbyImageSharpFluid
                        }
                     }
                  }
               }
            }
         }
      }
   }
`

export default Sitebar