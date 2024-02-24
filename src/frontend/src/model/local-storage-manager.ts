export const useLocalStorageManager = () => {
  const localStorage = window.localStorage;

  const get = (key: string) => {
    return localStorage.getItem(key);
  };

  const getSafe = (key: string, parse?: boolean) => {
    const value = localStorage.getItem(key) ?? "";
    return parse ? JSON.parse(value) : value;
  };

  const set = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  const clear = () => {
    localStorage.clear();
  };

  return { get, getSafe, set, remove, clear };
};
