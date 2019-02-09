import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGreatComDiv = (firstNum, secondNum) => {
  const maxNum = Math.max(firstNum, secondNum);
  const minNum = Math.min(firstNum, secondNum);

  if (minNum === 0) {
    return Math.abs(maxNum); // Math.abs will be used when negative numbers
  }
  return findGreatComDiv(minNum, maxNum % minNum);
};

const gameData = () => {
  const minNum = 0; // sets the lower limit of the range of integers
  const maxNum = 100; // sets the upper limit of the range of integers

  const genFirstNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
  const genSecondNum = Math.round(Math.random() * (maxNum - minNum) + minNum);

  const question = `${genFirstNum} ${genSecondNum}`;
  const correctAnswer = findGreatComDiv(genFirstNum, genSecondNum);

  return cons(String(correctAnswer), question);
};
const brainGcd = () => gameEngine(gameTask, gameData);

export default brainGcd;
