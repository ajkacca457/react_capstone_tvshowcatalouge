import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../components/About';

describe('About Component', () => {
  it('renders correctly', () => {
    const quotetree = TestRenderer
      .create(<About />)
      .toJSON();
    expect(quotetree).toMatchSnapshot();
  });

  test('renders the title text of About page', () => {
    const { getByText } = render(<About />);
    const title = getByText('About TVWORLD');
    expect(title).toBeInTheDocument();
  });
});
