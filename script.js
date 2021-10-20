const btnGerar = document.getElementById('btnGerar');

function roleta() {
  const places = ['Burguer King', 'Verace Pizza', 'Habbibs', 'Terraço Pizza Bar', 'Pizzaria Tres Irmaos', 'Alguma barraca na rua', 'Stockyards Angus', 'Gugu Gourmet']
  const randomNumber = Math.floor(Math.random() * places.length);
  return places[randomNumber]
}

function getRandomPlace() {
  const placeHtml = document.getElementById('place');
  placeHtml.innerText = roleta()
}

btnGerar.addEventListener('click', getRandomPlace)

