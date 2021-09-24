import styled from 'styled-components';
import theme from './theme.json';

const Link = styled.a`
  color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.primaryLight};
  }
`;

export default Link;
