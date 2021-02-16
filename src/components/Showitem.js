import React from 'react';
import PropTypes from 'prop-types';

const Showitem = props => {
  const { show: { name, image: { medium }, rating: { average } } } = props;
  console.log(props);
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
      </div>
    </div>
  );
};

Showitem.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
    rating: PropTypes.shape({
      average: PropTypes.string,
    }),
  }).isRequired,
};

export default Showitem;
