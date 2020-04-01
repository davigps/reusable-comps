import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuNormal = styled.menu`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const MenuNormalItem = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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

export const SmallMenu = styled.button`
  background: none;
  border: none;
  width: 60px;
  cursor: pointer;
`;

export const MenuBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #0572b1;
  margin: 6px 0;
  transition: 0.4s;
`;

export const MenuSlide = styled.aside`
  position: fixed;
  top: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
  border-top: solid 1vh black;
`;

export const MenuSlideItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  width: 100%;
  border-bottom: solid 0.5vh black;

  padding: 2.3vh 0;
  &:hover {
    color: #ccc;
  }
`;
