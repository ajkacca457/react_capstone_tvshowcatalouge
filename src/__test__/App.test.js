import React from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('App Component', () => {
  it('renders correctly', () => {
    const apptree = TestRenderer
      .create(<App />)
      .toJSON();
    expect(apptree).toMatchSnapshot();
  });
});
