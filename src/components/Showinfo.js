/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getsingleShow} from "./actions/showActions"


const Showinfo = (props) => {
  console.log(props);
  const {singleshow:{show,error},getsingleShow}=props;

  const {id}=useParams();
  useEffect(() => {
    getsingleShow(`http://api.tvmaze.com/shows/${id}`);
  }, []);

  const {
    name, summary, image: { original }, language, officialSite, rating: { average },
    runtime, status
  } = show;

  return (
    <div className="showinfo">
      <div className="showinfocont d-block d-md-flex">
        <div className="showimg">
          <img src={original} alt="showimg" style={{ width: '300px', height: '400px' }} />
        </div>
        <div className="showdetails bg-light">
          <h3>{name}</h3>
          <p>
            Language :
            {language}
          </p>
          <p>
            Website:
            {officialSite}
          </p>
          <p className="text-justify">
            {summary.split("").slice(0,400).join("")}
          </p>
          <div className="subinfo d-flex justify-content-around">
            <p>
              Imdb rating:
              {average}
            </p>
            <p>
              Runtime:
              {runtime}
              {' '}
              min
            </p>
            <p>
              Status:
              {status}
            </p>
          </div>
          <Link to="/shows" className="btn btn-danger">Back</Link>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => (
  {
  singleshow: state.singleshow,
});

export default connect(mapStateToProps,{getsingleShow})(Showinfo);
/* eslint-enable */
