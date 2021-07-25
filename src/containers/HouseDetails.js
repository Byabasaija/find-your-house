/* eslint-disable camelcase */

/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchHouse } from '../actions/index';
import { AddFavoriteAction } from '../actions/Favorites';
import '../index.css';

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

  const user_id = useSelector((state) => state.login.user.user.id);
  const house_id = useSelector((state) => state.house.house.id);

  const addFAvorites = (e) => {
    e.preventDefault();
    dispatch(AddFavoriteAction(user_id, house_id));
  };

  return (
    <div className="ui grid container">
      {Object.keys(house).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="container">
          <div className="row">
            <h1 className="mb-3 text-center">{ name }</h1>
            <div className="">
              <div className="">
                <img className="img-fluid" src={image_url} alt={name} />
              </div>
              <div className="">
                <h4 className="pb-3 pt-3">About this House</h4>

                <p>{description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon" />
                  </div>
                  <div className="text-center">
                    <i className="fas fa-angle-down" />
                  </div>
                  <div role="button" tabIndex={0} onClick={(e) => addFAvorites(e)} onKeyUp={(e) => addFAvorites(e)} className="btn-orange">Add to favorites</div>
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
