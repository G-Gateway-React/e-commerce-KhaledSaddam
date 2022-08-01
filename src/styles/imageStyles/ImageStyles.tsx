import styled from "styled-components";

interface IProps {
  imgWidth?: string;
  imgHeight?: string;
}
export const Image = styled.img<IProps>`
  width: ${(props) => props.imgWidth ?? "100%"};
  height: ${(props) => props.imgHeight ?? "100%"};
  border: none;
  border-radius: 6px;
`;
