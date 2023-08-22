import '../scss/style.scss'

let numberOfTravalers = document.querySelector('#travelersCounter')
numberOfTravalers.addEventListener('input', function() {
    let valueOfTravelers = numberOfTravalers.value;
    if (valueOfTravelers < 1) {
        document.getElementById("travelersCounter").value=1
    }
    if (valueOfTravelers > 4) {
        numberOfTravalers.type = 'text'
        document.getElementById("travelersCounter").value='Group 4+'
    }
    if (valueOfTravelers > 8) {
        numberOfTravalers.type = 'text'
        document.getElementById("travelersCounter").value='Group 8+'
    }
    if (valueOfTravelers > 12) {
        numberOfTravalers.type = 'text'
        document.getElementById("travelersCounter").value=12
        alert('We do not provide tours for groups of more than 12 people')
    }
    if (valueOfTravelers < 5) {
        numberOfTravalers.type = 'number'
    }
    
})

let destination = document.querySelector('#destination')
let destinationSelector = document.querySelector('#destination-selector')
console.log(destinationSelector)
destination.addEventListener('focus', ()=> {
    destinationSelector.classList.toggle('hidden')
})
destination.addEventListener('blur', ()=> {
    destinationSelector.classList.toggle('hidden')
})