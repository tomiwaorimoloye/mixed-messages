let currentTheme = document.querySelector('button.active').dataset.theme
let themeButtons = document.querySelectorAll('#theme-toggle > button')

themeButtons.forEach(themeButton => {
    themeButton.addEventListener('click', setTheme)
    // themeButton.addEventListener('click', sdk)
})

function setTheme(event) {
    if (!event.target.classList.contains('active')) {
        event.target.classList.add('active')

        // make sure only one button is active at a time
        themeButtons.forEach(button => {
            if (button.classList.contains('active') && button !== event.target) {
                button.classList.remove('active')
            }
        })
    }

    // update the current theme
    currentTheme = event.target.dataset.theme

    changeStyle()
}

function changeStyle() {
    let root = document.querySelector(':root')
    if (currentTheme === 'dark') {
        root.style.setProperty('--background-color', '#1f2140')
        root.style.setProperty('--dark-blue', '#161932')
        root.style.setProperty('--highlight-color', '#77f0f6')
        root.style.setProperty('--text-color', '#d9e3fe')
    } else {
        root.style.setProperty('--background-color', '#e7e9ed')
        root.style.setProperty('--text-color', '#33374b')
        root.style.setProperty('--highlight-color', '#2d539e')
        root.style.setProperty('--dark-blue', 'white')
    }

}


