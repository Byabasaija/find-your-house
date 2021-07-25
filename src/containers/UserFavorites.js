/* eslint-disable camelcase */

/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { fetchFavoriteAction } from '../actions/Favorites';
import House from '../components/House';

const UserFavorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchFavoriteAction());
  }, []);

  return (
    <div className="container">
      <div>
        {favorites.map((ahouse) => (
          <House house={ahouse} key={ahouse.id} />))}
      </div>
    </div>
  );
};

export default UserFavorites;
