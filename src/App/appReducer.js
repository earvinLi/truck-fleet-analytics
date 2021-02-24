// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import signInReducer from '../features/Authentication/reducers/signInSlice';

const appReducer = combineReducers({
  signIn: signInReducer,
});

export default appReducer;
