import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStaredShows';
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
    <>
      {shows.map(show => (
        <ShowCard
          key={show.show.id}
          show={show.show}
          onStarClick={onStarClick}
          isStarred={state.includes(show.show.id)}
        />
      ))}
    </>
  );
};

export default ShowGrid;
