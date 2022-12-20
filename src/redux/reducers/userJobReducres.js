/** **************************** Import Types ****************************** */
import { JOB_REQUEST,  JOB_SUCCESS,  JOB_FAILURE } from "../types/userJobs";

const initialState = {
  jobData: "",
  error: "",
  loading: false,
};

const JobsState = (state = initialState, action) => {
  switch (action.type) {
    case  JOB_REQUEST:
      return {
        ...state,
        jobData: "",
        loading: true,
      };
    case  JOB_SUCCESS:
      return {
        ...state,
        jobData: action.payload,
        loading: false,
      };
    case  JOB_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default JobsState;
