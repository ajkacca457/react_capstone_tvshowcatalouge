import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Showitem = props => {
  const {
    show: {
      id, image: { medium }, name, rating: { average },
    },
  } = props;
  return (
    <div className="showitem">
      <img src={medium} alt="showimage" />
      <div className="infocont">
        <h5 className="mt-1">{name}</h5>
        {' '}
        <h5>
          IMDB:
          {average}
        </h5>
        <Link to={`/shows/${id}`} className="btn btn-danger">Show Info</Link>
      </div>
    </div>
  );
};

Showitem.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
    rating: PropTypes.shape({
      average: PropTypes.number,
    }),
  }).isRequired,
};

export default Showitem;
