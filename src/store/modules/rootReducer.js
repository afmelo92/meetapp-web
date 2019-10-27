import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import events from './events/reducer';

export default combineReducers({
  auth,
  user,
  events,
});
