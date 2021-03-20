import React, { useContext } from 'react';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersListFunction';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
