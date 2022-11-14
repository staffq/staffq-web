/** ****************************** Import libs *********************************** */
import { postDataApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const createUser = (params) => postDataApi(API_ENDPOINT.user, params);
