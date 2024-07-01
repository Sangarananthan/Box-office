import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const initial_state = [];
const staredShowReducer = (state, action) => {
  switch (action.type) {
    case 'STAR': {
      return [...state, action.showid];
    }
    case 'UNSTAR': {
      return state.filter(showid => showid != action.showid);
    }
    default: {
      return state;
    }
  }
};
const usePersistedReducer = (
  staredShowReducer,
  initial_state,
  localStorageKey
) => {
  const [state, dispatch] = useReducer(
    staredShowReducer,
    initial_state,
    initial => {
      const persisitedValue = localStorage.getItem(localStorageKey);
      return persisitedValue ? JSON.parse(persisitedValue) : initial;
    }
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};
const ShowGrid = ({ shows }) => {
  const [state, dispatch] = usePersistedReducer(
    staredShowReducer,
    initial_state,
    'staredShows'
  );
  console.log(state);
  const onStarClick = showid => {
    const isStarred = state.includes(showid);
    if (isStarred) {
      dispatch({ type: 'UNSTAR', showid });
    } else {
      dispatch({ type: 'STAR', showid });
    }
  };

  return (
    <>
      {shows.map(show => (
        <ShowCard
          key={show.show.id}
          show={show.show}
          onStarClick={onStarClick}
        />
      ))}
    </>
  );
};

export default ShowGrid;
