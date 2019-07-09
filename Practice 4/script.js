let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

//     while (isNaN(money) || money === "" || money === null) {
//         money = +prompt("Ваш бюджет на месяц?", "");
//     }

// }
// start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            if (typeof (a) === 'string' && typeof (a) !== null && typeof (b) !== null && a !== "" && b !== "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () { // Расчет дневного бюджета
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () { // Расчет уровня достатка
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Ошибочка...!");
        }
    },
    checkSavings: function () {
        if (appData.savings === true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесёт дополнительный доход", "");
        for (let i = 0; i < 1; i++) {
            if (items !== null && items !== "" && isNaN(items)) {
                appData.income = items.split(" ");
                let moreItems = prompt("Может быть что-то ещё?", "");
                if (moreItems !== "") {
                    appData.income.push(moreItems);
                }
                appData.income.sort();
            } else {
                items = prompt("Ошибка, введите заново", "");
                i--;
            }
        }
        console.log("Способы доп. заработка: ");
        appData.income.forEach(function (item, i, array) {
            console.log(`${i + 1}: ${item} from ${array}`);
        });
    },
    review: function () {
        console.log("Наша программа включает в себя данные:");
        for (let key in appData) {
            console.log(key);
        }
    }
};

/*
1) Написать проверку, что пользователь может:   +

·        Ввести в дополнительных доходах (chooseIncome) только строку

·        Не может оставить строку пустой

·        Не может отменить вопрос

2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome) +

·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком на свой GitHub
*/