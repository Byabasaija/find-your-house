/* eslint-disable camelcase */

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { fetchHouse, AddFavoriteAction } from '../api/api';
import Header from '../components/Header';
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
  }, [id]);

  const house_id = useSelector((state) => state.house.house.id);
  const btnRef = useRef();
  const addFAvorites = () => {
    dispatch(AddFavoriteAction(house_id));
  };

  const handleClickBtn = (e) => {
    e.preventDefault();
    if (btnRef.current) {
      addFAvorites();
      btnRef.current.setAttribute('disabled', 'disabled');
    }
  };

  const favorited = useSelector((state) => state.house.house.id);
  const favHouse = useSelector((state) => state.addFav.fav.favorites);
  const renderBtn = () => {
    if (favHouse === undefined) {
      return (
        <button
          type="button"
          ref={btnRef}
          onClick={(e) => handleClickBtn(e)}
          className="fav btn-orange"
        >
          Add to favorites
        </button>
      );
    } if (favHouse !== undefined && favHouse.house_id === favorited) {
      return <p>Added to favorites</p>;
    }

    return (
      <button
        type="button"
        ref={btnRef}
        onClick={(e) => handleClickBtn(e)}
        className="fav btn-orange"
      >
        Add to favorites
      </button>
    );
  };

  return (
    <div className="ui grid container">
      <Header />
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
                  {

                    renderBtn()
                  }
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
