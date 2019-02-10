import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import genNum from '../utils';

const gameTask = 'What is the result of the expression?';

const minNum = 0; // sets the lower limit of the range of integers
const maxNum = 10; // sets the upper limit of the range of integers
const numOfSign = 3; // sets the number of arithmetic operations

const gameData = () => {
  const genFirstNum = genNum(minNum, maxNum);
  const genSecondNum = genNum(minNum, maxNum);
  const genSign = genNum(1, numOfSign);

  let correctAnswer = 0;
  let question = '';

  switch (genSign) {
    case 1:
      correctAnswer = genFirstNum + genSecondNum;
      question = `${genFirstNum} + ${genSecondNum}`;
      break;

    case 2:
      correctAnswer = genFirstNum - genSecondNum;
      question = `${genFirstNum} - ${genSecondNum}`;
      break;

    default:
      correctAnswer = genFirstNum * genSecondNum;
      question = `${genFirstNum} * ${genSecondNum}`;
      break;
  }
  return cons(String(correctAnswer), question);
};

export default () => gameEngine(gameTask, gameData);
