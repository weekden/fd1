


for (i=1; i<5; i++) {
    console.log (i)
}

function sayMyName(a) {
    alert("My Name Is" + a)
}

var myName = "Denis"
sayMyName(myName);

var yuorName = "Vika"
sayMyName(yuorName);

function getSum(a, b, c) {
    return a + b + c;
}

var year = prompt("Введите год");
var yearNumber = +(year);
    function getYearsDay() {
        if (yearNumber % 4 == 0) {
            alert("Высокосный");
        } else {
            alert ("обычный");
        }
    }

    var number = prompt("Введите число от 0 до 59");
    number = parseInt(number);
    if (number >=0 && number <= 59) {
    var quoter;
    if (number < 15) {
        quoter = 1;
    } else if (number < 30) {
        quoter = 2;
    } else if (number < 45) {
        quoter = 3;
    } else {
        quoter = 4;
    }
    alert (`Число ${number} в ${quoter} четверть часа.`); 
} else {
    alert("Введите число от 0 до 59");
}