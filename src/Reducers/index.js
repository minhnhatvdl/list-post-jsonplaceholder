import { combineReducers } from "redux";
import { listPostReducer } from "./listPostReducer";
import { listUserReducer } from "./listUserReducer";
import { selectedPostIdReducer } from "./selectedPostIdReducer";

export const reducers = combineReducers({
  listPost: listPostReducer,
  listUser: listUserReducer,
  selectedPostId: selectedPostIdReducer
});
