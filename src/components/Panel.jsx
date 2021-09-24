import styled from 'styled-components';
import theme from './theme.json';

const Panel = styled.div`
  border: 1px solid ${theme.colors.white};
  border-radius: 30px;
  margin: ${theme.sizing.large} ${theme.sizing.none};
  padding: ${theme.sizing.large};
  background-color: ${theme.colors.secondaryLight};
`;

export default Panel;
