import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import genNum from '../utils';

const gameTask = 'Answer "yes" if number even otherwise answer "no"?';

const minNum = 0; // sets the lower limit of the range of integers
const maxNum = 100; // sets the upper limit of the range of integers
const isEven = num => num % 2 === 0;

const gameData = () => {
  const question = genNum(minNum, maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(correctAnswer, String(question));
};

export default () => gameEngine(gameTask, gameData);
