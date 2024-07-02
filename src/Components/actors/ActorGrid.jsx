import { FlexGrid } from '../common/FlexGrid';
import ActorCard from './ActorCard';

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(actor => (
        <ActorCard key={actor.person.id} actor={actor.person} />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
