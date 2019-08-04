import jsonplaceholder from "../APIs/jsonplaceholder";
// get list of posts
export const getListPost = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({
    type: "GET_LIST_POST",
    payload: {
      listPost: response
    }
  });
};
// get infos of user
export const getUser = userId => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${userId}`);
  dispatch({
    type: "GET_USER",
    payload: {
      user: response
    }
  });
};
// get list of posts and list of users in posts
export const getListPostAndListUserInPost = () => async (
  dispatch,
  getState
) => {
  await dispatch(getListPost());
  const { listPost } = getState();
  const listUserId = listPost.reduce(
    (acc, post) => acc.add(post.userId),
    new Set()
  );
  [...listUserId].map(userId => dispatch(getUser(userId)));
};
// select a post
export const selectPost = postId => {
  return {
    type: "SELECT_POST",
    payload: {
      selectedPostId: postId
    }
  };
};
