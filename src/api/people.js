import { apiCall } from '../libs/apiCallService';
import { PEOPLE } from '../libs/apiUrls';
import { GET } from '../libs/httpMethods';

export const reqGetPeoples = (params) => {
  return apiCall(GET, PEOPLE, { params });
};
