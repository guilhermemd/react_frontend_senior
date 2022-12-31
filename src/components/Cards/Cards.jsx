import "./Cards.css";
import CounterAnimation from "../CouterAnimation";
import CardImage from "../CardImage";
const Cards = (props) => {
  const { items } = props;
  console.log({ props });
  return (
    <div className="container">
      <h1 className="card-title">Our Followers</h1>
      <div className="card-part">
        {items.map(({ image, totalFollowers, instagram }) => (
          <div className="card">
            <CardImage image={image} />
            <CounterAnimation totalValue={totalFollowers} />
            {instagram}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
