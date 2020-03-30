import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Title, LogoSpace, Menu, MenuItem, ActionButton,
} from './styles';

function Header({
  logo, title, links, actionButton,
}) {
  return (
    <Container>
      <LogoSpace>
        { logo ? <img src={logo} alt="Logo" /> : ''}
        <Title>{title}</Title>
      </LogoSpace>

      <Menu>
        {
          links.map((link) => (
            <MenuItem key={link.name} to={link.to}>{link.name}</MenuItem>
          ))
        }
        {
          actionButton
            ? (<ActionButton to={actionButton.to}>{actionButton.name}</ActionButton>)
            : ''
        }
      </Menu>
    </Container>
  );
}

Header.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string, to: PropTypes.string,
  })).isRequired,
};

Header.defaultProps = {
  logo: '',
  title: '',
};

export default Header;
