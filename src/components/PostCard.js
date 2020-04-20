import React from 'react'
import { Link } from 'gatsby'

export default function PostCard(
  value,
  postType
) {
  return (
    <Link to={'/'+postType+'/'+value.frontmatter.slug} className="">
      <div className="flex bg-gray-700 rounded-lg p-6 mb-8 hover:bg-blue-800 w-full">
        <div className="mr-2 flex items-center">
          <img className="max-w-1/4 min-w-6" src={value.frontmatter.thumbnail} alt=""/>
        </div>
        <div className="w-5/6">
          <h1 className="text-2xl font-bold mb-1">
            {value.frontmatter.title}
          </h1>
          <h2 className="text-sm text-gray-300 font-light mb-2">{value.frontmatter.date}</h2>
          {/* <p className="text-sm text-gray-300">{edge.node.excerpt}</p> */}
        </div>
      </div>
    </Link>
  )
}
