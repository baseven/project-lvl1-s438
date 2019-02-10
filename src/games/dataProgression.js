import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import genNum from '../utils';

const gameTask = 'What number is missing in the progression?';

const minFirstElement = 1; // sets the range for the first element of the progression
const maxFirstElement = 5;
const minStep = 1; // sets the range for step of the progression
const maxStep = 5;
const lengthProgression = 10; // sets the length of the progression

const genProgression = (firstElement, step, length, hidden) => {
  let progression = '';
  for (let counter = 0; counter < length; counter += 1) {
    progression += (counter !== hidden) ? `${firstElement + step * counter} ` : '.. ';
  }
  return progression;
};

const gameData = () => {
  const firstElement = genNum(minFirstElement, maxFirstElement);
  const step = genNum(minStep, maxStep);
  const positionOfHidden = genNum(0, lengthProgression - 1); // sets the sequence number
  const progression = genProgression(firstElement, step, lengthProgression, positionOfHidden);

  const question = progression.trim();
  const correctAnswer = firstElement + step * positionOfHidden;

  return cons(String(correctAnswer), question);
};

export default () => gameEngine(gameTask, gameData);
