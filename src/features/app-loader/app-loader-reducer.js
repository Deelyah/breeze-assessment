const initialState = {
  loading: false
};
export const slice = 'appLoader'; //namespace
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case startLoading().type:
    case stopLoading().type:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

/* *Action Creators */
// These creators let us add extra functionalities to our payload before they are passed to the action

export const startLoading = (state) => {
  return { type: `${slice}/startLoading`, payload: true };
};
export const stopLoading = () => ({
  type: `${slice}/stopLoading`,
  payload: false
});

export const getLoadingState = (state) => state[slice].loading;

// compose execs its functions from right to left, so here we getUserProfile, check for the key 'user' and confirms that user is neither null nor undefined
// export const isUserProfileLoaded = compose(
//     complement(isNil),
//     prop('user'),
//     getUserProfileSlice
//   )
