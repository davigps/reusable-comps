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

  background-color: black;
  opacity: 60%;
`;

export const LogoSpace = styled.div`
  margin-right: auto;
`;

export const Logo = styled.img`
  
`;

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: bold;
`;
