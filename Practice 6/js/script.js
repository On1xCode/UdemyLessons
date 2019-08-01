let btnStart = document.getElementById('start'),
    btnExpences = document.querySelector('.expenses-item-btn'),
    btnOptionalExpences = document.querySelector('.optionalexpenses-btn'),
    btnCount = document.querySelector('.count-budget-btn'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expencesValue = document.querySelector('.expenses-value'),
    optionalExpencesValue = document.querySelector('.optionalexpenses-value'),
    icomeValue = document.querySelector('.income-value'),
    monthValue = document.querySelector('.monthsavings-value'),
    yearValue = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    optionalExpencesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearDate = document.querySelector('.year-value'),
    monthDate = document.querySelector('.month-value'),
    dayDate = document.querySelector('.day-value');


let money, time;













let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,    
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


btnStart.addEventListener('click', function (event) { // Start working with this programm
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money === "" || money === null) { //Only numbers
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    // From local vars made global  
    appData.budget = money;
    appData.timeData = time;

    // Date and inputs
    yearDate.value = new Date(Date.parse(appData.timeData)).getFullYear();
    monthDate.value = new Date(Date.parse(appData.timeData)).getMonth() + 1;
    dayDate.value = new Date(Date.parse(appData.timeData)).getDate();
    budgetValue.textContent = appData.budget;
});
let sum = 0;
btnExpences.addEventListener('click', function() { //Calculate expences 
    
    for (let i = 0; i < expensesItem.length; i++) {    
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
        if (typeof (a) === 'string' && typeof (a) !== null && typeof (b) !== null && a !== "" && b !== "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else { //Increment if it will have error
            i--;
        }
    }
    // Changed input value
    expencesValue.textContent = sum;
});

btnOptionalExpences.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < optionalExpencesItem.length; i++) {
        let optExpenses = optionalExpencesItem[i].value;
        appData.optionalExpenses[i] = optExpenses;
        sum += +optExpenses;
    }
    optionalExpencesValue.textContent = sum;
});

btnCount.addEventListener('click', function(){
    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay + "руб";
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Низкий";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Ошибка";
        levelValue.textContent = "Ошибка";
    } 
})

chooseIncome.addEventListener('input', function() {
    icomeValue.textContent = chooseIncome.value;
})

savings.addEventListener('click', function(){
    if(appData.savings == false){
        appData.savings = true;
        chooseSum.removeAttribute('readonly');
        choosePercent.removeAttribute('readonly');
    } else {
        appData.savings = false;
        chooseSum.setAttribute('readonly', 'true');
        chooseSum.value = "";
        choosePercent.setAttribute('readonly', 'true');
        choosePercent.value = "";
    }
})

choosePercent.addEventListener('input', function(){
    let sum = +chooseSum.value,
        percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthValue.textContent = appData.monthIncome.toFixed(1);
        yearValue.textContent = appData.yearIncome.toFixed(1);

})

console.log(appData);