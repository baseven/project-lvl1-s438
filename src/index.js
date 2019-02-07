import readlineSync from 'readline-sync'; // библиотека для чтения пользовательского ввода; https://github.com/anseki/readline-sync

export const greeting = () => {
    const username = readlineSync.question('May I have your name? ');
    if (username === '') {
        console.log('Hello, anonymous!');
    } else {
        console.log('Hello, ${username}!');
    }
}
