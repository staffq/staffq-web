/** **************************** Import Libs ****************************** */
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/** **************************** Import Root Reducer ****************************** */
import rootReducer from "./rootReducer";

let middleware = [];
middleware = [...middleware, thunk, logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
