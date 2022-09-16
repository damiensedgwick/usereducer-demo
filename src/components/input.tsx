import styled from "styled-components";

export const Input = styled.input`
  padding: 5px 0;
  color: #475569;
  border: none;
  border-bottom: 2px solid #64748b;

  &:active, &:focus {
    border: none;
    border-bottom: 2px solid #14b8a6;
    outline: none;
  }
`;