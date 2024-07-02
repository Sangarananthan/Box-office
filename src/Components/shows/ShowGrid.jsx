import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStaredShows';
import { FlexGrid } from '../common/FlexGrid';
const ShowGrid = ({ shows }) => {
  const [state, dispatch] = useStarredShows();
  const onStarClick = showid => {
    const isStarred = state.includes(showid);
    if (isStarred) {
      dispatch({ type: 'UNSTAR', showid });
    } else {
      dispatch({ type: 'STAR', showid });
    }
  };

  return (
    <FlexGrid>
      {shows.map(show => (
        <ShowCard
          key={show.show.id}
          show={show.show}
          onStarClick={onStarClick}
          isStarred={state.includes(show.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
