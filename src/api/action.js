/** ************************* Import config files *************************** */
import { hostConfig } from "../config";

/** *************************** Response Handler **************************** */
const responseStatusHandler = (response) => {
  switch (response.status) {
    case 400:
      return response;
    case 401:
      return { error: "Unauthorized" };
    case 402:
      return { error: "Payment Required" };
    case 403:
      return { error: "Forbidden" };
    case 404:
      return { error: "Not Found" };
    case 405:
      return { error: "Method Not Allowed" };
    case 406:
      return { error: "Not Acceptable" };
    case 408:
      return { error: "Request Timeout" };
    case 409:
      return { error: "User Already Exist" };
    case 410:
      return { error: "permanently deleted from server" };
    case 500:
      return { error: "Internal Server Error" };
    case 501:
      return { error: "Not Implemented" };
    case 502:
      return { error: "Bad Gateway" };
    case 503:
      return { error: "Service Unavailable" };
    case 504:
      return { error: " Gateway Timeout" };
    case 511:
      return { error: " Network Authentication Required" };
    case 200:
    case 201:
      return response;
    default:
      return false;
  }
};

/** ****************************** Error Handler *********************************** */
const errorHandler = (error) => error;

/** ***************************** Get Access Token ********************************* */
let token;
if (typeof window !== "undefined") {
  // This is only for pre-rendering application
  token = localStorage.getItem("accessToken");
}

/** ****************************** Create Api *********************************** */
export const postDataApi = (requestUrl, params) => {
  return fetch(`${hostConfig.API_URL}${requestUrl}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((err) => {
      errorHandler(err);
    });
};

/** **************************** List Api by Query ********************************* */
export const getListByApi = (requestUrl, params) => {
  let getParams = "?";

  //check all the params
  if (
    params &&
    params.rowsPerPage &&
    params.rowsPerPage !== null &&
    params.rowsPerPage !== undefined
  ) {
    getParams += `limit=${params.rowsPerPage}`;
  }

  if (
    params &&
    params.currentPage &&
    params.currentPage !== null &&
    params.currentPage !== undefined
  ) {
    getParams += `&page=${params.currentPage}`;
  }

  if (
    params &&
    params.sort &&
    params.sort !== null &&
    params.sort !== undefined
  ) {
    getParams += `&sort=${params.sort}`;
  }

  if (params && params._id && params._id !== null && params._id !== undefined) {
    getParams += `&_id=${params._id}`;
  }

  if (
    params &&
    params.isActive !== null &&
    params.isActive !== "" &&
    params.isActive !== undefined
  ) {
    getParams += `&isActive=${params.isActive}`;
  }

  if (
    params &&
    params.userId &&
    params.userId !== null &&
    params.userId !== undefined
  ) {
    getParams += `&userId=${params.userId}`;
  }

  if (
    params &&
    params.query &&
    params.query !== null &&
    params.query !== undefined
  ) {
    getParams += `&query=${params.query}`;
  }
  if (
    params &&
    params.search &&
    params.search !== null &&
    params.search !== undefined
  ) {
    getParams += `&search=${params.search}`;
  }

  return fetch(`${hostConfig.API_URL}${requestUrl}${getParams}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** List Api By Id*********************************** */
export const viewDataByApi = (requestUrl, id) => {
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Update Api *********************************** */
export const putDataApi = (requestUrl, params, id) => {
  
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Delete Api *********************************** */
export const deleteDataByIdApi = (requestUrl, id) => {
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};
