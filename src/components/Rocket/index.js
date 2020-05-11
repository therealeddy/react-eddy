import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Rocket({ color }) {
  console.tron.log(color);

  return (
    <Container>
      <span role="img" aria-label="rocket">
        🚀
      </span>
    </Container>
  );
}

Rocket.propTypes = {
  color: PropTypes.string,
};

Rocket.defaultProps = {
  color: '#ffffff',
};
