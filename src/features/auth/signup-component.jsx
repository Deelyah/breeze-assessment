import AuthForm from '@/features/auth/auth-form';
import { useState } from 'react';
import { connect } from 'react-redux';
import { startLoading, slice } from '../app-loader/app-loader-reducer';
// import { createProfile, getProfile } from './auth-service';
import { setUserCredentials, signup } from './auth-reducer';

const mapStateToProps = (state) => {
  return { loading: state[slice].loading };
};
const mapDispatchToProps = {
  setUserCredentials,
  startLoading,
  signup
};
const SignupComponent = ({ setUserCredentials, startLoading, signup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false,
    UID: ''
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
    const UID = formData.email.trim() + formData.password.trim();
    setUserCredentials({ ...formData, UID: UID });
    startLoading();
    signup();
  };
  return (
    <AuthForm
      action='Sign Up'
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCheckbox={handleCheckbox}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
