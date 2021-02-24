// External Dependencies
import { createSlice } from '@reduxjs/toolkit';

// Internal Dependencies
import {
  fetchUserToken,
  fetchUser,
} from '../../../api/authenticationAPI';

const signInSlice = createSlice({
  name: 'SignIn',
  initialState: {
    user: {},
  },
  reducers: {
    saveUser: (state, { payload }) => {
      state.user = payload.user;
    },
  },
});

const { saveUser } = signInSlice.actions;

export const signInUser = (userToSignIn, naviagation) => async (dispatch) => {
  const { localStorage } = window;
  if (!localStorage.getItem('userToken')) {
    const fetchedUserToken = await fetchUserToken(userToSignIn);
    localStorage.setItem('userToken', fetchedUserToken.data);
  }

  const fetchedUser = await fetchUser();
  dispatch(saveUser({ user: fetchedUser.data }));
  naviagation();
};

export default signInSlice.reducer;
