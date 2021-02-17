import { GET_SHOWS, GET_SINGLE_SHOW, SHOW_ERRORS } from './types';

export const getShows = () => dispatch => {
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

export const getsingleShow = url => dispatch => {
  try {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_SINGLE_SHOW,
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
