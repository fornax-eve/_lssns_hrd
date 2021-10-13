'use script';

let bookList = document.querySelectorAll('.book');
let books = document.querySelector('.books');
console.log(bookList);

//Восстановить порядок книг
bookList[0].before(bookList[1]);
bookList[0].after(bookList[4]);
bookList[4].after(bookList[3]);
books.append(bookList[2]);

// Заменить картинку заднего фона на другую из папки image
const body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let newA = bookList[4].querySelector('a');
newA.textContent = 'Книга 3. this и Прототипы Объектов';

//Удалить рекламу со страницы
document.querySelector('.adv').remove();

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов,
// поможет dev tools)
let inspectionBook2 = bookList[0].querySelectorAll('li');
inspectionBook2[9].after(inspectionBook2[2]);
inspectionBook2[3].after(inspectionBook2[6]);
inspectionBook2[6].after(inspectionBook2[8]);

let inspectionBook5 = bookList[5].querySelectorAll('li');
inspectionBook5[2].replaceWith(inspectionBook5[9]);
inspectionBook5[5].replaceWith(inspectionBook5[2]);
inspectionBook5[7].after(inspectionBook5[5]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let inspectionBook6 = bookList[2].querySelectorAll('li');
let install = document.createElement('li');
install.textContent = 'Глава 8: За пределами ES6';
inspectionBook6[8].after(install);
