export default function getRandomInt(min, max) {
  const interval = max + 1 - min;
  const random = min + Math.random() * interval;

  return Math.floor(random);
}
