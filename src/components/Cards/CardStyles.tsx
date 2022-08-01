import { Link } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;

  div {
    position: relative;
    width: 30%;
    &:hover {
      filter: grayscale(100%);
    }
    &:hover .overlay {
      opacity: 1;
      filter: grayscale(100%);
    }
    .overlay {
      position: absolute;
      bottom: 1.5rem;
      /*background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.1);  Black see-through */
      color: #f1f1f1;
      text-shadow: #000 1px 0 10px;
      /* box-shadow: 0 -20px 50px grey; */
      width: 100%;
      margin: 10px 5px;
      transition: 0.5s ease;
      opacity: 0;
      color: white;
      font-size: 2rem;
      font-weight: bold;
      padding: 20px;
      text-align: center;
      border-radius: 0 0 4px 4px;
    }

    .category-name {
      justify-content: center;
    }
  }
`;

export const CardImg = styled.img`
  width: 100%;
  margin-top: 10px;
  margin: 5px;
  border-radius: 4px;
  object-fit: none;
`;
