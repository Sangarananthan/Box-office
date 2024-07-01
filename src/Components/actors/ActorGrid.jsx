import ActorCard from './ActorCard';

const ActorGrid = ({ actors }) => {
  return (
    <>
      {actors.map(actor => (
        <ActorCard key={actor.person.id} actor={actor.person} />
      ))}
    </>
  );
};

export default ActorGrid;
