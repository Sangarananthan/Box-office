import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/Tvmaze';
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/shows/ShowGrid';
import ActorGrid from '../Components/actors/ActorGrid';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async option => {
    const { q: searchStr, searchOption } = option;
    try {
      setApiDataError(null);
      let result = null;
      if (searchOption == 'shows') {
        result = await searchForShows(searchStr);
      } else {
        result = await searchForPeople(searchStr);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <>Oops!! Error Occured : {apiDataError.message}</>;
    }
    if (apiData.length === 0) return 'No Match Found :)';
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {renderApiData()}
    </div>
  );
};

export default Home;
