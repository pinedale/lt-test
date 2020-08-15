import { createAsyncAction } from 'redux-promise-middleware-actions';
import { prop } from 'ramda';

import { reqGetPeoples } from '../api/people';

export const getPeoples = createAsyncAction(
	'PEOPLE',
	(payload) => reqGetPeoples(payload).then(prop('data')),
);
  