import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ href, className, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

ButtonLink.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default ButtonLink;
