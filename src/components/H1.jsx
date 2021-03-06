import styled from 'styled-components';
import theme from './theme.json';

const H1 = styled.h1`
  font-size: 6rem;
  margin-top: ${theme.sizing.small};
  margin-bottom: ${theme.sizing.large};
  font-family: ${theme.fonts.title};
  color: ${theme.colors.primary}
`;

export default H1;
