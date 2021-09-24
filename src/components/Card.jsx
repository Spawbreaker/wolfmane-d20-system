import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H3 from './H3';
import Text from './Text';
import theme from './theme.json';

const StyledCard = styled.div`
  background-color: ${({ active }) => active ? theme.colors.tertiary : theme.colors.tertiaryLight};
  border: 1px solid ${theme.colors.tertiary};
  padding: ${theme.sizing.small} ${theme.sizing.large};
  margin-bottom: ${theme.sizing.small};
  border-radius: 1rem;
  min-width: 8rem;
  cursor: pointer;
`;


const Card = ({ onClick, title, content, active }) => (
  <StyledCard onClick={onClick} active={active}>
    <H3 color={theme.colors.secondary}>{title}</H3>
    {content && <Text color={theme.colors.secondary}>{content}</Text>}
  </StyledCard>
);

Card.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  active: PropTypes.bool,
};

export default Card;
