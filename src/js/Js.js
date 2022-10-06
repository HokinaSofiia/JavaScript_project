'use strict';
// //УРОК 12 Разница между объектами и массивами и неочевидные синтаксические возможности
// //ПРИМЕР ДОБАВЛЕНИЯ ДАННЫХ В ОБЬЕКТ

// const aboutMy = {
//     myName: 'Sofiia',
//     age: 33,
//     daughter: 'Nikol'
// }

// aboutMy.ilive = 'Krakow';
// console.log(aboutMy);

// //ПРИМЕР ДОБАВЛЕНИЯ ДАННЫХ В МАССИВ

// const aboutMy = ['Sofiia', 33, 'Nikol'];
// aboutMy[3] = 'Krakow';
// console.log(aboutMy)

// // ВЛОЖЕННЫЕ СТРУКТУРЫ ВНУТРИ ОБЬЕКТОВ

// const aboutMy = {
//     myName: 'Sofiia',
//     age: 33,
//     daughter: 'Nikol',
//     iLive: {
//         nativeСity: 'Kharkov',
//         liveNow: 'Krakow'
//     }
// }
// console.log(aboutMy);

// const storeName = 'Rozetka';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Olga','Andrey', 'Igor' ],         /** ЗАДАНИЕ 
//                                                              К УРОКУ*/   
//     products: {
//         'milk': 20,
//         'chocolate': 10,
//     },
//     open: true
// }

// УРОК  13 Простое общение с пользователем
// КОМАНДЫ (ALERT CONFIRM  ANSWER)
// ВСЕ ЭТИ КОМАНДЫ ТЕСТИРУЮТСЯ ВНУТРИ БРАУЗЕРА
// alert('Helo'); 
// const result = confirm ('Are you here?');
// console.log(result);

// const answer = prompt('You are ready?', '18');
// console.log(answer)
  
// const answers = [];
// answers[0] = prompt('Как ваше имя?','');
// answers[1] = prompt('Какая ваша фамилия?','');
// answers[2] = prompt('Сколько вам лет?','');

// document.write(answers); 
// console.log(typeof(answers)); 

// УРОК 14. Интерполяция (ES6)

//Шаблонные литералы заключены в обратные кавычки (` `) вместо двойных или одинарных. Они могут содержать подстановки, обозначаемые знаком доллара и фигурными скобками (${выражение}). Выражения в подстановках и текст между ними передаются в функцию. По умолчанию функция просто объединяет все части в строку. Если перед строкой есть выражение (здесь это tag), то шаблонная строка называется "теговым шаблоном". В этом случае, теговое выражение (обычно функция) вызывается с обработанным шаблонным литералом, который вы можете изменить перед выводом. Для экранирования обратной кавычки в шаблонных литералах указывается обратный слеш \.

const user = 'Ivan';
alert(`Привет, ${user}`);