const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav__link')
const darkMode = document.querySelector('#dark-mode')
const body = document.getElementsByTagName('BODY')


navMenu.classList.add('hidden')

darkMode.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'black') {
        return document.body.style.backgroundColor = "#010a5e"
    }
    document.body.style.backgroundColor = "black"
})

navLink.forEach(link =>
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden')
    })
)

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden')
})
navClose.addEventListener('click', () => {
    navMenu.classList.add("hidden")
})

const left = document.querySelector('#left')
console.log(left.classList);
const middle = document.querySelector('#middle')
const right = document.querySelector('#right')


const animation = (observer, classes, threshold) => {
    const intersectionObserver = new IntersectionObserver(entries => {
        const entry = entries[0]
        if (entry.isIntersecting) {
            entry.target.classList?.remove(classes)
        } else {
            entry.target.classList?.add(classes)
        }
    
    }, { threshold: threshold })
    
    intersectionObserver.observe(observer)
}

animation(left, '-translate-x-10', .3)
animation(middle, '-translate-y-10', .3)
animation(right, 'translate-x-10', .3)