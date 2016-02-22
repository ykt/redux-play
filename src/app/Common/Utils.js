
/**
 * Recursive function to find suitable position. All unit are in pixels
 * @param list
 * @returns {number}
 */
export const nextLocation = (location) => {
  const MARGIN = 8;

  if (list.length >= MAX_SIZE) {
    throw new Error("Oversize the limit.");
  }
  let number = Math.floor((Math.random() * 8) + 1)
  if (list.indexOf(number) !== -1) {
    return nextLocation(list)
  }
  return number;
};

