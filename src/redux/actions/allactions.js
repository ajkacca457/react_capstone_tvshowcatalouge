import axios from 'axios';
import { FETCH_SHOWS_REQUEST, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAILURE } from './type';

export const fetchShowsRequest = () => ({
  type: FETCH_SHOWS_REQUEST,
});

export const fetchShowsSuccess = shows => ({
  type: FETCH_SHOWS_SUCCESS,
  payload: shows,
});

export const fetchShowsFaluire = error => ({
  type: FETCH_SHOWS_FAILURE,
  payload: error,
});

export const fetchShows = url => (dispatch => {
  dispatch(fetchShowsRequest());
  axios.get(url)
    .then(response => {
      const shows = response.data;
      dispatch(fetchShowsSuccess(shows));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchShowsFaluire(errorMsg));
    });
});
