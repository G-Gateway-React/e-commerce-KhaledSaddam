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
  font-weight: 600;
  text-align: center;
  border: 1.5px solid #fff;
  border-radius: 3px;
`;
