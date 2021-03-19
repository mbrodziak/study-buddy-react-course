import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Average from '../../atoms/Average/Average';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average average={average} />
    <StyledInfo>
      <p>
        {name}
        <DeleteButton onClick={() => deleteUser(name)} />
      </p>
      <p> attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
);

UsersListItem.propTypes = {
  deleteUser: PropTypes.func,
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
