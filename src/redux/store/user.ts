import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: '',
  type: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRequestPending: state => {
      state.isLoggedIn = true;
    },
    userRequestError: (state, action) => {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    userRequestSuccess: (state, action) => {
      state.data = action.payload;
      state.error = '';
      state.isLoggedIn = false;
    },
    setUserType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { userRequestPending, userRequestError, userRequestSuccess } = userSlice.actions;

export default userSlice.reducer;
