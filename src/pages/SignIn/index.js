import React from 'react';

import { Rocket } from '~/components';
import { useColors } from '~/hooks/theme';
import documentTitle from '~/utils/documentTitle';

import { Container, Title } from './styles';

export default function SignIn() {
  documentTitle('Login');

  const colors = useColors();

  return (
    <Container>
      <Title>
        <Rocket color={colors.primary} /> React Eddy <Rocket />
      </Title>
    </Container>
  );
}
