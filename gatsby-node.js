/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { slugify } = require('./src/util/utilityFunctions')

// exports.onCreateNode = ({ node, actions}) => {

// }

export.createPages =  ({ actions, graphql }) => {
   const { createPage } = actions;
   const singlePostTemplate = path.resolve('src/templates/single-post.js')

   return qraphql(`
      {
         allMarkdownRemark{
            edges{
               node{
                  frontmatter{
                     author
                     tags
                  }
                  fields{
                     slug
                  }
               }
            }
         }
      }
   `).then(res => {
      if(res.errors) return Promise.reject(res.errors)

      const posts = res.data.allMarkdownRemark.edges

      posts.forEach({node}) => {
         createPage({
            path: node.fields.slug,
            component: singlePostTemplate,
            context: {
               slug: node.fields.slug
            }
         })
      }

   })
}