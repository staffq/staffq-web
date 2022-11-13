/** ****************************** Import libs *********************************** */
import { viewDataByApi, getListByApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const getUser = (params) => getListByApi(API_ENDPOINT.user, params);

export const getUserById = (dataId) => viewDataByApi(API_ENDPOINT.user, dataId);


