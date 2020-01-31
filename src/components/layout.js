import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Col, Row } from 'reactstrap'
import { Card, CardBody, CardSubtitle } from 'reactstrap'

import Header from "./header"
import Footer from "./Footer"
import Sitebar from "./Sitebar"

import '../styles/index.scss'


const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content" >
        <Card>
          <CardBody>
              <CardSubtitle>
              <h1 className="h1">{pageTitle}</h1>
              </CardSubtitle> 
          </CardBody> 
        </Card>
        <Row>
          <Col md="8">{children}</Col>
          <Col md="4">
            <Sitebar/>
          </Col>
        </Row>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
