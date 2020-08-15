import http from './http';

const checkStatus = (response) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    // Success status lies between 200 to 300
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const apiCall = (method, url, options) => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return http[method](url, {
    headers,
    ...options,
  })
    .then(checkStatus)
    .then((response) => response)
};
