/** **************************** Import Types ****************************** */
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from "../types/user.types";

const initialState = {
  userData: "",
  error: "",
  loading: false,
};

const manageUserState = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        userData: "",
        loading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default manageUserState;
