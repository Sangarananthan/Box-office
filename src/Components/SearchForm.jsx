import { useState } from 'react';
import { useSearchString } from '../lib/useSearchString';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';
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
        <SearchInput
          type="text"
          value={searchString}
          onChange={e => handleChange(e)}
          placeholder="Search for Something"
        />
        <RadiosWrapper>
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
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  );
};

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
