import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShowByID } from '../api/Tvmaze';
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
    return <div>Got Show Data: {showdata.name}</div>;
  }
  console.log(showdata);
  return <div>hi</div>;
};

export default Show;
