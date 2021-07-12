import merge from "lodash/merge";
import fetch from "cross-fetch";
import { addError } from "../../features/message/state/MessageSlice";
import { BASE_API } from "./endpoint";

/**
 * Get endpoint url
 *
 * @param {string} path
 * @param {boolean} useFullPathFlag
 * @return {string}
 */
function apiEndpoint(path, useFullPathFlag) {
  if (useFullPathFlag) {
    return path;
  }
  return `${BASE_API}/${path}`;
}

/**
 * Get request headers
 *
 * @param {boolean} ignoreContentType
 * @return {object}
 */
function headers(ignoreContentType) {
  const token = localStorage.getItem("token")
    ? `Bearer ${localStorage.getItem("token")}`
    : "";
  const defaultHeaders = {
    Accept: "application/json",
    Authorization: token,
  };
  if (ignoreContentType) {
    return defaultHeaders;
  }
  return {
    "Content-Type": "application/json",
    ...defaultHeaders,
  };
}

/**
 * Execute fetch request
 *
 * @param {object} thunkAPI
 * @param {string} url
 * @param {object} opt
 * @return {object} response
 */
export async function callApi(thunkAPI, endpoint, opt = {}) {
  const { ignoreContent, fullEndpoint } = opt;
  const defaultOpt = {
    endpoint: apiEndpoint(endpoint, fullEndpoint),
    method: "GET",
    headers: headers(ignoreContent),
    formatJson: true,
  };
  const options = merge(defaultOpt, opt);
  try {
    const response = await fetch(options.endpoint, options);
    if (response.status === 401) {
      localStorage.clear();
    }
    let data;
    if (response.ok) {
      if (options.formatJson) {
        data = await response.clone().json();
      } else {
        data = await response.clone().text();
      }
      return data;
    }
    data = await response.clone().text();
    thunkAPI.dispatch(addError(data));
    return thunkAPI.rejectWithValue(data);
  } catch (error) {
    thunkAPI.dispatch(addError(error.message));
    return thunkAPI.rejectWithValue(error.message);
  }
}
