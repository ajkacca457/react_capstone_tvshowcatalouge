import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ changeFilter }) => (
  <div className="filter">
    <input
      type="text"
      className="form-control"
      placeholder="Search Shows"
      onChange={e => changeFilter(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
