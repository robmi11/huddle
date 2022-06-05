import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  &:active {
    opacity: 0.5;
    transform: scale3d(0.5);
  }
`;
