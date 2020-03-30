import React from 'react';

import {
  Container, Title, LogoSpace, Logo,
} from './styles';

function MyHeader({
  logo, title,
}) {
  return (
    <Container>
      <LogoSpace>
        <Logo src={logo} />
        <Title>{title}</Title>
      </LogoSpace>
    </Container>
  );
}

export default MyHeader;
