import React from "react";
import { connect } from "react-redux";
import "./PostDetail.css";

const PostDetail = ({ post, user }) => {
  const handleTemplate = () => {
    if (!post) return null;
    return (
      <div className="ui card fullWidth">
        <div className="content">
          <span className="header">{post.title}</span>
          <div className="description">{post.body}</div>
        </div>
        <div className="extra content">
          <div className="meta">
            <span className="date">{user.name}</span>
          </div>
        </div>
      </div>
    );
  };
  return handleTemplate();
};

const mapStateToProps = ({ listPost, listUser, selectedPostId }) => {
  const post = listPost.find(post => post.id === selectedPostId);
  return {
    post,
    user: selectedPostId ? listUser.find(user => user.id === post.userId) : {}
  };
};

export default connect(mapStateToProps)(PostDetail);
