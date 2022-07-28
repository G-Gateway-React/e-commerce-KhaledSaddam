import styled from "styled-components";

export const NavStyled = styled.nav`
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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
