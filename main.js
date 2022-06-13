const navToggle = document.querySelector('.nav__toggle--container')
const navListPrima = document.querySelector('.nav__list--primary')

navToggle.addEventListener('click', ev => {
    navToggle.classList.toggle('selected')
    navListPrima.classList.toggle('selected')
})