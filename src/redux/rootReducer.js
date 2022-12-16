/** **************************** Import Libs ****************************** */
import { combineReducers } from "redux";

/** **************************** Import Reducers ****************************** */
import manageUserState from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: manageUserState
});

export default rootReducer;
