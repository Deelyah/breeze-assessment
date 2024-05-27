import { compose, isNil, prop } from 'ramda';

export const slice = 'userProfile';
export const initialState = {
  isAdmin: false,
  userProfile: null,
  users: []
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case updateUserProfile().type:
      return { ...state, userProfile: payload };
    default:
      return state;
  }
};

/* *Action Creators */
// These creators let us add extra functionalities to our payload before they are passed to the action

export const updateUserProfile = (payload) => {
  return {
    type: `${slice}/updateUserProfile`,
    payload: payload
  };
};

/**
 *
 * Selectors
 */

export const userProfileSlice = (state) => state[slice];

export const getuserProfile = compose(prop('userProfile'), userProfileSlice);
export const userRoleIsAdmin = compose(prop('isAdmin'), getuserProfile);
export const userRoleIsNotAdmin = (state) => !userRoleIsAdmin(state);
export const userIsLoggedOut = compose(isNil, getuserProfile);
export const userIsLoggedIn = (state) => !userIsLoggedOut(state);
