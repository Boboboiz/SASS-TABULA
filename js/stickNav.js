window.addEventListener("scroll", function (){
    let stickNav = document.querySelector("header")
    stickNav.classList.toggle('sticky', window.scrollY > 0)
})