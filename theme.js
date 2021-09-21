let currentTheme = document.querySelector('button.active')
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
}


