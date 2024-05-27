export const initialState = { selectedTables: 0 };

export const slice = 'booking'; //namespace
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case selectTable().type:
      return { ...state, selectedTables: payload };

    default:
      return state;
  }
};

/*
*   Action Creators
// These creators let us add extra functionalities to our payload before they are passed to the action
*/

const selectTable = () => {
  return { type: `${slice}/selectTable` };
};

/* selectors */

const getBookingDetails = (state) => state[slice];
