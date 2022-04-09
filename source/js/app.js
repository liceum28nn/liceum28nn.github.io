import { getData } from "./utils.min.js";

const allElements = document.querySelector('*');
allElements.addEventListener('dblclick', (evt) => {
  evt.preventDefault();
});

allElements.addEventListener('contextmenu', (evt) => {
  evt.preventDefault();
});

allElements.onmousedown = (evt) => {
  evt.preventDefault();
};

allElements.onselectstart = (evt) => {
  evt.preventDefault();
};

//slider on js
if ( document.querySelector('.slides')) {
  const slides = document.querySelectorAll('.slides .slide');
  let currentSlide = 0;
  const Interval = 3500; //time for change pictures
  // default time = 8500
  const nextSlide = () => {
    slides[currentSlide].className = slides[currentSlide].className.replace(' showing','');
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className += ' showing';
  };
  const slideInterval = setInterval(nextSlide,Interval);
}

if (document.querySelector('.slides2')) {
  const slides2 = document.querySelectorAll('.slides2 .slide2');
  let currentSlide2 = 0;

  const Interval2 = 3500; //time for change pictures
  // default time = 8500
  const nextSlide2 = () => {
    slides2[currentSlide2].className = slides2[currentSlide2].className.replace(' showing2','');
    currentSlide2 = (currentSlide2+1)%slides2.length;
    slides2[currentSlide2].className += ' showing2';
  };
  let slideInterval2 = setInterval(nextSlide2,Interval2);
}

const getCorrectTime = () => {
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
    hours = `0${nowTime.getHours()}`;
  } else {
    hours = nowTime.getHours();
  }

  if (nowTime.getMinutes()<10) {
    minutes =`0${nowTime.getMinutes()}`;
  } else {
    minutes = nowTime.getMinutes();
  }

  if (nowTime.getSeconds()<10) {
    second = `0${nowTime.getSeconds()}`;
  } else {
    second = nowTime.getSeconds();
  }
  timeNow.textContent = `${hours}:${minutes}:${second}`;
};


const corretTime = setInterval(function time() {
  getCorrectTime();
}, 1000);
// // clearTimeout(corretTime);

function loadJSON(name) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', name , false);
  xhr.send();
  if (xhr.status !== 200) {
    // обработать ошибку
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText); //eslint-disable-line
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
// console.log(allLessons);


//show lesons 1 smeni

if (document.querySelector('.js-item-1')) {
  const lessonOneRange = document.querySelector('.js-item-1');
  lessonOneRange.addEventListener('click',  () => {
    document.querySelector('.js-smena').classList.toggle('visually-hidden');
  });

  document.querySelector('.js-smena-btn').addEventListener('click', () => {
    this.parentElement.classList.toggle('visually-hidden');
  });
}

if (document.querySelector('.js-item-2')) {
  document.querySelector('.js-item-2').addEventListener('click', () => {
    document.querySelector('.js-smena-two').classList.toggle('visually-hidden');
  });
}


if (document.querySelector('.js-smena-next-btn')) {
  document.querySelector('.js-smena-next-btn').addEventListener('click', function () {
    this.parentElement.classList.toggle('visually-hidden');
  });
}

if (document.querySelector('.js-item-3')) {
  document.querySelector('.js-item-3').addEventListener('click', () => {
    document.querySelector('.js-smena-pdou').classList.toggle('visually-hidden');
  });
}

if (document.querySelector('.js-smena-pdou-btn')) {
  document.querySelector('.js-smena-pdou-btn').addEventListener('click', function () {
    this.parentElement.classList.toggle('visually-hidden');
  });
}

const showData = (dataServer) => {
  console.log(`dataServer=${dataServer}`);
  console.log(`billing=${dataServer.classList}`);

  for (let item of dataServer.classList) {
    console.log(`item.id=${item.name}`)

  }
};

getData((questionArray) => {
  showData(questionArray);
  })
