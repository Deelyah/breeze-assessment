import AuthForm from '@/features/auth/auth-form';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startLoading } from '../app-loader/app-loader-reducer';
import {
  setUserCredentials,
  slice as authSlice,
  loginAsAdmin,
  loginAsUser
} from './auth-reducer';
import {
  userProfileSlice,
  userRoleIsAdmin
} from '../userProfile/user-profile-reducer';
import { redirectIfUserIsLoggedin } from '@/hocs/redirect';
import { rootState } from '@/redux/rootReducer';

const mapStateToProps = (state) => {
  return {
    userProfileSlice: userProfileSlice(state),
    userRoleIsAdmin: userRoleIsAdmin(state)
  };
};

const mapDispatchToProps = {
  setUserCredentials,
  startLoading,
  loginAsAdmin,
  loginAsUser
};
const LoginComponent = ({
  setUserCredentials,
  startLoading,
  loginAsAdmin,
  loginAsUser,
  userProfileSlice,
  userRoleIsAdmin
}) => {
  useEffect(() => {
    console.log('from my component', userRoleIsAdmin);
  }, [userProfileSlice]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckbox = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.stopPropagation();

    const UID = formData.email.trim() + formData.password.trim();
    setUserCredentials({ ...formData, UID: UID });
    startLoading();
    loginAsUser();
  };
  return (
    <AuthForm
      action='Login'
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCheckbox={handleCheckbox}
    />
  );
};
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
export default redirectIfUserIsLoggedin('/admin')(connectedComponent);
