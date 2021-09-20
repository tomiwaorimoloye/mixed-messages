const displayedMessage = document.querySelector('.text') // this is where the text will be shown on the webpage
const reloadButton = document.querySelector('button')
const tabs = document.querySelectorAll('li')
let currentType = document.querySelector('.active').dataset.type // this tells what type of message should be displayed

// this section allows user to switch tabs
tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        // nothing will happen if the clicked tab is already active
        if (!tab.classList.contains('active')) {
            tab.classList.add('active')
            currentType = event.target.dataset.type
            displayedMessage.innerHTML = 'Loading...' // show loading text while fetching the API
            displayMessage(currentType)
            
            // make sure only one tab is active at a time
            let activeTabs = document.querySelectorAll('.active')
            activeTabs.forEach(activeTab => {
                if (activeTab !== event.target) {
                    activeTab.classList.remove('active')
                }
            })
        }
    })
})

// show another random message when the reload button is clicked
reloadButton.addEventListener('click', event => {
    displayedMessage.innerHTML = 'Loading...' // show loading animation
    displayMessage(currentType)
})

function displayMessage(type) {
    switch(type) {
        case 'compliment':
            compliment()
            break
        case 'joke':
            joke()
            break
        case 'activity':
            activity()
            break
    }
}

function compliment() {
    fetch('https://complimentr.com/api')
    .then(res => res.json())
    .then(data => displayedMessage.innerHTML = data.compliment)
    .catch(error => console.error('Error: ' + error))
}

function activity() {
    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => displayedMessage.innerHTML = data.activity)
    .catch(error => console.error('Error: ' + error))
}

function quote() {
    fetch('https://api.themotivate365.com/stoic-quote')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ' + error))
}

function joke() {
    const options = {
        headers: {
            'Accept':'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', options)
    .then(res => res.json())
    .then(data => displayedMessage.innerHTML = data.joke)
    .catch(error => console.error('Error: ' + error))
}

function random() {
    let max = this[quote].length
    let randomIndex = Math.floor(Math.random() * max)

    // return the random message based on the message type
    return this[quote][randomIndex]
}

// browser should automatically display a message when loaded
document.addEventListener('DOMContentLoaded', event => {
    displayedMessage.innerHTML = 'Loading...'
    displayMessage(currentType)
})
