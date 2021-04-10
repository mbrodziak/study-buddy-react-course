import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router';

const UsersList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
