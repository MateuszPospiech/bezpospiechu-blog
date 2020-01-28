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
          <p>W paru zdaniach o mnie. Z zawodu jestem programistą - frontend developerem. Na co dzień zajmuję się tworzeniem stron i sklepów internetowych. Po prac w wolnych chwilach lubię tworzyć własne projekty ucząc się przy tym nowych(przynajmniej dla mnie) technologii. Poza programowaniem moimi głównymi zajawkami są podróże, ekonomia, sport i gry komputerowe. Uwielbiam poznawac nowe miejsca i spędzać godziny na pieszych wycieczkach gubiąc się wśród mniej uczęszczanych uliczek miast, które odwiedzam. Z racji tego, że lubie też liczby, to na blogu prócz krótkiego opisu i zdjęć z wypadu, chciałbym się dzielić kosztami oraz oceną poszczególnych miejsc czy atrakcji. Dla mnie ma to być swojego rodzaju pamiętnik oraz mapa zwiedzonych miejsc zarówno tych małych wycieczek jak i dużych. Prócz samych podróży może od czasu do czasu będą wpadać wpisy związane bardziej z szeroko rozumianą ekonomią. Nigdy wcześniej nie prowadziłem bloga, a pisarz ze mnie marny. Stworzny głównie by zorbic sobie wycieczkowy pamiętnik z kosztorysem oraz nauczyć sie technologii GatsbyJS i GraphQL #dwiePieczenieNaJednymOgniu </p>
          <p>Zapraszam do krótkiej lektury oraz na przeglad zdjęć</p>
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