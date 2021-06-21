import { useState, useEffect, useCallback } from 'react';

export default function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialState);
  });

  function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  }

  const setValueToLocalStorage = useCallback(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useEffect(() => {
    setValueToLocalStorage();
  }, [value, setValueToLocalStorage]);

  return [value, setValue];
}
