/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchHouse } from '../actions/index';

const HouseDetails = () => {
//   const house = useSelector((state) => state.house.house);
  const { id } = useParams();
  useEffect(() => {
    fetchHouse(id);
  }, [id]);

  //   const renderDetails = () => {
  //     if (house.loading) {
  //       <h2>
  //         Loading---
  //       </h2>;
  //     }
  //   };

  return (
    <div>
      <h2>

        House Details
      </h2>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchHouse: () => dispatch(fetchHouse()),
});

export default connect(null, mapDispatchToProps)(HouseDetails);
