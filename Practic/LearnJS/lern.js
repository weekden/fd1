// let admin 
// let name = 'Jhon';
// admin = 'Jhon';
// alert (admin);

// const ourPlanetName = '';
// let curentUserName = '';

// let userName = prompt('Ввведите имя пользователя','');
// alert (`Имя пользователя ${userName}`);

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert (a + b);

// let a = prompt("Какое название JS", "");
//     if (a === 'ECMAScript') {
//         alert ("Верно!");
//     } else {
//         alert ("Вы незнаете ECMAScript?");
//     }

    // let b = +prompt("Введите число", "");
    //     if (b > 0) {
    //     alert ("1");
    //     } else if (b < 0) {
    //     alert ("-1");
    //     } else {
    //     alert ("0");
    //     }


// let result;
// if (a + b < 4) {
//   result = 'Мало';
//   alert("Мало");
// } else {
//   result = 'Много';
//   alert('Много');
// }
// result = (a + b < 4) ? alert("Мало") : alert('Много'); 

// let message;
// let login = prompt();

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
// alert(message);

// let user = prompt('Whu is it?');
//     if( user === 'Admin') {
//         let pasword = prompt('Pasword');
//         if (pasword === "I'm boss") {
//             alert(`Welcome!`)
//         } else if (pasword === '' || pasword === null) {
//             alert("cancel")
//         } else if (pasword !== "I'm boss") {
//             alert("password not true");
//         }
//     }  else  if (user === '' || user === null) {
//         alert("Cancel");
//     }  else  if (user !== 'Admin') {
//         alert("I don't know you");
//     }
   

// let num;
// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);
   

// let n = 1000;
// next:
// for(let i = 2; i <= n; i++) {
//     for(let k = 2; k < i; k++) {
//  if (i % k === 0) continue next; 
//  } 
// console.log(i);
// }

console.log(
    // Входной массив
    [1, 4, 3, 0, 4, 5, 4]
      // Оставляем только чётные числа
      .filter(element => !(element % 2))
      // Считаем квадратный корень и записываем в аккумулятор
      .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
   ); // 6