import readlineSync from 'readline-sync'; // импорт библиотеки для чтения пользовательского ввода

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
};
