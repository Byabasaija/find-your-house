/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { fetchFavoriteAction } from '../actions/Favorites';
import House from '../components/House';

const UserFavorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const id = useSelector((state) => state.login.user.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchFavoriteAction(id));
  }, []);

  const renderFavoriteHouses = () => {
    if (favorites.loading === true) {
      return (
        <h2>
          Loading ...
        </h2>
      );
    } if (favorites.error) {
      return (
        <h2>
          {favorites.error}
        </h2>
      );
    }
    return (
      <div className="container">
        <div>
          { favorites && favorites.favorites && favorites.favorites.map((ahouse) => (
            <House house={ahouse} key={ahouse.id} />))}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      { renderFavoriteHouses()}
    </div>
  );
};

export default UserFavorites;
