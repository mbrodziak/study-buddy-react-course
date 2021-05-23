import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { worker } from 'mocks/browser';
import AppProviders from 'providers/AuthProviders';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
