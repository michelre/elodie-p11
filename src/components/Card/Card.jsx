import './card.scss';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <Link 
      to={`locations/${props.id}`} 
      className="location-card" 
      style={{ backgroundImage: `url(${props.image})` }} 
    >
      <p>{props.title}</p>
    </Link>
  );
};

export default Card;
