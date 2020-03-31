import React from 'react';
import PropTypes from 'prop-types';

import {
  MenuSlide, MenuSlideItem,
} from './styles';

const SmallMenuRoutes = ({ clicked, links, actionButton }) => (
  <>
    {
      clicked
        ? (
          <MenuSlide>
            {
              links.map((link) => (
                <MenuSlideItem key={link.name} to={link.to}>{link.name}</MenuSlideItem>
              ))
            }
            { actionButton && (
              <MenuSlideItem to={actionButton.to}>{actionButton.name}</MenuSlideItem>
            ) }
          </MenuSlide>
        )
        : ''
    }
  </>
);

SmallMenuRoutes.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, to: PropTypes.string.isRequired,
  })).isRequired,
  actionButton: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  clicked: PropTypes.bool.isRequired,
};

SmallMenuRoutes.defaultProps = {
  actionButton: undefined,
};

export default SmallMenuRoutes;
