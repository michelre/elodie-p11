import './rating.scss';

const Rating = ({ rating }) => {
  const maxRating = 5;
  const pinkStar = "/src/assets/pinkStar.png"; 
  const grayStar = "/src/assets/grayStars.png"; 

  return (
    <div className="rating">
      {[...Array(maxRating)].map((_, index) => (
        <span key={index}>
          <img
            src={index < rating ? pinkStar : grayStar}
            alt={index < rating ? "Étoile rose" : "Étoile grise"}
            className="star"
          />
        </span>
      ))}
    </div>
  );
};

export default Rating;
