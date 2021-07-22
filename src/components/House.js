/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const House = (props) => {
  const { house } = props;
  return (
    <div>
      <Link to={`/house/${house.id}`}>
        <img src={house.image_url} alt={house.name} className="card-img-top" />
        <h2>{house.name}</h2>
      </Link>
    </div>
  );
};
export default House;
