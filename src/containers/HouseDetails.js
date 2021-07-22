/* eslint-disable camelcase */

/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchHouse } from '../actions/index';

const HouseDetails = () => {
  const house = useSelector((state) => state.house.house);
  const { name, image_url, description } = house;
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (house !== house.id) {
      dispatch(fetchHouse(id));
    }
  }, []);

  return (
    <div className="ui grid container">
      {Object.keys(house).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col">House Details</div>
            <div className="">
              <div className="">
                <img className="img-fluid" src={image_url} alt={name} />
              </div>
              <div className="">
                <h1>{name}</h1>

                <p>{description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon" />
                  </div>
                  <div className="btn btn-primary">Add to favorites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseDetails;
