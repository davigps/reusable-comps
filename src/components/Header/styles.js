import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 90px;
  padding-left: 20px;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const LogoSpace = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

export const Menu = styled.menu`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const MenuItem = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  margin-right: 3vw;
  &:hover {
    color: #ccc;
  }
`;

export const ActionButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  margin-right: 3vw;

  background-color: #0572b1;
  padding: 20px 40px;
  border-radius: 70px;

  &:hover {
    filter: brightness(70%);
  }
`;
