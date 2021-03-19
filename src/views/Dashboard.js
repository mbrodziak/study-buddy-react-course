import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersListFunction';
import { UserShape } from 'types';

const Dashboard = ({ users, deleteUser }) => {
  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
