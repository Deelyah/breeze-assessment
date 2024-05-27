import { compose, filter, prop } from 'ramda';
import { makeDeepCopy } from '../helper';

export const slice = 'customer';
export const initialState = {
  tableData: [
    {
      capacity: 4,
      name: 'Table - 1',
      charges: '30',
      specialty: 'none',
      booked: false,
      selected: false
    },
    {
      capacity: 3,
      name: 'Table - 2',
      charges: '30',
      specialty: 'none',
      booked: true,
      selected: false
    },
    {
      capacity: 5,
      name: 'Table - 3',
      charges: '30',
      specialty: 'none',
      booked: false,
      selected: false
    },
    {
      capacity: 3,
      name: 'Table - 4',
      charges: '30',
      specialty: 'none',
      booked: true,
      selected: false
    },
    {
      capacity: 1,
      name: 'Table - 5',
      charges: '30',
      specialty: 'none',
      booked: false,
      selected: false
    },
    {
      capacity: 2,
      name: 'Table - 6',
      charges: '30',
      specialty: 'none',
      booked: true,
      selected: false
    },
    {
      capacity: 8,
      name: 'Table - 7',
      charges: '30',
      specialty: 'none',
      booked: false,
      selected: false
    },
    {
      capacity: 7,
      name: 'Table - 8',
      charges: '30',
      specialty: 'none',
      booked: true,
      selected: false
    },
    {
      capacity: 8,
      name: 'Table - 9',
      charges: '30',
      specialty: 'none',
      booked: false,
      selected: false
    }
  ],
  discountDetails: { pricePerTable: 100, noOfTables: 2, discountPrice: 150 }
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case selectTable().type:
      const { tableData } = makeDeepCopy(state);
      const index = tableData.findIndex((x) => x.name == payload.name);
      tableData[index].selected = payload.value;
      return { ...state, tableData };

    default:
      return { ...state };
  }
};

/* Action Creators */

export const selectTable = (payload) => ({
  type: `${slice}/selectTable`,
  payload
});

/**Selectors */
export const customerSlice = (state) => state[slice];

export const getAllTables = compose(prop('tableData'), customerSlice);

const isSelected = (x) => x.selected;

export const getSelectedTables = compose(filter(isSelected), getAllTables);
