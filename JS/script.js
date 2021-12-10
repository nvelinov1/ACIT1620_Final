let toggle = document.querySelector(".toggle")
let body = document.querySelector(".light-theme")

toggle.addEventListener('click', (e) => {
    body.classList.toggle('dark-theme')
})

let submit = document.querySelector("#frm-btn")

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let msgvalue = document.querySelector('#msg').value
    let namevalue = document.querySelector('#name').value 
    let emailvalue = document.querySelector('#email').value
    console.log( {
        name: namevalue,
        email: emailvalue,
        msg: msgvalue
    })
})