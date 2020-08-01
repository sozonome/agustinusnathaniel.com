import React from "react"
import { Link } from "gatsby"

const PostCard = props => {
  return (
    <Link to={"/blog/" + props.value.node.frontmatter.slug} className="">
      <div className="postListSingle group flex rounded-lg p-6 mb-4 w-full hover:bg-gray-900">
        <div className="mr-4 flex items-center">
          <img
            className=""
            src={props.value.node.frontmatter.thumbnail}
            alt=""
          />
        </div>
        <div className="w-5/6">
          <h1 className="text-2xl font-bold mb-1 group-hover:text-teal-400">
            {props.value.node.frontmatter.title}
          </h1>
          <h2 className="text-sm text-gray-300 font-light mb-2">
            {props.value.node.frontmatter.date}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
