import { compose, filter, prop } from 'ramda';

export const slice = 'admin';
export const initialState = {
  discountDetails: { pricePerTable: 100, noOfTables: 2, discountPrice: 150 }
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case updateDiscountDetails().type:
      return {...state, discountDetails: payload};
    default:
      return { ...state };
  }
};

/* Action Creators */

export const updateDiscountDetails = (payload) => ({
  type: `${slice}/updateDiscountDetails`,
  payload
});

/**Selectors */
export const adminSlice = (state) => state[slice];
export const getDiscountDetails = compose(prop('discountDetails'), adminSlice);


