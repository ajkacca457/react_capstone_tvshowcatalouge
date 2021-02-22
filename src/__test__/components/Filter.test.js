/*eslint-disable*/
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Filter from '../../components/Filter';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => shallow(<Filter />);

describe('Filter component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should check visibility of component', () => {
    const element = component.find('.form-control');
    expect(element).toBeVisible;
  });

  it('Should check lenght of component', () => {
    const element = component.find('.form-control');
    expect(element.length).toEqual(1);
  });

  it('Should check existance of component', () => {
    const element = component.find('.form-control');
    expect(element).toBeTruthy;
  });

  it('Should check correct component renders', () => {
    const element = component.find('.search');
    expect(element).toBeFalsy;
  });

  test('renders the form-control in the page', () => {
    const item = component.find('.form-control');
    expect(item).toMatchSnapshot();
  });
});
