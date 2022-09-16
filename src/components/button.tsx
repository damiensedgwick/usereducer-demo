import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 10px;
  margin: 0 auto;
  color: #ffffff;
  background: #14b8a6;
  border: 2px solid #14b8a6;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transition: 250ms ease-in-out;

  &:hover, &:active, &:focus {
    transition: 250ms ease-in-out;
    transform: scale(1.1);
    outline: none;
  }
`;