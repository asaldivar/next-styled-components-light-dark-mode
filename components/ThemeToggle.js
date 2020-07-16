import React from "react";
import styled from "styled-components";

function ThemeToggle({ theme, toggleTheme }) {
  return <Button onClick={toggleTheme}>{theme}</Button>;
}

const Button = styled.button`
  letter-spacing: 0.1em;
  font-weight: bold;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.text};
  border-style: none;
  margin: 16px;
  cursor: pointer;
  padding: 8px;
  :focus {
    outline: 0;
  }
`;

export default ThemeToggle;
