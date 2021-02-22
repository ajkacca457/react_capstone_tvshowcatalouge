import showsReducer, { initialstate } from '../../redux/reducers/showsReducer';

test('initialState to be as expected', () => {
  expect(initialstate).toEqual({
    loading: false,
    shows: [],
    show: {},
    error: '',
  });
});

test('showsReducer can start fetching', () => {
  const action = { type: 'FETCH_SHOWS_REQUEST' };
  expect(showsReducer(initialstate, action)).toEqual({
    ...initialstate,
    loading: true,
    shows: [],
    show: {},
    error: '',
  });
});

test('showsReducer can fail to fetch data', () => {
  const action = {
    type: 'FETCH_SHOWS_FAILURE',
    error: Error(),
  };
  expect(showsReducer(initialstate, action)).toEqual({
    ...initialstate,
    loading: false,
    shows: [],
    show: {},
    error: undefined,
  });
});
