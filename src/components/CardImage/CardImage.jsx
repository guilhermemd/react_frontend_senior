import channels from "../../img/channels.jpg";
import man_1 from "../../img/man_1.jpg";
import trend from "../../img/trend.jpg";

const CardImage = (props) => {
  const { image } = props;
  const imageRender = (image) => {
    if (image === "man") {
      return man_1;
    }

    if (image === "channels") {
      return channels;
    }

    if (image === "trend") {
      return trend;
    }
  };

  return <img src={imageRender(image)} alt={image} className="card-img" />;
};

export default CardImage;
