import { useEffect, useState } from 'react';
import { getShowByID } from '../api/Tvmaze';

export const useShowByID = showid => {
  const [showdata, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

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

  return { showError, showdata };
};
