import { useState } from 'react';
import { useSearchString } from '../lib/useSearchString';
import CustomRadio from './CustomRadio';
const SearchForm = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState('shows');
  const [searchString, dispatch] = useSearchString();
  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchString,
      searchOption,
    };
    onSearch(options);
  };
  const handleChange = ev => {
    dispatch({ type: 'CHANGE', value: ev.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchString}
          onChange={e => handleChange(e)}
        />
        <CustomRadio
          label="shows"
          type="radio"
          value="shows"
          name="search-option"
          checked={searchOption == 'shows'}
          onChange={e => setSearchOption(e.target.value)}
        />

        <CustomRadio
          label="actors"
          type="radio"
          value="actors"
          name="search-option"
          checked={searchOption == 'actors'}
          onChange={e => setSearchOption(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
