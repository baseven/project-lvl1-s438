import readlineSync from 'readline-sync'; // import library for reading user input

const greeting = () => {
    console.log('\nWelcome to the Brain Games!');
};

const greetingEven = () => {
    greeting();
    console.log('Answer "yes" if number even otherwise answer "no".');
};

const userId = () => {
    const userName = readlineSync.question('\nMay I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
};

const parityCheck = () => {
    greetingEven();
    const userName = userId();

    const setTheNumber = 3; //sets the number of questions
    const minNum = 0;       //sets the range of numbers
    const maxNum = 100;

    for (let counter = 1; counter <= setTheNumber; counter+=1) {
        const genNum = Math.round(Math.random()* (maxNum - minNum) + minNum); // Генерирует случ. число, окр. до целого, между minNum (вкл.) и maxNum (не вкл. max).
        console.log(`\nQuestion: ${genNum}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const checkNum = (genNum%2 === 0) ? 'yes' : 'no'; // ternary operation that checks parity
        
        if (checkNum === userAnswer) {
            console.log('Correct!');
        } else {
            return console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${checkNum}'.\nLet's try again, ${userName}!`);
        }
    } return console.log(`Congratulations, ${userName}!`);
}

export { greeting, greetingEven, userId, parityCheck };
