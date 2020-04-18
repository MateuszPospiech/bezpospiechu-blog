import React from 'react';
import { Link } from 'gatsby'
import { Badge, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) =>{
   return(
      <Card>
         <Link to={slug} title={title}>
            <Img className="card-image-top" fluid={fluid} alt="BezPospiechu post hero" title="BezPospiechu post hero"/>
         </Link>
         <CardBody>
            <CardTitle>
               <Link to={slug} title={title}>
               <h2>{title}</h2>
               </Link>
            </CardTitle>
            <CardSubtitle>
               <time className="text-info">{date}</time> autor{` `}
               <span className="text-info"> {author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
            <ul className="post-tags">
               {tags.map(tag => {
                  return(
                     <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`} title={`BezPospiechu tag: ${slugify(tag)}`}>
                           <Badge color="primary" className="text-uppercase">{tag}</Badge>
                        </Link>
                     </li>
                     )}
                  )
               }  
            </ul>
            <Link to={slug} className="btn btn-outline-primary float-right" title="BezPospiechu czytaj więcej" >Czytaj więcej</Link>
         </CardBody>
      </Card>
   )
}

export default Post