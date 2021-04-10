import React, { useState } from 'react';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersListFunction';
import { useParams, Redirect } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, StyledGroupName, StyledLink, StyledButtons } from 'views/Dashboard.styles';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
  const [showGroups, setShowGroups] = useState(false);
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  const groupsShow = () => (!showGroups ? setShowGroups(true) : setShowGroups(false));

  const Groups = () => (
    <StyledButtons>
      <nav>
        {groups.map((group) => (
          <StyledLink key={group} to={`/group/${group}`}>
            <Button>group {group} </Button>
          </StyledLink>
        ))}
      </nav>
    </StyledButtons>
  );

  return (
    <Wrapper>
      <StyledGroupName>
        <h1>Group {id || groups[0]}</h1>
        <Button onClick={groupsShow}>change group</Button>
      </StyledGroupName>
      {showGroups ? <Groups /> : null}
      <ViewWrapper>
        <UsersList />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
