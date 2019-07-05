var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var month = 30;

var firstSpender = prompt("Введите обязательную статью расходов в этом месяце");
var firstSpend = prompt("Во сколько обойдется?");
var secondSpender = prompt("Введите обязательную статью расходов в этом месяце");
var secondSpend = prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    date: time,
    expenses: { 
        compulsoryCostsOne: firstSpender,
        quantityOne: firstSpend,
        compulsoryCostsTwo: secondSpender,
        quantityTwo: secondSpend
    },
    income: [],
    savings: false
};

var dailyCosts = Math.round((appData.budget - appData.expenses.quantityOne - appData.expenses.quantityTwo) / month);

alert("Ваш бюджет на один день - " + dailyCosts + ".");

// Ответы на вопросы:
// 1. 7
// 2. console.log()
// 3. ||-или, &&-и  