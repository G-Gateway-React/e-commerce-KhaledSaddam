import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => props.imgWidth ?? "100%"};
  height: ${(props) => props.imgHeight ?? "100%"};
  border: none;
  border-radius: 6px;
`;
