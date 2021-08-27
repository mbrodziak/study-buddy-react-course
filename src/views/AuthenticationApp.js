import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from 'views/Root.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Notes from 'views/Notes';

const AuthenticationApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticationApp;
