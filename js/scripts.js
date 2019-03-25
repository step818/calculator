var add = function(number1, number2) {
  var answer = (number1 + number2);
  return answer;
};

var subtract = function(number1, number2) {
  var answer = (number1 - number2);
  return answer;
};

var multiply = function(number1, number2) {
  var answer = (number1 * number2);
  return answer;
};

var divide = function(number1, number2) {
  var answer = (number1 / number2);
  return answer;
};

var number1 = parseInt(prompt("Pick a number:"));
var number2 = parseInt(prompt("Pick another number:"));

alert("The quotient is: " + divide(number1, number2));
alert("The product is: " + multiply(number1, number2));
alert("The sum is: " + add(number1, number2));
alert("The difference is: " + subtract(number1, number2));
