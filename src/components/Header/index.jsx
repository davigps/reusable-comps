import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Menu from './subcomponents/Menu';

import {
  Container, Title, LogoSpace,
} from './styles';

function Header({
  logo, title, links, actionButton,
}) {
  const [menuSize, setMenuSize] = useState(null);
  const [useSmall, setUseSmall] = useState(false);

  const containerElem = useRef(null);
  const menuElem = useRef(null);
  const logoSpace = useRef(null);

  const createMenu = () => {
    const containerWidth = containerElem.current ? containerElem.current.offsetWidth : 0;
    if (menuElem.current) setMenuSize(menuElem.current.offsetWidth);
    const logoWidth = logoSpace.current ? logoSpace.current.offsetWidth : 0;

    if (menuSize + logoWidth > containerWidth - 23) {
      if (!useSmall) setUseSmall(true);
    } else if (useSmall) {
      setUseSmall(false);
    }
  };

  useEffect(createMenu, [menuSize]);
  window.onresize = createMenu;

  return (
    <Container ref={containerElem}>
      <LogoSpace ref={logoSpace}>
        { logo ? <img src={logo} alt="Logo" /> : ''}
        <Title>{title}</Title>
      </LogoSpace>

      <Menu
        useSmall={useSmall}
        forwardRef={menuElem}
        links={links}
        actionButton={actionButton}
      />
    </Container>
  );
}

Header.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, to: PropTypes.string.isRequired,
  })).isRequired,
  actionButton: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  logo: '',
  title: '',
  actionButton: undefined,
};

export default Header;
