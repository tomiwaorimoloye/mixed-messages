let toggleContainer = document.querySelector('#toggle-container')
let currentTheme = toggleContainer.classList[0]

toggleContainer.addEventListener('click', setTheme)

function setTheme(event) {
    if (!toggleContainer.classList.contains('light')) {
        toggleContainer.classList.add('light')
        toggleContainer.classList.remove('dark')
    } else {
        toggleContainer.classList.remove('light')
        toggleContainer.classList.add('dark')
    }

    // update the current theme
    currentTheme = toggleContainer.classList[0]

    changeStyle()
}

function changeStyle() {
    let root = document.querySelector(':root')
    
    if (currentTheme === 'dark') {
        root.style.setProperty('--background-color', '#1f2140')
        root.style.setProperty('--dark-blue', '#161932')
        root.style.setProperty('--highlight-color', '#77f0f6')
        root.style.setProperty('--text-color', '#d9e3fe')
        document.body.classList.remove('light')
    } else {
        root.style.setProperty('--background-color', '#e7e9ed')
        root.style.setProperty('--text-color', '#33374b')
        root.style.setProperty('--highlight-color', '#2d539e')
        root.style.setProperty('--dark-blue', 'white')
        document.body.classList.add('light')
    }
}
