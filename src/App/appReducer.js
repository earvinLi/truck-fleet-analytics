// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import signInReducer from '../features/Authentication/reducers/signInSlice';
import driverDashboardReducer from '../features/DriverDashboard/reducers/driverTelemetryDataSlice';

const appReducer = combineReducers({
  signIn: signInReducer,
  driverDashboard: driverDashboardReducer,
});

export default appReducer;
