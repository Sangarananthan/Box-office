import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShowByID } from '../api/Tvmaze';
import ShowMainData from '../Components/shows/ShowMainData';
import Details from '../Components/shows/Details';
import Season from '../Components/shows/Season';
import Cast from '../Components/shows/Cast';
const Show = () => {
  const { showid } = useParams();
  const { data: showdata, error: showError } = useQuery({
    queryKey: ['show', showid],
    queryFn: () => getShowByID(showid),
  });
  if (showError) {
    return <div>We have an error: {showdata}</div>;
  }
  if (showdata) {
    return (
      <>
        <Link to={'/'}>Home</Link>
        <ShowMainData
          image={showdata.image}
          name={showdata.name}
          rating={showdata.rating}
          summary={showdata.summary}
          genres={showdata.genres}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showdata.status}
            premiered={showdata.premiered}
            network={showdata.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Season seasons={showdata._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showdata._embedded.cast} />
        </div>
      </>
    );
  }
  console.log(showdata);
  return <div>hi</div>;
};

export default Show;
