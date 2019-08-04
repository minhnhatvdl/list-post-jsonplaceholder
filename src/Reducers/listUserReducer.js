export const listUserReducer = (listUser = [], action) => {
  switch (action.type) {
    case "GET_USER":
      return [...listUser, action.payload.user.data];
    default:
      return listUser;
  }
};
