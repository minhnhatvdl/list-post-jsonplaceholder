export const listPostReducer = (listPost = [], action) => {
  if (action.type === "GET_LIST_POST") {
    return action.payload.listPost.data;
  }
  return listPost;
};
