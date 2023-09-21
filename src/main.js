const hamburger=document.getElementById('hamburger')
const navMenu=document.getElementById('nav-menu')
const navClose=document.getElementById('nav-close')
const navLink=document.querySelectorAll('.nav__link')
const darkMode=document.querySelector('#dark-mode')
const body=document.getElementsByTagName('BODY')

navMenu.classList.add('hidden')

darkMode.addEventListener('click',()=>{
    if (document.body.style.backgroundColor === 'black') {
        return document.body.style.backgroundColor="#010a5e"
    }
    document.body.style.backgroundColor="black"
})

navLink.forEach(link =>
    link.addEventListener('click',()=>{
        navMenu.classList.add('hidden')
    })
    )

hamburger.addEventListener('click',()=>{
    navMenu.classList.remove('hidden')
})
navClose.addEventListener('click',()=>{
    navMenu.classList.add("hidden")
})
