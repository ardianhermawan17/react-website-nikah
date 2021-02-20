import React, { Fragment} from 'react';
import PropTypes from 'prop-types';

const Auth = ({ children }) => (
  <>
    {children}
  </>
  )

Auth.propTypes = {
  children : PropTypes.any
}

export default Auth;
