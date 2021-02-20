import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const AccountGuard = ({ children }) => {
  const user = useSelector((state) => state.account.user);

  if(!user.username) {
    return <Redirect to="/masuk" />
  }

  return children;
}

AccountGuard.propTypes = {
  children: PropTypes.any
}

export default AccountGuard;
