let body = document.querySelector("body");
let adware = document.querySelector(".adv");
let column = document.querySelectorAll(".column");
let title = document.querySelector("#title");
let answer = document.querySelector("#prompt");
let menu = document.querySelector(".menu");
let menuItem = document.querySelectorAll(".menu-item");


body.style.backgroundImage = "url(../img/apple_true.jpg)";

column[1].removeChild(adware);

title.textContent = "Мы продаем только подлинную технику Apple";

let listElement = document.createElement('li');
listElement.classList.add('menu-item');
listElement.innerText = 'Пятый пункт';
menu.appendChild(listElement);

menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(menuItem[1], menuItem[3])

answer.innerText = prompt("Что вы думаете о технике Apple?", "");

/* 
2) Используя только файл скрипта (html руками не трогать) выполнить такие действия:

·     +   Восстановить порядок в меню, добавить пятый пункт

·     +   Заменить картинку заднего фона на другую из папки img

·     +   Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

·     +   Удалить рекламу со страницы  

·     +   Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

3) Проверить, чтобы все работало и не было ошибок в консоли
*/