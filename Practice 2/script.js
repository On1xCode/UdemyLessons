let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for(let i = 0; i < 2; i++){
	var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = +prompt("Во сколько обойдется?", '');

	if (typeof(a) === 'string' && typeof(a) != null && a != '' && b != '' && a.length < 50) {
		appData.expenses[a] = b;
		 } else {
		let choice = confirm("Хотите продолжить?");
		if (choice === true) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = +prompt("Во сколько обойдется?", '');
		} else {
			appData.expenses[a] = b;
		}
	}
}
console.log(appData);
appData.moneyPerDay = appData.budget / 30;
alert(appData.moneyPerDay);

if (appData.moneyPerDay < 100){
	console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
}