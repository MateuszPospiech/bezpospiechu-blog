import React from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="O mnie">
    <SEO title="About" keywords={[`gatsbyjs`, `mateusz pośpiech`, `blog podróżniczy`, `podróże`, `travels`]} />
    <Card>
      <CardBody>
          <CardTitle className="text-uppercase text-center md-3">
            <h2>Cześć, nazwam się <strong>Mateusz Pośpiech</strong></h2>
          </CardTitle>
          <StaticQuery query={aboutQuery} render={data => {
                return (
                  <Card>
                    <CardBody>
                      <Img fluid={data.file.childImageSharp.fluid } />
                    </CardBody>
                  </Card>
                )
            }}
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis lacus nibh, in pretium enim finibus ut. Maecenas eu porta turpis. Vivamus pulvinar dolor sapien, ut lacinia sapien pulvinar vel. Nam luctus in quam vitae viverra. Praesent laoreet nunc ornare leo interdum facilisis. Nullam nulla erat, dapibus et tellus in, consectetur consectetur leo. Donec dignissim semper tortor rhoncus fermentum. Quisque libero felis, pharetra ac viverra vel, luctus vitae leo. Vivamus porttitor rutrum suscipit.</p>
          <p>Quisque dictum pharetra nisi, et laoreet ligula porta a. Sed et rhoncus ipsum, vel tempus odio. Curabitur scelerisque erat placerat tortor lobortis feugiat. Donec ac maximus libero, quis semper quam. Fusce placerat erat viverra, suscipit turpis id, iaculis lacus. Donec fermentum leo quis nulla egestas facilisis condimentum quis sem. Pellentesque auctor sodales erat ac ornare. Donec pharetra tempus lectus, sit amet auctor enim viverra et. Cras ac ligula a lectus ultricies vulputate id nec ante. Nulla finibus urna id felis finibus, non pharetra tortor faucibus. Suspendisse elementum ultrices ex, sed pellentesque orci elementum quis.</p>
      </CardBody>
    </Card>
  </Layout>
)

export default AboutPage


const aboutQuery = graphql`
   query aboutQuery {
      file(relativePath: {eq: "mateusz.jpg"}) {
         childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
               ...GatsbyImageSharpFluid
            }
         }
      }
   }
`