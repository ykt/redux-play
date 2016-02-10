
/**
 * Recursive function to find suitable position.
 * @param list
 * @returns {number}
 */
export const randomPosition = (list) => {
  const MAX_SIZE = 8;
  if (list.length >= MAX_SIZE) {
    throw new Error("Oversize the limit.");
  }
  let number = Math.floor((Math.random() * 8) + 1)
  if (list.indexOf(number) !== -1) {
    return randomPosition(list)
  }
  return number;
};

