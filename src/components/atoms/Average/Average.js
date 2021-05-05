import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverage } from './Average.styles';

const Average = ({ average }) => <StyledAverage average={average}>{average}</StyledAverage>;

Average.propTypes = {
  average: PropTypes.number.isRequired,
};

export default Average;
