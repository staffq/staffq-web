/** ****************************** Import libs *********************************** */
import { postDataApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const createContact = (params) => postDataApi(API_ENDPOINT.contact, params);
export const createJobspostion = (params) => postDataApi(API_ENDPOINT.jobpostion, params);
// export const createUploadCv = (params) => postDataApi(API_ENDPOINT.uploadCV, params);
export const createUploadCV = (params) => postDataApi(API_ENDPOINT.uploadCV, params);
