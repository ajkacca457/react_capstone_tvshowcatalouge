/* eslint-disable react/forbid-prop-types */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Showitem from './Showitem';
import Filter from './Filter';
import { getShows } from './actions/showActions';

const Showlist = ({ shows, getShows }) => {
  useEffect(() => {
    getShows();
  }, []);

  return (
    <div className="showlist">
      <Filter />
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
  getShows: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    shows: state.show.shows,
  });

export default connect(mapStateToProps, { getShows })(Showlist);
