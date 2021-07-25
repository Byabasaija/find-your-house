/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../actions/index';
import House from '../components/House';

const Houses = (props) => {
  const { houses, fetchHouses } = props;

  useEffect(() => {
    fetchHouses();
  }, []);

  const renderHouses = () => {
    if (houses.loading === true) {
      return (
        <h2>
          Loading ...
        </h2>
      );
    } if (houses.error) {
      return (
        <h2>
          {' '}
          {houses.error}
          {' '}
        </h2>
      );
    }
    return (
      <div className="container">
        <div>
          { houses && houses.houses && houses.houses.map((ahouse) => (
            <House house={ahouse} key={ahouse.id} />))}
        </div>
      </div>
    );
  };

  return (
    <div>{ renderHouses() }</div>
  );
};

const mapStateToProps = (state) => ({
  houses: state.houses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHouses: () => dispatch(fetchHouses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
