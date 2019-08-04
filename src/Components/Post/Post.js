import React from "react";
import { connect } from "react-redux";
import { selectPost } from "../../Actions";
import "./Post.css";

const Post = ({ post, user = {}, selectPost }) => {
  return (
    <div className="item" onClick={() => selectPost(post.id)}>
      <div className="header">{post.title}</div>
      <div className="meta">{user.name}</div>
      <div className="description">{post.body}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.listUser.find(item => item.id === ownProps.post.userId)
  };
};

export default connect(
  mapStateToProps,
  { selectPost }
)(Post);
