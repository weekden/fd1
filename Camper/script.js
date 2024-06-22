function openChat() {
    var openChatCheckbox = document.getElementById('open-chat');
    openChatCheckbox.checked = true;
}

function closeChat() {
    var closeChatCheckbox = document.getElementById('open-chat');
    closeChatCheckbox.checked = false;
}


function closeComments() {
  var closeCommentsCheckbox = document.getElementById('button-comments');
  closeCommentsCheckbox.checked = false;
}







  // Условия  показа/скрытия элементов при скролле 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var documentHeight = document.documentElement.scrollHeight;
  var viewportHeight = window.innerHeight;
  var scrollPosition = window.scrollY || window.pageYOffset;


// Условия  показа/скрытия меню и кнопки чат
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
    document.getElementById("chat__btn").style.opacity = "1";
  } else {
    document.getElementById("menu").style.top = "-70px";
    document.getElementById("chat__btn").style.opacity = "0";
  }

  //Условие для показа/скрытия кнопки "наверх" 
  if (scrollPosition >= documentHeight / 2 - viewportHeight && prevScrollpos > currentScrollPos ) {
    document.getElementById("button-up").style.opacity = "1";
  } else {
    document.getElementById("button-up").style.opacity = "0";
  }

  prevScrollpos = currentScrollPos;
};




// Функция возврата в начало страницы, при нажатии кнопки "наверх"
function scrollUp() {
  window.scrollTo(0, 0);
  history.pushState({ scrollPos: 0 }, "");
}

document.addEventListener("DOMContentLoaded", function() {
  // Записываем текущее положение скролла в историю при загрузке страницы
  history.replaceState({ scrollPos: window.scrollY || window.pageYOffset }, "");

  // При каждом клике на кнопку "наверх" записываем текущее положение скролла в историю
  document.getElementById("button-up").addEventListener("click", scrollUp);

  // При прокрутке страницы показываем/скрываем кнопку
  window.addEventListener("scroll", function() {
    var buttonUp = document.getElementById("button-up");
    if (window.scrollY > window.innerHeight / 2) {
      buttonUp.style.display = "block";
    } else {
      buttonUp.style.display = "none";
    }
  });
});





// Функция  добавления css классов элементам при скролле

document.addEventListener('DOMContentLoaded', function () {
  function onEntry(entry, classToAdd) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add(classToAdd);
      }
    });
  }

  function observeElements(selector, classToAdd) {
    let elements = document.querySelectorAll(selector);
    let observer = new IntersectionObserver(entries => onEntry(entries, classToAdd), { threshold: [0.5] });
    
    elements.forEach(elm => {
      observer.observe(elm);
    });
  }

  // Загрузка страницы с задержкой
  window.addEventListener('load', function () {
    document.body.classList.add('page_active');
  });

  // Плавное проявление заголовков страниц
  observeElements('.slow-show', 'active');

  // Плавное проявление зеленой кнопки
  observeElements('.green-button', 'activ_green-button');
});



// __________________________Chat-messge________________________________

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('messageInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
    // Получаем текст из поля ввода и обрезаем пробелы
    const messageText = document.getElementById('messageInput').value.trim();

    // Проверяем, что сообщение не пустое
      if (messageText !== '') {
        sendMessage(messageText);
      }
    }
  });
});

function sendMessage(messageText) {
  // Create new element
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-form__message');
  messageElement.textContent = messageText;
  // Add message
  document.querySelector('.chat-form__main').appendChild(messageElement);
  // Clear input
  document.getElementById('messageInput').value = '';
}





// __________________________Posts_Slider________________________________
var slideIndex = 0;
showSlides();


function showSlides() {
    var slides = document.getElementsByClassName("slider-inner");
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
      dots[i].className = dots[i].className.replace(" active-dots", "");
    }
  
    if (slides[slideIndex]) {
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className = dots[slideIndex].className + " active-dots";
  } 
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

function changeDisplay () {
  var slides = document.getElementsByClassName("slider-inner");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }
}
changeDisplay()
window.addEventListener("resize", () => {
  if (window.innerWidth >= 687) {
    changeDisplay()
  } 
});
