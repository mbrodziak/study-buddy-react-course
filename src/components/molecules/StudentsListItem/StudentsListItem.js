import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './StudentsListItem.styles';
import Average from '../../atoms/Average/Average';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
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
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
