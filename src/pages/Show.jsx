import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowByID } from '../api/Tvmaze';
const Show = () => {
  const { showid } = useParams();
  const [showdata, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  console.log(showdata);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowByID(showid);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }
    fetchData();
  }, [showid]);

  if (showError) {
    return <div>We have an error: {showdata}</div>;
  }
  if (showdata) {
    return <div>Got Show Data: {showdata.name}</div>;
  }
  return <div>Show</div>;
};

export default Show;
