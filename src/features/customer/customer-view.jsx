import TableIcon from '@/assets/table';
import {
  redirectIfUserIsLoggedOut,
  redirectToAdminScreen
} from '@/hocs/redirect';
import { useEffect, useState } from 'react';
import TableInfo from './table-info';
import {
  getAllTables,
  getSelectedTables,
  selectTable
} from './customer-reducer';
import { connect } from 'react-redux';
import DeleteIcon from '@/assets/DeleteIcon';
import {
  getDiscountDetails,
  updateDiscountDetails
} from '../admin-user/admin-reducer';
import { updateUserProfile } from '../userProfile/user-profile-reducer';
import { compose } from 'ramda';
import { useRouter } from 'next/router';

const mapStateToProps = (state) => ({
  tableData: getAllTables(state),
  selectedTables: getSelectedTables(state),
  discountSettings: getDiscountDetails(state)
});
const mapDispatchToProps = {
  selectTable,
  updateUserProfile,
  setDiscount: updateDiscountDetails
};

const CustomerView = ({
  tableData,
  selectedTables,
  selectTable,
  discountSettings,
  setDiscount,
  updateUserProfile
}) => {
  useEffect(() => {
    const storedDiscountSettings = JSON.parse(
      localStorage.getItem('discountSettings')
    );
    if (storedDiscountSettings) {
      setDiscount(storedDiscountSettings);
    }
  }, []);
  const router = useRouter();
  const [tableInView, setTableInView] = useState({});
  const [viewTableData, setViewTableData] = useState(false);

  const totalNoOfDiscountsObtainable = () => {
    return Math.floor(
      selectedTables.length / Number(discountSettings.noOfTables)
    );
  };
  const priceOfDiscountedTables = () => {
    return (
      totalNoOfDiscountsObtainable() * Number(discountSettings.discountPrice)
    );
  };
  const tablesUncoveredByDiscount = () => {
    return selectedTables.length % discountSettings.noOfTables;
  };
  const priceOfUndiscountedTables = () => {
    return tablesUncoveredByDiscount() * discountSettings.pricePerTable;
  };
  const totalPriceToBePaid = () => {
    return priceOfDiscountedTables() + priceOfUndiscountedTables();
  };
  const confirmBooking = () => {
    console.log('total price', totalPriceToBePaid());
  };
  const showInfo = (table) => {
    setTableInView(table);
    setViewTableData(true);
  };
  const closeModal = () => {
    setViewTableData(false);
  };
  const onSelectTable = (payload) => {
    selectTable(payload);
    closeModal();
  };
  const logout = () => {
    updateUserProfile(null);
    router.push('/login');

  };
  return (
    <div>
      {/* <button onClick={confirmBooking}>Confirm booking</button> */}
      <div className='admin'>
        <div className='nav'>
          <h2 className=''>Table Management <span className='nav-span'>(Floor1)</span></h2>
          <p className='' onClick={logout}>Log out</p>
        </div>
        <div className='table-management'>
          <div className='floor1'>
            {tableData.map((table, index) => (
              <div
                key={index}
                className='tables'
                onClick={() => showInfo({ ...table, index: index })}
              >
                <div className='table-icon'>
                  <TableIcon color={table.booked ? '#D9D9D9' : '#ffffff'} />
                </div>
                <p>{table.name}</p>
              </div>
            ))}
          </div>
          <div className='booking-info'>
            <div>
              <div>
                <h4>
                  Hello! You can now book {discountSettings.noOfTables} tables
                  at {discountSettings.discountPrice}
                </h4>
                <h4>
                  You have selected: {!selectedTables.length && '0 tables'}
                </h4>
                {selectedTables.map((table, index) => (
                  <div className='selected-table' key={index}>
                    <p>{table.name}</p>
                    <div
                      className='delete-btn'
                      onClick={() =>
                        onSelectTable({ name: table.name, value: false })
                      }
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                ))}
                <p>
                  Total Price{' '}
                  {!selectedTables.length ? '0' : totalPriceToBePaid()}
                </p>
              </div>
            </div>
          </div>
          {viewTableData && (
            <TableInfo
              tableData={tableInView}
              selectTable={onSelectTable}
              onClose={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerView);
export default compose(
  redirectToAdminScreen('/admin'),
  redirectIfUserIsLoggedOut('/login')
)(connectedComponent);
