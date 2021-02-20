/* eslint-disable react/forbid-prop-types */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Showitem from '../components/Showitem';
import { fetchShows } from '../redux/actions/allactions';

const Showlist = ({ shows, fetchShows }) => {
  useEffect(() => {
    fetchShows('http://api.tvmaze.com/shows?page=1');
  }, []);

  console.log(shows);

  return (
    <div className="showlist">
      <div className="showcont">
        {shows.map(item => (
          <Showitem key={item.id} show={item} />
        ))}
      </div>
    </div>
  );
};

Showlist.propTypes = {
  shows: PropTypes.object.isRequired,
  fetchShows: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    shows: state.shows,
  });

const mapDispatchToProps = dispatch => ({
  fetchShows: url => dispatch(fetchShows(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Showlist);
