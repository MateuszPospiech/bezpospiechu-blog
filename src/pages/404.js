import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Coś poszło nie tak...">
    <SEO title="404: Not found" description={['tagi', 'podróże', 'tematy podróży']} />
    <Link className="btn btn-primary" to={`/`}>Powrót</Link>
  </Layout>
)

export default NotFoundPage
