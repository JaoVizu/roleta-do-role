const addPlaceInput = document.getElementById('add-place-input')
const button = document.getElementById('add-place-button')

if(localStorage.getItem('listOfPlaces')){
  updateDom(getPlacesFromLocalStorage())
}

button.addEventListener('click', event => {
  event.preventDefault();
  if(addPlaceInput.value === '') {
    alert('Campo não pode ser vazio!')
    return
  }
  const inputValue = addPlaceInput.value  
  if(!localStorage.getItem('listOfPlaces')) {
    localStorage.setItem('listOfPlaces', JSON.stringify([inputValue]))
    updateDom(getPlacesFromLocalStorage())
  }else {
    let addedPlaces =  getPlacesFromLocalStorage()
    addedPlaces.push(inputValue)
    localStorage.setItem('listOfPlaces', JSON.stringify(addedPlaces))
    updateDom(inputValue)
  }
  resetFormField()
})

function resetFormField() {
  addPlaceInput.value = ''
}

function getPlacesFromLocalStorage() {
  return JSON.parse(localStorage.getItem('listOfPlaces'))
}

function updateDom(places) {
  const list = document.getElementById('add-place-list')
  if(typeof places == 'string') {
    createListItem(list, places)
  } else {
    list.innerText = ''
    places.forEach(place => {
      createListItem(list, place)
    })
  }
}

function createListItem(parentElement, place) {
  const listItems = document.createElement('li')
  listItems.innerText = place
  listItems.appendChild(createDeleteListItemButton())
  parentElement.appendChild(listItems)
}

function createDeleteListItemButton() {
  const deleteButton = document.createElement('button')
  deleteButton.addEventListener('click', ev => deletePlaceFromList(ev.target.parentElement.innerText.replace('X', '').trim()))
  deleteButton.classList.add('delete-list-item')
  deleteButton.innerText = 'X'
  return deleteButton
}

function deletePlaceFromList(item) {
  const places = getPlacesFromLocalStorage()
  const itemIndex = places.indexOf(item)
  places.splice(itemIndex, 1)
  localStorage.setItem('listOfPlaces', JSON.stringify(places))
  updateDom(getPlacesFromLocalStorage())
}