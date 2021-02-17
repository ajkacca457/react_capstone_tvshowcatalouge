import { GET_SHOWS, SHOW_ERRORS } from './types';

export const Info = 'what';

export const getShows = () => async dispatch => {
  try {
    fetch('http://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_SHOWS,
          payload: data,
        });
      });
  } catch (err) {
    dispatch({
      type: SHOW_ERRORS,
      payload: err.response.data,
    });
  }
};
