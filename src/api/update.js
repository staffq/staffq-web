/** ****************************** Import libs *********************************** */
import { putDataApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const updateUser = (params, id) => putDataApi(API_ENDPOINT.user, params, id);


export const updateuploadCV = (params, id) => putDataApi(API_ENDPOINT.uploadCV, params, id);
