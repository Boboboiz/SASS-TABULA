window.addEventListener("scroll", function (){
    let stickNav = document.querySelector("header")
    stickNav.classList.toggle('sticky', window.scrollY > 0)
})

let toggle = document.querySelector('.toggle')
toggle.addEventListener('click', function(){
    
})