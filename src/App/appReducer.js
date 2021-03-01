// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import signInReducer from '../features/Authentication/reducers/signInSlice';
import driverDashboardReducer from '../features/DriverDashboard/reducers/driverTelemetryDataSlice';
import adminDashboardReducer from '../features/AdminDashboard/reducers/companyTruckDataSlice';

const appReducer = combineReducers({
  signIn: signInReducer,
  driverDashboard: driverDashboardReducer,
  adminDashboard: adminDashboardReducer,
});

export default appReducer;
