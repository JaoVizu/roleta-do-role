const btnGerar = document.getElementById('btnGerar');

function roleta() {
  let places = ''
  if(localStorage.getItem('listOfPlaces') && JSON.parse(localStorage.getItem('listOfPlaces')).length > 0){
    places = JSON.parse(localStorage.getItem('listOfPlaces'))
  } else {
    displayWarningMessage()
    return places = ''
  }
  const randomNumber = Math.floor(Math.random() * places.length);
  return places[randomNumber]
}

function getRandomPlace() {
  const placeHtml = document.getElementById('place');
  placeHtml.innerText = roleta()
}

function displayWarningMessage() {
  const warningElement = document.getElementById('warning-message')
  warningElement.classList.add('active')
}

btnGerar.addEventListener('click', getRandomPlace)

