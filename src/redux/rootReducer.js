/** **************************** Import Libs ****************************** */
import { combineReducers } from "redux";

/** **************************** Import Reducers ****************************** */
import manageUserState from "./reducers/userReducer";
import JobsState from "./reducers/userJobReducres"
import UploadcvState from "./reducers/userUploadReducres"

const rootReducer = combineReducers({
  user: manageUserState,
  jobs: JobsState,
  upload :UploadcvState
});

export default rootReducer;