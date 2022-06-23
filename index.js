var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

var opt = prompt("Enter any of these operations: * + - /");
if(opt == '*'){
    var num = parseInt(num1) * parseInt(num2) ;
}
else if(opt == '+'){
    var num = parseInt(num1) + parseInt(num2);
}
else if(opt == '-'){
    var num = parseInt(num1) - parseInt(num2);
}
else if(opt == '/'){
    var num = parseInt(num1) / parseInt(num2);
}

document.write(num1 + opt + num2 + ' = ' + num);