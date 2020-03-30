import React from 'react';

import {
  Container, Title, LogoSpace, Logo,
} from './styles';

function MyHeader({
  logo,
}) {
  return (
    <Container>
      <LogoSpace>
        <Logo src={logo} />
        <Title>Teste</Title>
      </LogoSpace>
    </Container>
  );
}

export default MyHeader;
