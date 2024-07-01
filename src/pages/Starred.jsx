import { useStarredShows } from '../lib/useStaredShows';

const Starred = () => {
  const [state] = useStarredShows();
  return <div>Starred Shows : {state.length}</div>;
};

export default Starred;
