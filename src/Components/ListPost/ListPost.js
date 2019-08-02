import React, { useEffect } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";
import { getListPost } from "../../Actions";
import "./ListPost.css";

const ListPost = ({ listPost, getListPost }) => {
  useEffect(() => {
    getListPost();
  }, [getListPost]);
  return (
    <div className="ui relaxed divided list textAlignJustify">
      {listPost.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listPost: state.listPost
  };
};

export default connect(
  mapStateToProps,
  { getListPost }
)(ListPost);
