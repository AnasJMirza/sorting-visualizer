export const generateRandomIntegerBetweenIntervals = (min: number, max: number): number => {
  // min, max includeds
  return Math.floor(Math.random() * (max - min + 1) + min);
};
