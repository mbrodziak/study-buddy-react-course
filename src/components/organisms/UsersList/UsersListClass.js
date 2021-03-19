import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    console.log('Class component');
    this.setState({ isLoading: true });
    mockAPI()
      .then((data) => {
        this.setState({ isLoading: false });
        this.setState({ users: data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed');
    }
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading...' : 'Users list'}</h1>
        <StyledList>
          {this.state.users.map((userData) => (
            <UsersListItem deleteUser={this.deleteUser} userData={userData} key={userData.name} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
