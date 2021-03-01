// External Dependencies
import { createSlice } from '@reduxjs/toolkit';

// Internal Dependencies
import { fetchTruckDataForCompany } from '../../../api/truckAPI';

const companyTruckDataSlice = createSlice({
  name: 'AdminDashboard',
  initialState: {
    truckData: [],
  },
  reducers: {
    storeCompanyTruckData: (state, { payload }) => {
      state.truckData = payload.truckData;
    },
  },
});

const { storeCompanyTruckData } = companyTruckDataSlice.actions;

export const getCompanyTruckData = (companyId) => async (dispatch) => {
  console.log(companyId);
  const fetchedCompanyTruckData = await fetchTruckDataForCompany(companyId);
  dispatch(storeCompanyTruckData({ truckData: fetchedCompanyTruckData }));
};

export default companyTruckDataSlice.reducer;
