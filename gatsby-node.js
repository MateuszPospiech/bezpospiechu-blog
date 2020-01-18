const { slugify } = require('./src/util/utilityFunctions');
const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions}) => {
   const { createNodeField } = actions
   if(node.internal.type === 'MarkdownRemark') {
      const slugFromTitle = slugify(node.frontmatter.title)
      createNodeField({
         node,
         name: 'slug',
         value: slugFromTitle,
      })
   }
}

exports.createPages =  ({ actions, graphql }) => {
   const { createPage } = actions;
   const template = {
      singlePost: path.resolve('src/templates/single-post.js'),
      tagsPage: path.resolve('src/templates/tags-page.js')
   } 

   return graphql(`
      {
         allMarkdownRemark{
            edges{
               node{
                  frontmatter{
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

      //Create single blog post pages
      posts.forEach(({node}) => {
         createPage({
            path: node.fields.slug,
            component: template.singlePost,
            context: {
               // Passing slug for template to use to get post
               slug: node.fields.slug
            }
         })
      })

      //Get all tags
      let tags = []
      _.each(posts, edge => {
         if(_.get(edge, 'node.frontmatter.tags')){
            tags = tags.concat(edge.node.frontmatter.tags)
         }
      })
      
      //['css', 'html', ...]
      //[css: 5, html: 3, ...]
      let tagPostCounts = {}
      tags.forEach(tag => {
         tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
      })

      console.log(tags)
      console.log(tagPostCounts)

      tags = _.uniq(tags)

      //Create tags page
      createPage({
         path: `/tags`,
         component: template.tagsPage,
         context: {
            tags,
            tagPostCounts
         }
      })
   })
}