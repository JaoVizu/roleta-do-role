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
    const newListItem = document.createElement('li')
    newListItem.innerText = places
    list.appendChild(newListItem)
  } else {
    places.forEach(place => {
      const listItems = document.createElement('li')
      listItems.innerText = place
      list.appendChild(listItems)
    })
  }
  
 
}