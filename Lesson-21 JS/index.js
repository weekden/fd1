//  var a = 10;
//  var b = "Hello";

//  var arr = [4, "hi", true, 'Friday', undefined, a, b]; //Array
//  console.log(arr.length);

//  console.log(arr[4]); // Обращение к элементу массива

//  arr[0] = 100;
//  console.log (arr);

// __________________________  Object__________________________________

// var obj = {}; // Object

// var car = {
//     model: 'Audi',
//     age: 2007,
//     color: 'red',
//     speed: 240,
//     automat: true,
//     getNumber: function () {
//         return "1234-tt-1"
//     },
// };

// car.doorsCount = 5;
// var z = car.speed;
// console.log(z);
// console.log(car.age);
// console.log(car);

// delete car.age

// console.log(car);
// console.log(car.getNumber());
// console.log("color" in car);

// for(key in car) {
    // console.log(car);   //  выводит ключи
// }

// for(key in car) {
    // console.log(car[key]); // выводит значения
// }

// console.log(car.age);

// var countries = {};

// function addCountry() {
//     var country = prompt('Country');
//     var country = prompt('Capital');
// }

var countriesObject = {
    Belarus: "Minsk",
    Italy: "Rome",
    Spain: "Madrid",
  };

function addCountry() {
  var country = prompt("Country?");
  var capital = prompt("Capital?");
  countriesObject[country] = capital;

  console.log(countriesObject);
}

function getCapital() {
    var country = prompt("Country fo capital?");
  
    if (country in countriesObject) {
      alert(countriesObject[country]);
    } else {
      alert("Wrong country!");
    }
  }

function getList() {
  for (key in countriesObject) {
    console.log(key + " -> " + countriesObject[key]);
  }
}

function deleteCountrie() {
    var country = prompt("What contrie do you waant delete?");
    if (country in countriesObject) {
        delete countriesObject[country];
      } else {
        alert("This countrie doesn't exest");
      }
}