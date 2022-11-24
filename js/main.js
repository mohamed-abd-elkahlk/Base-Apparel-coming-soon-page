let email = document.getElementById("email")
let submit = document.getElementById("submit")
let error = document.querySelector(".error_massege")
let valiledd = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
submit.onclick = () => {
    if (email.value === "") {
        error.innerHTML = "please provide a vailed email"
        error.style.color = "red"
    } else if (email.value.match(valiledd)) {
        error.innerHTML = "Email sent"
        error.style.color = "green"
    }else{
        error.innerHTML = "please provide a vailed email"
    }
}

