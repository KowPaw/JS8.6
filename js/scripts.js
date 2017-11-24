// scripts.js

var a = prompt('Your value "a" is:'),
	b = prompt('Your value "b" is:'),
	value;

value = (a * a) - (2 * a * b) + (b * b);

alert('With a= ' + a + ' and b= ' + b + ' value is iqual to: ' + value);
console.log('With a= ' + a + ' and b= ' + b + ' value is iqual to: ' + value);

if (value > 0 ) {
	alert('Value is positive');
	console.log('Value is positive');
} else if (value < 0) {
	alert('Value is negative');
	console.log('Value is negative');
} else if (value == 0) {
	alert('Value is iqual to "0"');
	console.log('Value is iqual to "0"');
} else {
	alert('You enter a wrong value "a" or "b" or both');
	console.log('You enter a wrong value "a" or "b" or both');
}