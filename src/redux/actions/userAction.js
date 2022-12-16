/** **************************** Import Types ****************************** */
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from "../types/userTypes";
import { toast } from "react-toastify";

/** **************************** Import API ****************************** */
import { createContact } from "../../api/create";


export const userRequest = () => ({
  type: USER_REQUEST,
});

export const userSuccess = (data) => ({
  type: USER_SUCCESS,
  payload: data,
});

export const userFailure = (error) => ({
  type: USER_FAILURE,
  payload: error,
});

//postaction
export const createContactData = (data) =>
  async function (dispatch) {
    dispatch(userRequest());
    return createContact(data)
      .then((res) => {
        if (!res.code) {
          const result = { ...res.data };
          const dataArray = [];
          if (Object.keys(result).length > 0) {
            dataArray.push(result);
          }
          dispatch(userSuccess(res?.data));
          toast.success("User created successfully");
          return res;
        }
        dispatch(userFailure(res.message));
        toast.error(res.message);
        return res.message;
      })
      .catch((err) => console.log("Catch Error:", err));
  };

// export const getAllUsers = (params) =>
//   async function (dispatch) {
//     dispatch(userRequest());
//     return getUser({
//       ...params,
//     })
//       .then((res) => {
//         if (res.data.records) {
//           dispatch(
//             userSuccess(res.records)
//           );
//           return res;
//         }
//         dispatch(userFailure(res.message));
//         return res.message;
//       })
//       .catch((err) => console.log("Catch Error:", err));
//   };

// export const getUserDataById = (dataId, params) =>
//   async function (dispatch) {
//     dispatch(userRequest());
//     return getUserById(dataId, params)
//       .then((res) => {
//         if (res) {
//           dispatch(
//             userSuccess(res.records)
//           );
//           return res;
//         }
//         dispatch(userFailure(res.message));
//         return res.message;
//       })
//       .catch((err) => console.log("Catch Error:", err));
//   };

// export const updateUserData = (data, userId) =>
//   async function (dispatch) {
//     dispatch(userRequest());
//     return updateUser(data, userId)
//       .then((res) => {
//         if (!res.code && !res.error) {
//           dispatch(userSuccess(res));
//           toast.success("User updated successfully");
//           return "success";
//         }
//         dispatch(userFailure(res.error));
//         toast.error(res.message || res.error);
//         return res.message || res.error;
//       })
//       .catch((err) => console.log("Catch Error:", err));
//   };
