/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import House from '../components/House';

const Houses = (props) => {
  const { houses } = props;
  return (
    <div>
      <div>
        { houses.map((ahouse) => (<House house={ahouse} key={ahouse.id} />))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  houses: state.houses,
});

export default connect(mapStateToProps)(Houses);
