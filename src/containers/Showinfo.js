/* eslint-disable react/forbid-prop-types */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShow } from '../redux/actions/allactions';

const Showinfo = ({
  loading, show, error, fetchShow,
}) => {
  console.log(loading, error);

  const { id } = useParams();

  useEffect(() => {
    fetchShow(`http://api.tvmaze.com/shows/${id}`);
  }, []);

  console.log(show);

  return (
    <div className="showinfo">
      <h1>Hello</h1>
    </div>
  );
};

Showinfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  show: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  fetchShow: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    loading: state.loading,
    show: state.show,
    error: state.error,
  });

const mapDispatchToProps = dispatch => ({
  fetchShow: url => dispatch(fetchShow(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Showinfo);
