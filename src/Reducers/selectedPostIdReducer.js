export const selectedPostIdReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_POST":
      return action.payload.selectedPostId;
    default:
      return state;
  }
};
