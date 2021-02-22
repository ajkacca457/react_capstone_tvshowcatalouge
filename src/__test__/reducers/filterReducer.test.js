import filterReducer, { initialstate } from '../../redux/reducers/filterReducer';

test('initialState to be as expected', () => {
  expect(initialstate).toEqual({
    filter: '',
  });
});

test('filterReducer doesn\'t change filter when given wrong action ', () => {
  const action = {
    type: 'blah',
    filter: 'hello',
  };
  expect(filterReducer(initialstate, action)).not.toEqual({
    ...initialstate,
    filter: 'hello',
  });
});
