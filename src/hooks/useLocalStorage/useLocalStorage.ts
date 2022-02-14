import { useCallback, useState } from 'react';

export function useLocalStorage<T = unknown>(key: string, initialValue: T) {

  const [state, setState] = useState<T | string>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue; 
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value: T): void => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
      console.log(error);
    }
  }, [key]);

  return [state, setValue] as const;

}
