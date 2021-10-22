const addPlaceInput = document.getElementById('add-place-input')
const button = document.getElementById('add-place-button')

if(localStorage.getItem('listOfPlaces')){
  console.log('Lugares', JSON.parse(localStorage.getItem('listOfPlaces')))
  updateDom(JSON.parse(localStorage.getItem('listOfPlaces')))
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
    updateDom(JSON.parse(localStorage.getItem('listOfPlaces')))
  }else {
    let addedPlaces =  JSON.parse(localStorage.getItem('listOfPlaces'))
    addedPlaces.push(inputValue)
    localStorage.setItem('listOfPlaces', JSON.stringify(addedPlaces))
    updateDom(inputValue)
  }
  resetFormField()
})

function resetFormField() {
  addPlaceInput.value = ''
}

function updateDom(places) {
  const list = document.getElementById('add-place-list')
  if(typeof places == 'string') {
    createListItem(list, places)
  } else {
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
  deleteButton.classList.add('delete-list-item')
  deleteButton.innerText = 'X'
  return deleteButton
}