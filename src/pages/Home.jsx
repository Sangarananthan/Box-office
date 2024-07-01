import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const onSearch = async ev => {
    ev.preventDefault();
    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const data = await res.json();
    console.log(data);
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
    </div>
  );
};

export default Home;
