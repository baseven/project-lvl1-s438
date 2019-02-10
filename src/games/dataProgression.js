import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import genNum from '../utils';

const gameTask = 'What number is missing in the progression?';

const minFirstElement = 1; // sets the range for the first element of the progression
const maxFirstElement = 5;
const minStep = 1; // sets the range for step of the progression
const maxStep = 5;
const lengthProgression = 10; // sets the length of the progression

const genProgression = (firstElement, step, length, hiddenElement) => {
  let progression = '';
  for (let counter = 0; counter < length; counter += 1) {
    progression += (counter !== hiddenElement) ? `${firstElement + step * counter} ` : '.. ';
  }
  return progression;
};

const gameData = () => {
  const firstElement = genNum(minFirstElement, maxFirstElement);
  const step = genNum(minStep, maxStep);
  const hiddenElement = genNum(0, lengthProgression - 1); // sets the sequence number
  const progression = genProgression(firstElement, step, lengthProgression, hiddenElement);

  const question = progression;
  const correctAnswer = firstElement + step * hiddenElement;

  return cons(String(correctAnswer), question);
};

export default () => gameEngine(gameTask, gameData);
