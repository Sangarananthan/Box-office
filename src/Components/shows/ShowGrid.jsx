import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <>
      {shows.map(show => (
        <ShowCard key={show.show.id} show={show.show} />
      ))}
    </>
  );
};

export default ShowGrid;
