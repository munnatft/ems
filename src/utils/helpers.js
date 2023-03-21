export const getUserFromLocalStorage = () => {
  const item = localStorage.getItem("__LOGGED_IN_USER__");
  if (!item) {
    return;
  }
  return JSON.parse(item);
};

export const setItemInLocalStorage = (key, value) => {
  let valueToStore = typeof value === "string" ? value : JSON.stringify(value);
  localStorage.setItem(key, valueToStore);
};
