// External Dependencies
import { createSlice } from '@reduxjs/toolkit';

// Internal Dependencies
import { fetchTelemetryDataForDriver } from '../../../api/telemetryDataAPI';

const driverTelemetryDataSlice = createSlice({
  name: 'DriverDashboard',
  initialState: {
    telemetryData: [],
  },
  reducers: {
    storeDriverTelemetryData: (state, { payload }) => {
      state.telemetryData = payload.telemetryData;
    },
  },
});

const { storeDriverTelemetryData } = driverTelemetryDataSlice.actions;

export const getDriverTelemetryData = (driverId) => async (dispatch) => {
  const fetchedDriverTelemetryData = await fetchTelemetryDataForDriver(driverId);
  dispatch(storeDriverTelemetryData({ telemetryData: fetchedDriverTelemetryData }));
};

export default driverTelemetryDataSlice.reducer;
