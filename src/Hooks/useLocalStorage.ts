import { useState } from "react";

export default function useLocalStorage(key: string, defaultValue: unknown) {
  const [value, setValue] = useState(() => {
    try {
      const valueInStorage = localStorage.getItem(key);
      if (valueInStorage) {
        return JSON.parse(valueInStorage);
      }

      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (err) {
      console.error(err);
      return defaultValue;
    }
  });

  const setValueInStorage = (newValue: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.error(err);
    }
    setValue(newValue);
  };

  return [value, setValueInStorage];
}
