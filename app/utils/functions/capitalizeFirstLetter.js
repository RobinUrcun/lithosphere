export const capitalizeFirstLetter = function (text) {
  const firstLetter = text.charAt(0).toUpperCase();
  return firstLetter + text.slice(1).toLowerCase();
};
