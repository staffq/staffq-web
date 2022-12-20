
import { JOB_REQUEST, JOB_SUCCESS, JOB_FAILURE } from "../types/userJobs";
import { getjobpostion } from "../../api/list";
// import { toast } from "react-toastify";
export const JOB_Request = () => ({
  type: JOB_REQUEST,
});

export const JOB_Success = (data) => ({
  type: JOB_SUCCESS,
  payload: data,
});

export const JOB_Failure = (error) => ({
  type: JOB_FAILURE,
  payload: error,
});
export const getjobpostionData = (params) =>
  async function (dispatch) {
    dispatch(JOB_Request());
    return getjobpostion ({
      ...params,
    })
      .then((res) => {
        console.log(res.data.records, "thanmabn")
        if (res.data.records) {
          dispatch(
            JOB_Success(res?.data)
          );
          return res.data;
        }
        dispatch(JOB_Failure(res.message));
        return res.message;
      })
      .catch((err) => console.log("Catch Error:", err));
  };
