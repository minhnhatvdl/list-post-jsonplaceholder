export const listPostReducer = (listPost = [], action) => {
  switch (action.type) {
    case "GET_LIST_POST":
      return action.payload.listPost.data;
    default:
      return listPost;
  }
};
