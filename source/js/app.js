
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

console.log(allLessons)
