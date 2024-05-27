import { complement, compose, isNil, prop } from 'ramda';

export const slice = 'auth';
const initialState = {
  userCredentials: null,
  error: '',
  allUsers: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case setUserCredentials().type:
      return { ...state, userCredentials: payload };
    case setErrorState().type:
      return { ...state, error: payload };
    case signup().type:
      return { ...state };
    case loginAsUser().type:
      return { ...state, allUsers: payload };
    case loginAsAdmin().type:
      return { ...state };
    case setAllUsers().type:
      return { ...state, allUsers: payload };
    default:
      return { ...state };
  }
};

export const setUserCredentials = (payload) => ({
  type: `${slice}/setUserCredentials`,
  payload
});

export const setErrorState = (payload) => ({
  type: `${slice}/shouldSetErrorState`,
  payload
});

export const signup = (payload) => ({ type: `${slice}/signup`, payload });
export const loginAsAdmin = (payload) => ({
  type: `${slice}/loginAsAdmin`,
  payload
});

export const loginAsUser = (payload) => ({
  type: `${slice}/loginAsUser`,
  payload
});

export const setAllUsers = (payload) => ({
  type: `${slice}/setAllUsers`,
  payload
});

// SELECTORS

export const getAuthSlice = (state) => state[slice];
export const getUserCredentials = compose(
  prop('userCredentials'),
  getAuthSlice
);
export const hasError = compose(complement(isNil), prop('error'), getAuthSlice);
