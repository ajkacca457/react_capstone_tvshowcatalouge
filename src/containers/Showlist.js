/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Showitem from '../components/Showitem';
import Loading from '../components/loading';
import { fetchShows } from '../redux/actions/allactions';
import { changeFilter } from '../redux/actions/filterAction';
import Filter from '../components/Filter';

const Showlist = ({
  loading, shows, error, filter, fetchShows, changeFilter,
}) => {
  useEffect(() => {
    fetchShows('http://api.tvmaze.com/shows?page=1');
  }, []);

  if (loading) {
    return (<Loading />);
  }

  if (error) {
    return (
      <div className="error text-danger">
        <h2 className="bg-white  p-3 rounded">{error}</h2>
      </div>
    );
  }

  if (shows) {
    const filteredshows = (filter === '' ? shows : shows.filter(show => show.name.includes(filter)));
    return (
      <div className="showlist">
        <Filter changeFilter={changeFilter} />
        <div className="showcont">
          {filteredshows.length === 0 ? <div className="text-white rounded"><h4>Your search doesnt match with any show here.</h4></div> : filteredshows.map(item => (
            <Showitem key={item.id} show={item} />
          ))}
        </div>
      </div>
    );
  }
};

Showlist.propTypes = {
  loading: PropTypes.bool.isRequired,
  shows: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  fetchShows: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    loading: state.shows.loading,
    shows: state.shows.shows,
    error: state.shows.error,
    filter: state.filter.filter,
  });

const mapDispatchToProps = dispatch => ({
  fetchShows: url => dispatch(fetchShows(url)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Showlist);
