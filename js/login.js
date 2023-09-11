let username = document.querySelector("input[type='text']");
let password = document.querySelector("input[type='password']");
let loginbtn = document.querySelector("input[type='submit']");

loginbtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (username.value !== localStorage.getItem('username') || password.value !== localStorage.getItem('password')) {
        alert('please check and train again');
    }else{
        setTimeout(() => {
            window.location = "index.html";
        }, 1500);
    }
})
