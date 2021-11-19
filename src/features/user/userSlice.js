import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'authentication',
  initialState: {
    user: '',
    id: '',
    token: '',
    authenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state = {
        ...state,
        user: action.payload.user,
        id: action.payload.id,
        token: action.payload.token,
        authenticated: true,
      };
    },
    register: (state, action) => {
      state = {
        ...state,
        user: action.payload.user,
        id: action.payload.id,
        token: action.payload.token,
        authenticated: false,
      };
    },
    logout: (state) => {
      state = { ...initialState };
    },
  },
});

export const { login, register, logout } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
