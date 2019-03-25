var amount = parseInt(prompt("How many digits would you like to operate on?"));
var userNumbers = [];
for(var x = 0; x < amount; x++) {
  userNumbers[x] = parseInt(prompt("Pick number " + (x + 1)));
}
var operation = prompt("What would you like to do to these numbers? Your choices are: add, subtract, divide, and multiply. Lower case only!");

if(operation === "add") {
  var sum = userNumbers[0];
    for(var x = 1; x < userNumbers.length; x++){
      sum += userNumbers[x];
    };
  alert("The sum is: " + sum);
}
else if(operation === "subtract") {
  var difference = userNumbers[0];
    for(var x = 1; x < userNumbers.length; x++) {
      difference -= userNumbers[x];
    };
  alert("The difference is: " + difference);
}
else if(operation === "divide") {
  var quotient = userNumbers[0];
  for (var x = 1; x < userNumbers.length; x++) {
    quotient /= userNumbers[x];
  };
  alert("The quotient is " + quotient);
} else if(operation === "multiply") {
  var product = userNumbers[0];
  for(var x = 1; x < userNumbers.length; x++) {
    product *= userNumbers[x];
  };
  alert("The product is: " + product);
} else {alert("Input is not a valid operation!")};
