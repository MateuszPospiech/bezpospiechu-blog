import React from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="O mnie">
    <SEO title="O mnie"/>
    <Card>
      <CardBody>
          <CardTitle className="text-uppercase text-center md-3">
            <h2 className="h3">Cześć, nazywam się <br></br><strong>Mateusz Pośpiech</strong></h2>
          </CardTitle>
          <StaticQuery query={aboutQuery} render={data => {
                return (
                  <Card>
                    <CardBody>
                      <Img fluid={data.file.childImageSharp.fluid } alt="Mateusz Pośpiech" title="Mateusz Pośpiech" />
                    </CardBody>
                  </Card>
                )
            }}
          />
          <article>
            <p>Cześć nazywam się Mateusz Pośpiech i z zawodu jestem programistą - frontend developerem. Na co dzień zajmuję się tworzeniem stron i sklepów internetowych. Po pracy w wolnych chwilach lubię tworzyć własne projekty ucząc się przy tym nowych (przynajmniej dla mnie) technologii. Poza programowaniem moimi głównymi zajawkami są podróże, ekonomia, sport i gry komputerowe. Uwielbiam poznawać nowe miejsca i spędzać godziny na pieszych wycieczkach gubiąc się wśród mniej uczęszczanych uliczek miast które odwiedzam. Z racji tego, że lubię też liczby, to na blogu oprócz krótkiego opisu i zdjęć z wypadu, chciałbym się podzielić kosztami oraz oceną poszczególnych miejsc czy atrakcji. Dla mnie ma to być swojego rodzaju pamiętnik oraz mapa zwiedzonych miejsc zarówno tych małych wycieczek, jak i dużych. Prócz samych podróży może od czasu do czasu będą wpadać wpisy związane bardziej z szeroko rozumianą ekonomią. Nigdy wcześniej nie prowadziłem bloga, a pisarz ze mnie marny. Stworzony głównie by zrobić sobie wycieczkowy pamiętnik z kosztorysem oraz nauczyć się technologii GatsbyJS i GraphQL #dwiePieczenieNaJednymOgniu </p>
            <p>Zapraszam do krótkiej lektury oraz na przegląd zdjęć.</p>
          </article>
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