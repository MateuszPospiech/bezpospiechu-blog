import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'


const tagsPage = ({ pageContext }) => {
   const { tags, tagPostCounts } = pageContext
   return (
      <Layout pageTitle="Wszystkie tagi">
         <SEO title="Wszystkie tagi" description={['tagi', 'podróże', 'tematy podróży']}/>
         <ul className="tags-page">
            {tags.map(tag => (
               <li key={tag}>
                  <Button color="primary" href={`/tag/${slugify(tag)}`}>
                  {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                  </Button>
               </li>
            ))}
         </ul>
      </Layout>
   )
}

export default tagsPage