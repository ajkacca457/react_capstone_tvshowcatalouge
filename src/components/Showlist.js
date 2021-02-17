/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Showitem from './Showitem';
import Filter from './Filter';
import {getShows} from "./actions/showActions"

const Showlist =({show:{shows,error},getShows})=> {

  useEffect(() => {
    getShows()
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
  tvshow: PropTypes.shape({
    tvshow: PropTypes.string,
  }),
};

const mapStateToProps = state => (
  {
  show: state.show,
});

export default connect(mapStateToProps,{getShows})(Showlist);
/* eslint-enable */
