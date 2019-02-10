import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import genNum from '../utils';

const gameTask = 'Find the greatest common divisor of given numbers.';

const minNum = 0; // sets the lower limit of the range of integers
const maxNum = 100; // sets the upper limit of the range of integers

const findGreatComDiv = (firstNum, secondNum) => {
  const min = Math.min(firstNum, secondNum);
  const max = Math.max(firstNum, secondNum);

  if (min === 0) {
    return max;
  }
  return findGreatComDiv(min, max % min);
};

const gameData = () => {
  const genFirstNum = genNum(minNum, maxNum);
  const genSecondNum = genNum(minNum, maxNum);

  const question = `${genFirstNum} ${genSecondNum}`;
  const correctAnswer = findGreatComDiv(genFirstNum, genSecondNum);

  return cons(String(correctAnswer), question);
};

export default () => gameEngine(gameTask, gameData);
