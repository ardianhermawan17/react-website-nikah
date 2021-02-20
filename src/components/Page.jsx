import React, {
  forwardRef
} from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Page = forwardRef(({
  title,
  children,
  ...rest
}, ref) => (
  // Render Component
  <div
    ref={ref}
    {...rest}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
  ))

Page.propTypes = {
  title : PropTypes.string,
  children: PropTypes.node,
}

Page.displayName = 'Page';

export default Page;
