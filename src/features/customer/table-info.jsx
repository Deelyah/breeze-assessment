import BackIcon from '@/assets/BackIcon';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getDiscountDetails } from '../admin-user/admin-reducer';

const mapStateToProps = (state) => ({
  discountSettings: getDiscountDetails(state)
});
const TableInfo = ({
  tableData = {},
  selectTable,
  onClose,
  discountSettings
}) => {
  useEffect(() => {
    const storedDiscountSettings = JSON.parse(
      localStorage.getItem('discountSettings')
    );
    if (storedDiscountSettings) {
      setDiscount(storedDiscountSettings);
    }
  }, []);

  return (
    <div className='table-info'>
      <div className='back'></div>

      <div className='table-data'>
        <div className='back-icon' onClick={onClose}>
          <BackIcon />
        </div>
        <h4>Table Details</h4>
        <p>Table: {tableData.name}</p>
        <p>Capacity: {tableData.capacity} Persons</p>
        <p>Additional Charges: None</p>
        <p>Specialty: {tableData.specialty}</p>
        <p>Price: {discountSettings.pricePerTable}</p>

        {tableData.booked && <h3>Oops! This table is already booked.</h3>}
        {!tableData.booked && (
          <button
            onClick={() => selectTable({ name: tableData.name, value: true })}
          >
            Select Table
          </button>
        )}
      </div>
    </div>
  );
};
export default connect(mapStateToProps)(TableInfo);
