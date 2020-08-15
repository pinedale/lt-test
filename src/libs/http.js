import axios from 'axios';
import { mergeAll } from 'ramda';
import { GET } from './httpMethods';

const defaultHeaders = {};

const request = (method, url, headers, axiosConfig = {}) => {
  const options = mergeAll([
    {
      method,
      url,
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:4000',
      headers: { ...defaultHeaders, ...headers },
      responseType: 'json',
    },
    axiosConfig,
  ]);

  return axios(options);
};

export default {
  [GET]: (url, { headers = {}, params = {}, transformResponse = [] }) => request(
    GET, url, headers, {
      params,
      transformResponse,
    },
  ),
};
