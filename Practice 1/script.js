// let money = prompt("Ваш бюджет на месяц?", ''),
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: false
// };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// alert(appData.budget / 30);


// 
// function findFactorial(number) {
// 	let fact = 1;
// 	for(let i = 1; i <= number; i++) {
// 		fact *= i;
// 	}
// 	return fact;
// }

// 
let string = 'Hello World'
function strokeRotate(str) {
	let rotate = [];
	let res;
	for( let i = (string.length - 1); i >= 0; i-- ) {
		rotate.push(str[i]);
	}
	res = rotate.join('');
	return res;
}
console.log(strokeRotate(string));

// 

