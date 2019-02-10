import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import genNum from '../utils';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 0; // sets the lower limit of the range of integers
const maxNum = 100; // sets the upper limit of the range of integers

const findSmallestDiv = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const isPrime = num => findSmallestDiv(num) === num;

const gameData = () => {
  const num = genNum(minNum, maxNum);
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return cons(correctAnswer, question);
};

export default () => gameEngine(gameTask, gameData);
