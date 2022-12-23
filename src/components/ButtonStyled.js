import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(
    92.3deg,
    rgba(255, 255, 255, 0.7) 1.85%,
    rgba(255, 255, 255, 0.3) 100%
  );
  color: ${(props) => props.fontColor ?? "#fff"};
  /* width: 15vw;
  height: 6vh; */
  padding: 10px 20px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border: 1.5px solid #fff;
  border-radius: 3px;
  &:hover {
    background: linear-gradient(
      92.3deg,
      rgba(0, 0, 0, 0.7) 1.85%,
      rgba(0, 0, 0, 0.3) 100%
    );
    color: #d1094b;
    cursor: pointer;
    border: 1.5px solid #d1094b;
  }
  &:active {
    box-sizing: border-box;
    border: 1.5px solid rgba(0, 0, 0, 0);
    color: #fff;
  }
`;
