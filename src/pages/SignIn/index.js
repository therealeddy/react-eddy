import React from 'react';

import documentTitle from '~/utils/documentTitle';

import { Container, Title } from './styles';

import { Rocket } from '~/components';

export default function SignIn() {
  documentTitle('Login');

  return (
    <Container>
      <Title>
        <Rocket /> Eddy React <Rocket />
      </Title>
    </Container>
  );
}
