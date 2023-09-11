let get_user = localStorage.getItem('username')
let get_email = localStorage.getItem('email')
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter(i => i.isMe === "Y");



let usernameProfile= document.getElementById('username')
let emailProfile= document.getElementById('email')
let productsLength = document.querySelector('#productsLength span')

usernameProfile.innerHTML = get_user;
emailProfile.innerHTML = get_email;

if(myProducts.length !=0 ){
    console.log(myProducts)
    productsLength.innerHTML = myProducts.length;
}else{
    productsLength.remove()
}