import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loading from '../../components/loading';

describe('Loading Component', () => {
  test('renders the title text of Loading Component', () => {
    const { getByText } = render(<Loading />);
    const title = getByText('Loading Shows ....');
    expect(title).toBeInTheDocument();
  });
});
