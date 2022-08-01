import styled from "styled-components";

export const SquareColor = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 8px;
`;
