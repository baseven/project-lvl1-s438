import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no"?'; 

const gameData = () => {
  const minNum = 0; // sets the lower limit of the range of integers
  const maxNum = 100; // sets the upper limit of the range of integers
  const question = Math.round(Math.random()* (maxNum - minNum) + minNum);

  const isEven = num => num % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(correctAnswer, String(question));
};
const brainEven = () => gameEngine(gameTask, gameData);

export default brainEven;
