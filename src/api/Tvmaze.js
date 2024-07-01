const BASE_URL = 'https://api.tvmaze.com';
const apiGet = async queryString => {
  const res = await fetch(`${BASE_URL}${queryString}`);
  const data = await res.json();
  return data;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
