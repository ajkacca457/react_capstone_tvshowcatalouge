import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../components/Footer';

describe('Footer Component', () => {
  it('renders correctly', () => {
    const quotetree = TestRenderer
      .create(<Footer />)
      .toJSON();
    expect(quotetree).toMatchSnapshot();
  });

  test('renders the title text of Footer Component', () => {
    const { getByText } = render(<Footer />);
    const title = getByText('© & Project made by Avijit, Microverse');
    expect(title).toBeInTheDocument();
  });
});
