import { combineReducers } from '@reduxjs/toolkit';

import {
  reducer as appLoaderReducer,
  slice as appLoaderSlice
} from '@/features/app-loader/app-loader-reducer';
import {
  reducer as bookingsReducer,
  slice as bookReducerSlice
} from '@/features/bookings/bookings-reducer';
import {
  reducer as userProfileReducer,
  slice as userProfileSlice
} from '@/features/userProfile/user-profile-reducer';
import {
  reducer as authReducer,
  slice as authSlice
} from '@/features/auth/auth-reducer';
import { reducer as customerReducer, slice as customerSlice } from '@/features/customer/customer-reducer';
import { reducer as adminReducer, slice as adminSlice } from '@/features/admin-user/admin-reducer';
export const rootReducer = combineReducers({
  [appLoaderSlice]: appLoaderReducer,
  [bookReducerSlice]: bookingsReducer,
  [userProfileSlice]: userProfileReducer,
  [authSlice]: authReducer,
  [customerSlice]: customerReducer,
  [adminSlice]: adminReducer
});

// We retuen the initial state here as the reduce fn will return the fallback value of a reducer if
export const rootState = rootReducer(undefined, { type: '' });
