import { getShowByIDs } from '../api/Tvmaze';
import { TextCenter } from '../Components/common/TextCenter';
import ShowGrid from '../Components/shows/ShowGrid';
import { useStarredShows } from '../lib/useStaredShows';
import { useQuery } from '@tanstack/react-query';
const Starred = () => {
  const [starredShowIDs] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowIDs],
    queryFn: () =>
      getShowByIDs(starredShowIDs).then(result =>
        result.map(show => ({ show }))
      ),
  });

  const renderStarredShows = () => {
    if (starredShowsError) {
      return <>Oops!! Error Occurred: {starredShowsError.message}</>;
    }
    if (!starredShows || starredShows.length === 0) {
      return <TextCenter>Star Movies to View here</TextCenter>;
    }
    return <ShowGrid shows={starredShows}></ShowGrid>;
  };
  return (
    <div>
      {/* {starredShowIDs.length} */}
      {renderStarredShows()}
    </div>
  );
};

export default Starred;
