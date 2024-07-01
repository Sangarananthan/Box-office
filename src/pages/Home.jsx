import { useState } from 'react';
import { searchForShows } from '../api/Tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiDataError(null);
      const result = await searchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <>Oops!! Error Occured : {apiDataError.message}</>;
    }
    if (apiData) {
      return (
        <div>
          {apiData.map(data => (
            <div key={data.show.id}>{data.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchStr}
          onChange={e => setSearchStr(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {renderApiData()}
    </div>
  );
};

export default Home;
