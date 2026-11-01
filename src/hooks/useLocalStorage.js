import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

/**
 * Tracks visit history and timestamps
 */
export function useVisitTracker() {
  const [visitData, setVisitData] = useLocalStorage('for_you_visit_data', {
    firstVisit: null,
    lastVisit: null,
    visitCount: 0,
  });

  useEffect(() => {
    const now = new Date().toISOString();
    setVisitData(prev => ({
      firstVisit: prev.firstVisit || now,
      lastVisit: now,
      visitCount: (prev.visitCount || 0) + 1,
    }));
  }, []);

  return visitData;
}

