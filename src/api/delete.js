/** ****************************** Import libs *********************************** */
import { deleteDataByIdApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const deleteUser = (id) => deleteDataByIdApi(API_ENDPOINT.user, id);
