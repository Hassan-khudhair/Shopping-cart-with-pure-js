let usernameInput = document.querySelector("input[type='text']");
let emailIput = document.querySelector("input[type='email']");
let passwordInput = document.querySelector("input[type='password']");
let btnsubmit = document.getElementById("submit");

btnsubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (usernameInput.value === "" || emailIput.value === "" || passwordInput.value === "") {
        alert("plaese fill date");
    } else {
        localStorage.setItem('username', usernameInput.value)
        localStorage.setItem('email', emailIput.value)
        localStorage.setItem('password', passwordInput.value);
        setTimeout(() => {
            window.location= "index.html";
        }, 1500);
    }
    console.log(usernameInput.value)
})