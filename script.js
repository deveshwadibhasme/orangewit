const menuIcon = document.querySelector('.menu-icon')
const dropMenu = document.querySelector('.drop-menu')

menuIcon.addEventListener('click', () =>{
    dropMenu.classList.toggle('open')
})
menuIcon.addEventListener('touchup', () =>{
    dropMenu.classList.toggle('open')
})
