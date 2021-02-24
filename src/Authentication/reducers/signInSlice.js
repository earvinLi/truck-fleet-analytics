// External Dependencies
import { createSlice } from '@reduxjs/toolkit';

//
import fetchRequest from '../../App/appUtils';

const signInSlice = createSlice({
  name: 'SignIn',
  initialState: {
    userToken: '',
  },
  reducers: {
    saveUserToken: (state, { payload }) => {
      state.userToken = payload.userToken;
    },
  },
});

const { saveUserToken } = signInSlice.actions;

export const fetchUserToken = (userToSignIn) => async (dispatch) => {
  const fetchedUserToken = await fetchRequest('/login', {
    method: 'POST',
    body: JSON.stringify(userToSignIn),
  });
  dispatch(saveUserToken({ userToken: fetchedUserToken.data }));
};

export default signInSlice.reducer;
