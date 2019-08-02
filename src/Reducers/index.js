import { combineReducers } from "redux";
import { listPostReducer } from "./listPostReducer";

export const reducers = combineReducers({
  listPost: listPostReducer
});
