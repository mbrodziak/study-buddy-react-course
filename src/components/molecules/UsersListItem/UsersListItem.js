import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Average from '../../atoms/Average/Average';
import Button from '../../atoms/Button/Button';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average average={average} />
    <StyledInfo>
      <p>
        {name}
        <Button />
      </p>
      <p> attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
