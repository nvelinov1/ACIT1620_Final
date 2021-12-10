let toggle = document.querySelector(".toggle")
let body = document.querySelector(".light-theme")

toggle.addEventListener('click', (e) => {
    body.classList.toggle('dark-theme')
})