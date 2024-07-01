import { useEffect, useReducer } from 'react';

export const initial_state = [];

export const staredShowReducer = (state, action) => {
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
export const usePersistedReducer = (
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

export const useStarredShows = () => {
  const [state, dispatch] = usePersistedReducer(
    staredShowReducer,
    initial_state,
    'staredShows'
  );

  return [state, dispatch];
};
