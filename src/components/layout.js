import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import Sitebar from "./Sitebar"
import '../styles/index.scss'
import { Col, Row } from 'reactstrap'


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
    <script src="https://kit.fontawesome.com/889e51bcc7.js" crossOrigin="anonymous"></script>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content" >
        <h1>{pageTitle}</h1>
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
