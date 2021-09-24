import styled from 'styled-components';
import theme from './theme.json';

const Button = styled.button`
  display: inline-flex;
  flex: none;
  align-items: center;
  appearance: none;
  border: 1px solid ${theme.colors.primaryDark};
  border-radius: 0.5rem;
  font-family: ${theme.fonts.general};
  font-weight: 600;
  font-size: 1rem;
  justify-content: center;
  line-height: 1.5rem;
  padding: ${theme.sizing.large};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primaryLight};
  }

  &:active {
    background-color: ${theme.colors.primaryDark};
    border-style: 1px solid ${theme.colors.primaryDark};
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export default Button;
