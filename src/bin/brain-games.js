#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainEven from '../games/dataEven';
import brainCalc from '../games/dataCalc';
import brainGcd from '../games/dataGcd';
import brainProgression from '../games/dataProgression';
import brainPrime from '../games/dataPrime';

const startGame = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('You need to enter the number of the selected game.Good luck, have fun!');
  const selectGame = readlineSync.question('\n1: brain-even \n2: brain-calc \n3: brain-gcd \n4: brain-progression \n5: brain-prime \nYour choice:');

  switch (selectGame) {
    case '1':
      brainEven();
      break;
    case '2':
      brainCalc();
      break;
    case '3':
      brainGcd();
      break;
    case '4':
      brainProgression();
      break;
    case '5':
      brainPrime();
      break;
    default:
      console.log(`Let"s try again!`);
  }
};

startGame();
