/** **************************** Import Types ****************************** */
import { UPLOADCV_REQUEST, UPLOADCV_SUCCESS, UPLOADCV_FAILURE } from "../types/userUploadCv";

const initialState = {
  uploadData: "",
  error: "",
  loading: false,
};

const UploadcvState = (state = initialState, action) => {
  switch (action.type) {
    case  UPLOADCV_REQUEST:
      return {
        ...state,
        uploadData: "",
        loading: true,
      };
    case  UPLOADCV_SUCCESS:
      return {
        ...state,
        uploadData: action.payload,
        loading: false,
      };
    case  UPLOADCV_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default UploadcvState;
