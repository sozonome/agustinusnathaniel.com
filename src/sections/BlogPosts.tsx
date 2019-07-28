// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby';

// export default function BlogPosts() {
//   const data = useStaticQuery(graphql`
//     query FeedMyBlog {
//       allFeedMyBlog {
//         edges {
//           node {
//             title
//             link
//             content
//           }
//         }
//       }

//       feedMyBlog {
//         title
//         link
//         content
//       }
//     }
//   `)
//   const { edges: posts } = data.allFeedMyBlog;

//   return (
//     <div>
//       {
//         posts.map(({ node: post } : {node:any}) => {
//           <div>
//             {post.title}
//           </div>
//         })
//       }
//     </div>
//   )
// }

