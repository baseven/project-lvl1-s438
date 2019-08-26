[![Maintainability](https://api.codeclimate.com/v1/badges/a4466a25feeafa74d822/maintainability)](https://codeclimate.com/github/baseven/project-lvl1-s438/maintainability)
[![Build Status](https://travis-ci.com/baseven/project-lvl1-s438.svg?branch=master)](https://travis-ci.com/baseven/project-lvl1-s438)

## Описание
Набор консольных игр-викторин, где игроку предлагается ответить на три вопроса. Ответив на все правильно, игрок побеждает. Ошибка в ответе завершает игру.

## Список игр
```
1: brain-even

2: brain-calc

3: brain-gcd

4: brain-progression

5: brain-prime
```
## Установка
```
npm isntall -g ba_hexlet-project1

```
## Запуск
Запуск приложения выполняется командой make start:
[![asciicast](https://asciinema.org/a/gYS16wtgCylafRT8hHIb6TRk3.svg)](https://asciinema.org/a/gYS16wtgCylafRT8hHIb6TRk3)

Для запуска конкретной игры можно воспользоваться командой make <имя игры>, например, make calc:
[![asciicast](https://asciinema.org/a/DoFGhjaNregDxo1p9SxLR05eS.svg)](https://asciinema.org/a/DoFGhjaNregDxo1p9SxLR05eS)

## Описание игр:

### brain-even
"Проверка на четность". Пользователю показывается случайное число и ему нужно ответить yes, если число чётное, или no — если нечётное.
```
Question: 15
Your answer: no
Correct!
```
### brain-calc
"Калькулятор". Пользователю показывается случайное математическое выражение, которое нужно вычислить и записать правильный ответ.
```
Question: 4 + 10
Your answer: 14
Correct!
```
### brain-gcd
"Наибольший общий делитель (НОД)". Пользователю показывается два случайных числа и он должен вычислить и ввести наибольший общий делитель этих чисел.
```
Question: 25 50
Your answer: 25
Correct!
```
### brain-progression
"Арифметическая прогрессия". Пользователю показывается ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Пользователm должен определить это число.
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
```
### brain-prime
"Простое ли число?". Пользователю показывается случайное число и ему нужно ответить yes, если число простое, или no — если составное.

```
Question: 7
Your answer: yes
Correct!
```