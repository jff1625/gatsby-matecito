import React from 'react'

const Post = props => (
  <div className="blerg">
    <h2>{props.description}</h2>
    <img src={props.cover.source} alt="" />
    <p>{props.name}</p>
  </div>
)

export default Post
