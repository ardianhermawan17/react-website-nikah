import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import formSelesaiReducer from "./formSelesaiReducer";

const rootReducer = combineReducers({
  account : accountReducer,
  formSelesai : formSelesaiReducer
});

export default rootReducer;
