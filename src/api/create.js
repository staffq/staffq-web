/** ****************************** Import libs *********************************** */
import { postDataApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const createContact = (params) => postDataApi(API_ENDPOINT.contact, params);
