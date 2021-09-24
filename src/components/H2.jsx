import styled from 'styled-components';
import theme from './theme.json';

const H2 = styled.h2`
  font-size: 4rem;
  margin-top: ${theme.sizing.none};
  margin-bottom: ${theme.sizing.medium};
  font-family: ${theme.fonts.title};
  color: ${theme.colors.primary}
`;

export default H2;
