var myName = "Denis"; // string
var age = 24; //number
var isMan = true; //boolean (true/folse)
var nothing = null; //null
var anonime = undefined; // undefined
//

var firstName = prompt("Введите ваше имя");
var lastName = prompt("Введите вашу фамилию");
var secondName = prompt("Ввдеите ваше отчество");
var age = prompt("Введите ваш возраст");
var ageNumber = parseInt(age);
var ageDays = ageNumber * 365;
var ageThrough = ageNumber + 5;
var gender = confirm(' Ваш пол мужской?\n Нажмите "ОК" если мужской\n Нажмите "ОТМЕНА" если женский');
var genderLabel = '';
if(gender === true) {
    genderLabel = "мужской";
} else {
    genderLabel = "женский";
}
var pensiya = '';
if((gender === true && age >= 63) || (gender === false && age >= 58)) {    
    pensiya = "Да";
} else {
    pensiya = "Нет";
    }

//var card = alert("ваше ФИО:" + firstName + ' ' + lastName + ' ' + secondName + '\n' + "ваш возраст в годах:" + ' ' + ageNumber + '\n' + "ваш возраст в днях:" + ' ' + ageDays + '\n' + "через 5 лет вам будет:" + ' ' + ageThrough + '\n' + "ваш пол:" + ' ' + genderLabel + '\n' + "вы на пенсии:" + ' ' + pensiya)
var card = alert(` ваше ФИО:   ${firstName} ${lastName} ${secondName}\n ваш возраст в годах:    ${ageNumber}\n ваш возраст в днях:    ${ageDays}\n через 5 лет вам будет:   ${ageThrough}\n ваш пол:  ${genderLabel}\n вы на пенсии:    ${pensiya}`)
        
        
        
   





