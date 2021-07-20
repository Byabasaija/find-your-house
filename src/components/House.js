/* eslint-disable react/prop-types */
const House = (props) => {
  const { house } = props;
  return (
    <div>
      <img src={house.image_url} alt={house.name} className="card-img-top" />
      <h2>{house.name}</h2>
    </div>
  );
};
export default House;
