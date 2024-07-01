import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/Tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  console.log(searchOption);
  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiDataError(null);
      if (searchOption == 'shows') {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <>Oops!! Error Occured : {apiDataError.message}</>;
    }
    if (apiData.length > 0) {
      return apiData[0].show ? (
        <div>
          {apiData.map(data => (
            <div key={data.show.id}>{data.show.name}</div>
          ))}
        </div>
      ) : (
        <div>
          {apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
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
        <label>
          Shows
          <input
            type="radio"
            value="shows"
            name="search-option"
            checked={searchOption == 'shows'}
            onChange={e => setSearchOption(e.target.value)}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            value="actors"
            name="search-option"
            checked={searchOption == 'actors'}
            onChange={e => setSearchOption(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {renderApiData()}
    </div>
  );
};

export default Home;
