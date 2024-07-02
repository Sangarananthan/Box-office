import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForPeople } from '../api/Tvmaze';
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/shows/ShowGrid';
import ActorGrid from '../Components/actors/ActorGrid';
import { TextCenter } from '../Components/common/TextCenter';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
  });

  const onSearch = option => {
    const { q, searchOption } = option;
    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <>Oops!! Error Occurred: {apiDataError.message}</>;
    }
    if (filter.q && (!apiData || apiData.length === 0)) {
      return <TextCenter>No results</TextCenter>;
    }
    return filter.searchOption === 'shows' ? (
      <ShowGrid shows={apiData} />
    ) : (
      <ActorGrid actors={apiData} />
    );
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {renderApiData()}
    </div>
  );
};

export default Home;
