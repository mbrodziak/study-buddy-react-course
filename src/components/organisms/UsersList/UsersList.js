import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UserList.styles';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} key={userData.name} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
