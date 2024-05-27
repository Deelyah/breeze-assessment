import { useState } from 'react';
import { updateUserProfile } from '../userProfile/user-profile-reducer';
import { redirectIfUserIsLoggedOut } from '@/hocs/redirect';
import { connect } from 'react-redux';
const mapDispatchToProps = {
  updateUserProfile
};
const AdminView = ({ updateUserProfile }) => {
  const [discountSettings, setDiscount] = useState({
    pricePerTable: 100,
    noOfTables: 2,
    discountPrice: 150
  });
  const handleChage = (e) => {
    setDiscount((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const savePrices = () => {
    localStorage.setItem('discountSettings', JSON.stringify(discountSettings));
  };
  const logout = () => {
    updateUserProfile(null);
  };
  return (
    <div className='admin'>
      <div className='nav'>
        <h2 className=''>Cordelia</h2>
        <p onClick={logout}>Log out</p>
      </div>
      <div className='admin-content'>
        <h4 className='topic'>Discount Settings</h4>
        <p>Update your discount settings here</p>
        <div className='discount'>
          <div className='settings'>
            <div className=''>
              <div className='discount-bg'></div>
              <div className='discount-setting'>
                <div className='discount-field'>
                  <div>
                    <label htmlFor='noOfTables'>No of Tables</label>
                    <input
                      type='text'
                      name='noOfTables'
                      id=''
                      placeholder='How many tables'
                      onChange={(e) => handleChage(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor='discountPrice'>Discount Price</label>
                    <input
                      type='text'
                      name='discountPrice'
                      id=''
                      placeholder='How much?'
                      onChange={(e) => handleChage(e)}
                    />
                  </div>
                </div>
                <div className='discount-padding'>
                  <div>
                    <label htmlFor='pricePerTable'>
                      Default Price Per Table
                    </label>
                    <input
                      type='text'
                      name='pricePerTable'
                      placeholder='Original Price per table'
                      id=''
                      onChange={(e) => handleChage(e)}
                    />
                  </div>
                  <button onClick={savePrices}>Save prices</button>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='settings'>
              <div>
                <div className='discount-bg'></div>
                <div className='discount-padding'>
                  <div className='disount-info'>
                    <h4>No of Tables</h4>
                    <p>
                      This represents the number of tables for which a discount
                      is available
                    </p>
                  </div>
                  <div className='disount-info'>
                    <h4>Discount Price </h4>
                    <p>
                      This represents the price for each number of discounted
                      tables
                    </p>
                  </div>
                  <div className='disount-info'>
                    <h4>Default Price Per Table</h4>
                    <p>
                      This represents the price for a table when there are no
                      discounts available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const connectedComponent = connect(null, mapDispatchToProps)(AdminView);
export default redirectIfUserIsLoggedOut('/login')(connectedComponent);
