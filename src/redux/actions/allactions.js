import axios from 'axios';
import {
  FETCH_SHOWS_REQUEST, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAILURE, FETCH_SHOW_SUCCESS,
} from './type';

export const fetchShowsRequest = () => ({
  type: FETCH_SHOWS_REQUEST,
});

export const fetchShowsSuccess = shows => ({
  type: FETCH_SHOWS_SUCCESS,
  payload: shows,
});

export const fetchShowSuccess = show => ({
  type: FETCH_SHOW_SUCCESS,
  payload: show,
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

export const fetchShow = url => (dispatch => {
  dispatch(fetchShowsRequest());
  axios.get(url)
    .then(response => {
      const show = response.data;
      dispatch(fetchShowSuccess(show));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchShowsFaluire(errorMsg));
    });
});
