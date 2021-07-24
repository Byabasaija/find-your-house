/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../index.css';

const House = (props) => {
  const { house } = props;
  return (
    <div>
      <Link to={`/house/${house.id}`} className="link">
        <div className="card">
          <img src={house.image_url} alt={house.name} className="card-img-top" />
          <h2 className="card-title">{house.name}</h2>
        </div>
      </Link>
    </div>
  );
};
export default House;
