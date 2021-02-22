import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../components/Home';

describe('Home Component', () => {
  it('renders correctly', () => {
    const hometree = TestRenderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      )
      .toJSON();
    expect(hometree).toMatchSnapshot();
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const title = getByText('TVWORLD');
    expect(title).toBeInTheDocument();
  });

  test('renders the subheading in the page', () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const title = getByText('Home of Your Entertainment');
    expect(title).toBeInTheDocument();
  });
});
