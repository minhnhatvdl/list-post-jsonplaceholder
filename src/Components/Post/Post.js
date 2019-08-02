import React from "react";

const Post = ({ post }) => {
  return (
    <div className="item">
      <div className="header">{post.title}</div>
      <div className="description">{post.body}</div>
    </div>
  );
};

export default Post;
