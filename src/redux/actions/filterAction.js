export const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
