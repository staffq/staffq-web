/** **************************** Import Types ****************************** */
import { UPLOADCV_REQUEST, UPLOADCV_SUCCESS, UPLOADCV_FAILURE } from "../types/userUploadCv";
// import { toast } from "react-toastify";

/** **************************** Import API ****************************** */
import { createUploadCV} from "../../api/create";
// import { createJobspostion , createuploadCV } from "../../api/create";



export const uploadRequest = () => ({
  type: UPLOADCV_REQUEST,
});

export const uploadSuccess = (data) => ({
  type: UPLOADCV_SUCCESS,
  payload: data,
});

export const uploadFailure = (error) => ({
  type: UPLOADCV_FAILURE,
  payload: error,
});

//postaction
export const createUploadCVData = (data) =>
  async function (dispatch) {
    dispatch(uploadRequest());
    return createUploadCV(data)
      .then((res) => {
        if (!res.code) {
          const result = { ...res.data };
          const dataArray = [];
          if (Object.keys(result).length > 0) {
            dataArray.push(result);
          }
          dispatch(uploadSuccess(res?.data));
          // toast.success("upload created successfully");
          return res;
        }
        dispatch(uploadFailure(res.message));
        toast.error(res.message);
        return res.message;
      })
      .catch((err) => console.log("Catch Error:", err));
  };








  // export const createTestimonialData = (data) =>
  // async function (dispatch) {
  //   dispatch(uploadRequest());
  //   return createTestimonial(data)
  //     .then((res) => {
  //       if (!res.code) {
  //         const result = { ...res.data };
  //         const dataArray = [];
  //         if (Object.keys(result).length > 0) {
  //           dataArray.push(result);
  //         }
  //         dispatch(uploadSuccess(res?.data));
  //         toast.success("testimonial created successfully");
  //         return res;
  //       }
  //       dispatch(uploadFailure(res.message));
  //       toast.error(res.message);
  //       return res.message;
  //     })
  //     .catch((err) => console.log("Catch Error:", err));
  // };


  // export const createuploadCVData = (data) =>
  // async function (dispatch) {
  //   dispatch(uploadRequest());
  //   return createuploadCV(data)
  //     .then((res) => {
  //       if (!res.code) {
  //         const result = { ...res.data };
  //         const dataArray = [];
  //         if (Object.keys(result).length > 0) {
  //           dataArray.push(result);
  //         }
  //         dispatch(uploadSuccess(res?.data));
  //         toast.success("testimonial created successfully");
  //         return res;
  //       }
  //       dispatch(uploadFailure(res.message));
  //       toast.error(res.message);
  //       return res.message;
  //     })
  //     .catch((err) => console.log("Catch Error:", err));
  // };

// export const getAlluploads = (params) =>
//   async function (dispatch) {
//     dispatch(uploadRequest());
//     return getupload({
//       ...params,
//     })
//       .then((res) => {
//         if (res.data.records) {
//           dispatch(
//             uploadSuccess(res.records)
//           );
//           return res;
//         }
//         dispatch(uploadFailure(res.message));
//         return res.message;
//       })
//       .catch((err) => console.log("Catch Error:", err));
//   };

// export const getuploadDataById = (dataId, params) =>
//   async function (dispatch) {
//     dispatch(uploadRequest());
//     return getuploadById(dataId, params)
//       .then((res) => {
//         if (res) {
//           dispatch(
//             uploadSuccess(res.records)
//           );
//           return res;
//         }
//         dispatch(uploadFailure(res.message));
//         return res.message;
//       })
//       .catch((err) => console.log("Catch Error:", err));
//   };

// export const updateuploadData = (data, uploadId) =>
//   async function (dispatch) {
//     dispatch(uploadRequest());
//     return updateupload(data, uploadId)
//       .then((res) => {
//         if (!res.code && !res.error) {
//           dispatch(uploadSuccess(res));
//           toast.success("upload updated successfully");
//           return "success";
//         }
//         dispatch(uploadFailure(res.error));
//         toast.error(res.message || res.error);
//         return res.message || res.error;
//       })
//       .catch((err) => console.log("Catch Error:", err));
//   };
