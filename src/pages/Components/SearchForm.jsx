import { useState } from 'react';
const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <div>
      {' '}
      <form onSubmit={onSubmit}>
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
    </div>
  );
};

export default SearchForm;
