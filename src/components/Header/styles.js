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

export const LogoSpace = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
