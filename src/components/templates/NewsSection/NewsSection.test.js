import React from 'react';
import { render, screen } from 'test-utils';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, { query } from 'components/templates/NewsSection/NewsSection';

const mock = new MockAdapter(axios);

describe('News section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    render(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    render(<NewsSection />);
    await screen.findAllByText(/Test/);
  });

  it('Displays loading info when article are loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    render(<NewsSection />);
    await screen.findAllByText(/Loading/);
  });

  it('Displays loading info when article are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    render(<NewsSection />);
    await screen.findAllByText(/Loading/);
  });
});
