import { CHANGE_FILTER } from './type';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
