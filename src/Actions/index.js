import jsonplaceholder from "../APIs/jsonplaceholder";

export const getListPost = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({
    type: "GET_LIST_POST",
    payload: {
      listPost: response
    }
  });
};
