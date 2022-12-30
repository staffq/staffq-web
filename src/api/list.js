/** ****************************** Import libs *********************************** */
import { viewDataByApi, getListByApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const getjobpostion = (params) => getListByApi(API_ENDPOINT.jobPosts, params);

export const getUserById = (dataId) => viewDataByApi(API_ENDPOINT.user, dataId);


