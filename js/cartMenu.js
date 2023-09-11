let cartProductDom = document.querySelector(".carts-products div");
let countnum = document.querySelector(".user_info li span");
let cartShoppingDom = document.querySelector(".shoppingCart");
let cartProductMinuDom = document.querySelector(".carts-products");



// check if i have product in cart or not 
let addedItems = localStorage.getItem("porductsItem")
    ? JSON.parse(localStorage.getItem("porductsItem"))
    : [];

    console.log(addedItems)

if (addedItems.length !=0) {
    addedItems.map((item) => {
        cartProductDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    countnum.style.display = "block";
    countnum.innerHTML += addedItems.length;
}


cartShoppingDom.addEventListener("click", openCartMenu);

function openCartMenu() {
    if (cartProductDom.innerHTML != "") {
        if (cartProductMinuDom.style.display == "block") {
            cartProductMinuDom.style.display = "none";
        } else {
            cartProductMinuDom.style.display = "block";
        }
    }
}