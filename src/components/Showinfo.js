/* eslint-disable react/forbid-prop-types */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getsingleShow } from './actions/showActions';

const Showinfo = props => {
  const {
    name, language, officialSite, summary,
    runtime, status, premiered, getsingleShow,
  } = props;

  const { id } = useParams();
  useEffect(() => {
    getsingleShow(`http://api.tvmaze.com/shows/${id}`);
  }, []);

  return (
    <div className="showinfo">
      <div className="showinfocont d-block d-md-flex bg-light">
        <div className="showdetails">
          <h2>{name}</h2>
          <p>
            Language :
            {language}
          </p>
          <p>
            Website:
            <h5>{officialSite}</h5>
          </p>
          <p className="text-justify">
            {summary}
          </p>
          <p>
            First premiered:
            <h5>{premiered}</h5>
          </p>
          <p>
            Runtime:
            <h5>
              {runtime}
              min
            </h5>
          </p>
          <p>
            Status:
            <h5>{status}</h5>
          </p>
          <Link to="/shows" className="btn btn-danger">Back</Link>
        </div>
      </div>
    </div>
  );
};

Showinfo.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  officialSite: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  premiered: PropTypes.string.isRequired,
  getsingleShow: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    name: state.singleshow.show.name,
    language: state.singleshow.show.language,
    officialSite: state.singleshow.show.officialSite,
    summary: state.singleshow.show.summary,
    runtime: state.singleshow.show.runtime,
    status: state.singleshow.show.status,
    premiered: state.singleshow.show.premiered,
  });

export default connect(mapStateToProps, { getsingleShow })(Showinfo);
