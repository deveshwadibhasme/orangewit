const menuIcon = document.querySelector('.menu-icon')
const dropMenu = document.querySelector('.drop-menu')
const closeMenu = document.querySelector('.close-btn')

menuIcon.addEventListener('click', () =>{
    dropMenu.classList.add('open')
})
closeMenu.addEventListener('click', () =>{
    dropMenu.classList.remove('open')
})
menuIcon.addEventListener('touchup', () =>{
    dropMenu.classList.toggle('open')
})
closeMenu.addEventListener('touchup', () =>{
    dropMenu.classList.remove('open')
})
