

function getCorrectTime(evt) {
  let nowTime = new Date();
console.log(nowTime)
let nowYear = document.querySelector(".js-year")
nowYear.textContent =nowTime.getFullYear()

let nowMonth = document.querySelector(".js-month")
if (nowTime.getMonth()===0) {
  nowMonth.textContent = "январь"
} else { if (nowTime.getMonth()===1) {
  nowMonth.textContent = "февраль"
} else if (nowTime.getMonth()===2) {
  nowMonth.textContent = "март"
} else if (nowTime.getMonth()===3) {
  nowMonth.textContent = "апрель"
} else if (nowTime.getMonth()===4) {
  nowMonth.textContent = "май"
} else if (nowTime.getMonth()===5) {
  nowMonth.textContent = "июнь"
} else {
  if (nowTime.getMonth()===6) {
    nowMonth.textContent = "июль"
  } else {
    if (nowTime.getMonth()===7) {
      nowMonth.textContent = "август"
    } else {
      if (nowTime.getMonth()===8) {
        nowMonth.textContent = "сентябрь"
      } else {
        if (nowTime.getMonth()===9) {
          nowMonth.textContent = "октябрь"

        } else {
          if (nowTime.getMonth()===10) {
            nowMonth.textContent = "ноябрь"

          } else {
            if (nowTime.getMonth()===11) {
              nowMonth.textContent = "декабрь"
            }

          }
        }
      }
    }
  }
}
}

let nowDay = document.querySelector(".js-day")
nowDay.textContent = nowTime.getDate() + "";


let hours = 0;
let minutes = 0;
let second = 0;

let timeNow = document.querySelector(".js-time")

if (nowTime.getHours()<10) {
  hours = "0" + nowTime.getHours();
} else {
  hours = nowTime.getHours();
}

if (nowTime.getMinutes()<10) {
  minutes = "0" + nowTime.getMinutes();
} else {
  minutes = nowTime.getMinutes();
}

if (nowTime.getSeconds()<10) {
  second = "0" + nowTime.getSeconds()
} else {
  second = nowTime.getSeconds();
}

timeNow.textContent = hours + ":" + minutes + ":" + second;

}


let corretTime  = setInterval(function time(evt) {
getCorrectTime()

}, 1000);
// clearTimeout(corretTime);

function loadJSON(name) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', name , false);
  xhr.send();
  if (xhr.status != 200) {
  // обработать ошибку
  alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
} else {
  // вывести результат
  return xhr.responseText;
}
}



let allLessons = JSON.parse(loadJSON("js/lessons.json"))

let outputString = document.querySelector(".info")

for ( f of allLessons.teachersList) {
  // outputString.textContent =outputString.textContent + " "  + f.name;
}

console.log(allLessons)

