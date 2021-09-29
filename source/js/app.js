const allElements = document.querySelector(".header *");
allElements.addEventListener("dblclick", function(evt) {
  evt.preventDefault()
})

// allElements.addEventListener("contextmenu", function(evt) {
//   evt.preventDefault()
// })



allElements.onmousedown = (evt) => {
  evt.preventDefault()
}

allElements.onselectstart = (evt) => {
  evt.preventDefault()
}

//slider on js
let slides = document.querySelectorAll('.slides .slide');
let currentSlide = 0;

let Interval = 3500; //time for change pictures
let slideInterval = setInterval(nextSlide,Interval);
// default time = 8500
function nextSlide() {
    slides[currentSlide].className = slides[currentSlide].className.replace(' showing','');
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className += ' showing';
}

function getCorrectTime() {
  const nowTime = new Date();
  const nowYear = document.querySelector('.js-year');
  nowYear.textContent = nowTime.getFullYear();

  const nowMonth = document.querySelector('.js-month');

  const months = ['января','февраля','марта','апреля','майя','июня','июля','августа','сентября','октября','ноября','декабря'];
  nowMonth.textContent = months[nowTime.getMonth()];

  const nowDay = document.querySelector('.js-day');
  nowDay.textContent = nowTime.getDate();

  let hours = 0;
  let minutes = 0;
  let second = 0;

  const timeNow = document.querySelector('.js-time');

  if (nowTime.getHours()<10) {
    hours = '0' + nowTime.getHours();
  } else {
    hours = nowTime.getHours();
  }

  if (nowTime.getMinutes()<10) {
    minutes ='0' + nowTime.getMinutes();
  } else {
    minutes = nowTime.getMinutes();
  }

  if (nowTime.getSeconds()<10) {
    second = '0' + nowTime.getSeconds();
  } else {
    second = nowTime.getSeconds();
  }

  timeNow.textContent = hours + ':' + minutes + ':' + second;
}


const corretTime = setInterval(function time() {
  getCorrectTime();
}, 1000);
// clearTimeout(corretTime);

function loadJSON(name) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', name , false);
  xhr.send();
  if (xhr.status !== 200) {
    // обработать ошибку
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  } else {
    // вывести результат
    return xhr.responseText;
  }
}

const allLessons = JSON.parse(loadJSON('js/lessons.json'));
const outputString = document.querySelector('.info');
for ( const f of allLessons.teachersList) {
  // outputString.textContent =outputString.textContent + ' '  + f.name;
}
console.log(allLessons);
