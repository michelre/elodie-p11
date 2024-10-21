import './card.scss';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <Link 
      to={`locations/${props.id}`} 
      className="location-card" 
      style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%), url(${props.image})` }} 
    >
      <p>{props.title}</p>
    </Link>
  );
};

export default Card;
