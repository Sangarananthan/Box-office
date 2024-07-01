import { useParams } from 'react-router-dom';
import { useShowByID } from '../api/useShowByID';

const Show = () => {
  const { showid } = useParams();
  const { showError, showdata } = useShowByID(showid);
  if (showError) {
    return <div>We have an error: {showdata}</div>;
  }
  if (showdata) {
    return <div>Got Show Data: {showdata.name}</div>;
  }
  console.log(showdata);
  return <div>{showdata}</div>;
};

export default Show;
