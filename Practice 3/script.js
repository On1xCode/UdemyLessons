'use strict';

var money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
   
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

function checkSavings() {
    if(appData.savings == true) {
        var save = +prompt("Какова сума накоплений?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 12 / 100 * percent;
        alert("Доход в месяц из вашего депозита равна " + appData.monthIncome);
    }
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

function checkOptionalExpenses() {
    for(let i = 0; i < 3; i++){
        let optional = +prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i] = optional;
    }
}


start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
    



chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
checkOptionalExpenses();

