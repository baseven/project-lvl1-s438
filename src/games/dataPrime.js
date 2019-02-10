import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import genNum from '../utils';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 0; // sets the lower limit of the range of integers
const maxNum = 100; // sets the upper limit of the range of integers

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let counter = 2; counter <= Math.sqrt(num); counter += 1) {
    if (num % counter === 0) {
      return false;
    }
  }
  return true;
};

const gameData = () => {
  const num = genNum(minNum, maxNum);
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return cons(correctAnswer, question);
};

export default () => gameEngine(gameTask, gameData);
