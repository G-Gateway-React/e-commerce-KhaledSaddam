import styled from "styled-components";
import { INav } from "./Nav";
export const NavStyled = styled.nav<INav>`
  z-index: 1;
  overflow: hidden;
  margin-bottom: 2rem;
  position: ${(props) => props.isHome && "absolute"};
  top: 0;
  width: 100%;
  height: 80px;
  color: ${(props) => props.isHome && "#fff"};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  width: 100%;
  padding: 0 10vw;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin: 0 8px;
    display: flex;
    align-items: center;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const LogoWhite = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;
export const LogoBlack = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;
