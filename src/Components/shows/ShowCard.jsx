// import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  const { name, image, summary, id } = show;
  const summaryStriped = summary
    ? summary
        .replace(/<\/?[^>]+(>|$)/g, '')
        .split(' ')
        .slice(0, 10)
        .join(' ') + '...'
    : 'No description';
  return (
    <div>
      <div>
        <img src={image ? image.medium : '/image_not_found.png'} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStriped}</p>
      <div id={id}>
        <a href={`/shows/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
