const menuIcon = document.querySelector('.menu-icon')
const dropMenu = document.querySelector('.drop-menu')
const closeMenu = document.querySelector('.close-btn')
const innerMenu = document.querySelector('.menu-icon .inner-menu')

menuIcon.addEventListener('click', () =>{
    setTimeout(() =>{
        dropMenu.classList.add('open')
    },500)
    innerMenu.classList.add('open')
})
closeMenu.addEventListener('click', () =>{
    dropMenu.classList.remove('open')
    innerMenu.classList.remove('open')
})
menuIcon.addEventListener('touchup', () =>{
    dropMenu.classList.toggle('open')
})
closeMenu.addEventListener('touchup', () =>{
    dropMenu.classList.remove('open')
})
