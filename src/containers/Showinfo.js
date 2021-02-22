/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShow } from '../redux/actions/allactions';
import Loading from '../components/loading';

const Showinfo = ({
  loading, show, error, fetchShow,
}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchShow(`https://api.tvmaze.com/shows/${id}`);
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

  if (show) {
    return (
      <div className="showinfo">
        <div className="showinfocont d-block d-md-flex">
          <div className="showimg bg-white">
            <img src={show.image && show.image.original} alt="display" className="info-img" />
          </div>
          <div className="showdetails bg-light">
            <h3>{show.name}</h3>
            <p>
              Language :
              <b>
                {' '}
                {' '}
                {show.language}
              </b>
            </p>
            <p>
              Website:
              <b>
                {' '}
                {' '}
                {show.officialSite}
              </b>
            </p>
            <p className="text-justify">
              {show.summary}
            </p>
            <div className="subinfo">
              <p>
                Genres:
                {show.genres && show.genres.map(genre => (
                  <span key={genre}>
                    <b>
                      {' '}
                      {genre}
                    </b>
                  </span>

                ))}
              </p>
              <p>
                {' '}
                Type:
                <b>
                  {' '}
                  {show.type}
                </b>
              </p>
              <p>
                Imdb rating:
                <b>
                  {' '}
                  {' '}
                  {show.rating && show.rating.average}
                </b>
              </p>
              <p>
                Runtime:
                <b>
                  {' '}
                  {show.runtime}
                  {' '}
                  min
                </b>
              </p>
              <p>
                Status:
                <b>
                  {' '}
                  {' '}
                  {show.status}
                </b>
              </p>
              <p>
                Schedule:
                <b>
                  {' '}
                  {show.schedule && show.schedule.time}
                  ,
                  {show.schedule && show.schedule.days[0]}
                </b>
              </p>
            </div>
          </div>
        </div>
        <Link to="/shows" className="btn btn-info w-25 mt-2">Back</Link>
      </div>
    );
  }
};

Showinfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  show: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  fetchShow: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    loading: state.shows.loading,
    show: state.shows.show,
    error: state.shows.error,
  });

const mapDispatchToProps = dispatch => ({
  fetchShow: url => dispatch(fetchShow(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Showinfo);
