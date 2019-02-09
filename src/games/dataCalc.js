import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const gameTask = 'What is the result of the expression?';

const minNum = 0; // sets the lower limit of the range of integers
const maxNum = 10; // sets the upper limit of the range of integers
const numOfSign = 3; // sets the number of arithmetic operations

const gameData = () => {
  const genFirstNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
  const genSecondNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
  const genSign = Math.round(Math.random() * (numOfSign - 1) + 1);

  let correctAnswer = 0;
  let question = '';

  switch (genSign) {
    case 1:
      correctAnswer =  genFirstNum + genSecondNum;
      question = `${genFirstNum} + ${genSecondNum}`;
      break;

    case 2:
      correctAnswer =  genFirstNum - genSecondNum;
      question = `${genFirstNum} - ${genSecondNum}`;
      break;

    default:
      correctAnswer =  genFirstNum * genSecondNum;
      question = `${genFirstNum} * ${genSecondNum}`;
      break;
  }
  return cons(String(correctAnswer), question);
};
const brainCalc = () => gameEngine(gameTask, gameData);

export default brainCalc;
