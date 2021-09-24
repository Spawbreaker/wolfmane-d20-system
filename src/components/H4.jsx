import styled from 'styled-components';
import theme from './theme.json';

const H4 = styled.h4`
  font-size: 1.2rem;
  margin-top: ${theme.sizing.small};
  margin-bottom: ${theme.sizing.small};
  font-family: ${theme.fonts.title};
  color: ${({ color }) => color}
`;

H4.defaultProps = {
  color: theme.colors.primary,
}

export default H4;
