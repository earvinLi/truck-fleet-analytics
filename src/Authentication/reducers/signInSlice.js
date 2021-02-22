// External Dependencies
import { createSlice } from '@reduxjs/toolkit';

const signInSlice = createSlice({
  name: 'SignIn',
  initialState: {
    userToken: '',
  },
  reducers: {
    saveToken: (state) => {
      console.log(state);
    },
  },
});

export default signInSlice.reducer;
