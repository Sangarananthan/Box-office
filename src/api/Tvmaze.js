const BASE_URL = 'https://api.tvmaze.com';
const apiGet = async queryString => {
  const res = await fetch(`${BASE_URL}${queryString}`);
  const data = await res.json();
  return data;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);
export const getShowByID = id => apiGet(`/shows/${id}`);
