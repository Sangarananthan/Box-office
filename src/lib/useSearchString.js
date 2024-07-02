import { useEffect, useReducer } from 'react';

const initial_state = '';

const searchStringReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.value;
    default:
      return state;
  }
};

const usePersistString = (
  initial_state,
  searchStringReducer,
  sessionStorageKey
) => {
  const [searchString, dispatch] = useReducer(
    searchStringReducer,
    initial_state,
    initial => {
      const persistedString = sessionStorage.getItem(sessionStorageKey);
      return persistedString ? persistedString : initial;
    }
  );

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, searchString);
  }, [searchString]);

  return [searchString, dispatch];
};

export const useSearchString = () => {
  return usePersistString(initial_state, searchStringReducer, 'searchString');
};
