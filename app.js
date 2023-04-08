let navbar = document.querySelector(".navbar")
let menuBtn = document.querySelector(".menuBtn")
let closeBtn = document.querySelector(".closeBtn")

menuBtn.addEventListener('click', () => {

    navbar.classList.toggle('slider')
})

closeBtn.addEventListener('click', () => {
    
    navbar.classList.remove('slider')
})