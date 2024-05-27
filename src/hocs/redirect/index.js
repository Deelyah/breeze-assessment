import {
  userRoleIsAdmin,
  userRoleIsNotAdmin,
  userIsLoggedIn,
  userIsLoggedOut
} from '@/features/userProfile/user-profile-reducer';


import withRedirect from './with-redirect';
export const redirectToAdminScreen = withRedirect(userRoleIsAdmin);
export const redirectToUserScreen = withRedirect(userRoleIsNotAdmin);
export const redirectIfUserIsLoggedin = withRedirect(userIsLoggedIn);
export const redirectIfUserIsLoggedOut = withRedirect(userIsLoggedOut);
export const redirectToLogin = withRedirect(()=>true)
