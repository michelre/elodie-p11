import './author.scss';

const Author = ({ name, picture }) => {
  return (
    <div className="author">
      <p className="author-name">{name}</p>
      <img className="author-picture" src={picture} alt={`Photo de ${name}`} />
    </div>
  );
};

export default Author;


