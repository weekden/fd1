// var str = "My name is Maks";

// var result = str.indexOf("is", 4); // слева на право возвращает индекс
//     result = str.replace("Maks", "Denis"); // замена
//     result = str.trim
// console.log(str[4]);
// console.log(str.substring(2, 6));

// console.log(str.slice(2, 6));
// console.log(result);


// var arr = ['Artur', 'Kris', 'Denis', 'Sergey', 'Nata']; // добавляем один массив в другой
// var add = ['Vita', 'Maks'];
// var result = arr.concat(add);
// console.log(result);
// console.log(result.join (" - ")) // разделитель



// var arr = ['Artur', 'Kris', 'Denis', 'Sergey', 'Nata', "Maks", "Vita"]; // доб элемент в конец последн элемент






var str = 'every hunter wants to know where the pheasant sits';
var arr = str.split(" "); 
var newArr = arr.reverse();
var newStr = newArr.join(" ");
console.log(newStr);

var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
  
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className = dots[slideIndex].className + " active";
  }

function plusSlide() {
    slideIndex = slideIndex + 1;
    showSlides();
}

function minusSlide() {
    slideIndex = slideIndex - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}






