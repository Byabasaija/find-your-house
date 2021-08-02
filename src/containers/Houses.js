import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { fetchHouses } from '../api/api';
import House from '../components/House';
import UserFavorites from './UserFavorites';
import HouseDetails from './HouseDetails';

const Houses = (props) => {
  <Switch>
    <Route exact path="/house/:id" component={HouseDetails} />
    <Route exact path="/my-favorites" component={UserFavorites} />
  </Switch>;
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

Houses.propTypes = {
  houses: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    houses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  fetchHouses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  houses: state.houses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHouses: () => dispatch(fetchHouses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
