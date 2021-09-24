import styled from 'styled-components';
import theme from './theme.json';

const H3 = styled.h3`
  font-size: 2rem;
  margin-top: ${theme.sizing.small};
  margin-bottom: ${theme.sizing.small};
  font-family: ${theme.fonts.title};
  color: ${({ color }) => color}
`;

H3.defaultProps = {
  color: theme.colors.primary,
}

export default H3;
