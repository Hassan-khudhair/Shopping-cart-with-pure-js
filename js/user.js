let links = document.querySelector(".links");
let userInfo = document.querySelector(".user_info");
let user = document.querySelector(".user");
let logout = document.querySelector(".logout");

let username = localStorage.getItem("username");
if (username) {
  links.remove();
  userInfo.style.display = "flex";
  user.innerHTML = username;
}

logout.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 3000);
});
