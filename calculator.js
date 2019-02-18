function add (num1, num2) {
	return sum = num1 + num2;	
}

function subtract (num1, num2) {
	return sub = num1 - num2;	
}

function sum (array) {
	return array.reduce((current, total) => total + current, 0);
}

function multiply (array) {
	return array.reduce((a,b) => a*b)
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(a) {
	if (a == 0 ){
		return 1
	}
	for (var i = a - 1; i >= 1; i--){
		a *= i;
	}
	return a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}