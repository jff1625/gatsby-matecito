import React from 'react'
import { PEER_HOST_IPV6 } from 'opentracing/lib/ext/tags'

const Post = props => {
  const duplicateText = props.props.description === props.props.message
  return (
    <div className="box">
      <h6>{new Date(props.props.created_time).toDateString()}</h6>
      <h3>{props.props.name}</h3>
      <p>{props.props.message}</p>
      <span className="image main">
        <img src={props.props.full_picture} alt="" />
      </span>
      {duplicateText ? '' : <p>{props.props.description}</p>}
    </div>
  )
}

export default Post
