import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync'; // import library for reading user input

const setNumOfQuest = 3; // sets the number of questions

const gameEngine = (gameTask, gameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameTask); // displays a description of the task

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let counter = 1; counter <= setNumOfQuest; counter += 1) {
    const data = gameData();
    const correctAnswer = car(data);
    const question = cdr(data);

    console.log(`\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('Your answer: '); // returns user response

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let"s try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
