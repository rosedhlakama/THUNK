import React from 'react'

const Post = ({post}) => {
  return(
    <div>
      <a href={post.url}><h3> {post.title}</h3></a>
           <p>{post.author}</p>
           <p>{post.domain}</p>
    </div>
  )
}
 
export default Post
