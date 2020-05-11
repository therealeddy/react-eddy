import React from 'react';

import PropTypes from 'prop-types';

export default function Rocket({ color }) {
  console.tron.log(color);

  return (
    <span role="img" aria-label="rocket">
      🚀
    </span>
  );
}

Rocket.propTypes = {
  color: PropTypes.string,
};

Rocket.defaultProps = {
  color: '#ffffff',
};
