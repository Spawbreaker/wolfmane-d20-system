import styled from 'styled-components';
import theme from './theme.json';

const Text = styled.p`
  font-size: ${theme.sizing.large};
  font-family: ${theme.fonts.general};
  color: ${({ color }) => color};
  font-weight: 400;
  margin-bottom: ${theme.sizing.large};
`;

Text.defaultProps = {
  color: theme.colors.white,
}

export default Text;
