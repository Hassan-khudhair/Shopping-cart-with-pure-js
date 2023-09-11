// products home page
let productsDom = document.querySelector(".products");
// let cartProductMinuDom = document.querySelector(".carts-products");
// let cartProductDom = document.querySelector(".carts-products div");
// let countnum = document.querySelector(".user_info li span");
// let cartShoppingDom = document.querySelector(".shoppingCart");
let products = productsDB;

let drawProductsUI;
(drawProductsUI = function (products = []) {
  let productsUi = products.map((item) => {
    return `
            <div class="product-item" style="border: ${item.isMe === 'Y' ? '1px solid green' : 'none'}">
                <img src='${
                    item.imageurl
                }' alt="no products img" class="porduct-item-img" >
                <div class="product-item-desc">
                    <a onclick='saveItem(${item.id})'>${item.title}</a>
                    <p>${item.desc}</p>
                    <span>size: ${item.size}</span>
                    ${item.isMe === "Y"  && '<button class="edit-product" onclick="editProductId('+ item.id + ')">Edit product</button>'}
                </div>
                <div class="product-item-action">
                    <button class="add-to-card " onClick="addToCart(${
                        item.id
                        })">
                        Add to cart
                    </button>
                        <i class= "${
                            item.liked == true
                            ? "fa-solid fa-heart favorite c-red"
                            : "fa-regular fa-heart favorite "
                        }" onclick="addToFavorite(${item.id})"></i>
                </div>
            </div>
            `;
    });

    productsDom.innerHTML = productsUi.join("");
})(JSON.parse(localStorage.getItem("products")) || products);




// add to cart 

function addToCart(id) {
    if (localStorage.getItem("username")) {
        let products = JSON.parse(localStorage.getItem('products')) || products;
        let product = products.find((item) => item.id === id);
        let isProductInCart = addedItems.some((i) => i.id === product.id);
        console.log(isProductInCart)
        if (isProductInCart) {
            addedItems = addedItems.map(p => {
                if(p.id === product.id) p.qty += 1;
                return p;
            });
        } else {
            addedItems.push(product);
        }

        cartProductDom.innerHTML = "";
        addedItems.forEach((item) => {
            cartProductDom.innerHTML += `<p>${item.title} <span class="item-qty">${item.qty}</span> </p>`;
        });

        localStorage.setItem("porductsItem", JSON.stringify(addedItems));
        let cartProductItemslength = document.querySelectorAll(
        ".carts-products div p"
        );
        countnum.style.display = "block";
        countnum.innerHTML = cartProductItemslength.length;
    } else {
        window.location = "login.html";
    }
}

function getUniqueArr(arr, filterType) {
    let unique = arr
        .map((item) => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter((item) => arr[item])
        .map((item) => arr[item]);

    return unique;
}




function saveItem(id) {
    localStorage.setItem("productId", id);
    window.location = "cartDetails.html";
}



//search function and events 
let input = document.getElementById("search");
input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        search(e.target.value, JSON.parse(localStorage.getItem("products")));
    }
    if (e.target.value.trim() === "") {
        drawProductsUI(JSON.parse(localStorage.getItem("products")));
    }
});
function search(title, myArray) {
    let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(arr);
}





let favoritesItems = localStorage.getItem("porductsFavorite")
    ? JSON.parse(localStorage.getItem("porductsFavorite"))
    : [];



// add to favoreites pages 
function addToFavorite(id) {
    if (localStorage.getItem("username")) {
        let chosenItem = products.find((item) => item.id === id);
        let isProductInfaveorite = favoritesItems.some((i) => i.id === chosenItem.id);
        chosenItem.liked = true;
        
        if (isProductInfaveorite) {
            favoritesItems = products.map(p => {
                if(p.id === chosenItem.id) p.liked = true;
                return p;
            });
        } else {
            favoritesItems.push(chosenItem);
        }

        favoritesItems = [...favoritesItems, chosenItem];
        let uniquePorducts = getUniqueArr(favoritesItems, "id");
        localStorage.setItem("porductsFavorite", JSON.stringify(favoritesItems));
        localStorage.setItem("products", JSON.stringify(products));
        drawProductsUI(products);
    } else {
        window.location = "login.html";
    }
}



// filter products by size 

let sizeFilter = document.getElementById('size-filter');

sizeFilter.addEventListener('change',getProductsFilterBySize);

function getProductsFilterBySize(e){
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem('products')) || products;

    if(val === 'all'){
        drawProductsUI(products);
    }else{
        products= products.filter(i => i.size === val);
        drawProductsUI(products)
    }
}





// function edit produt

function editProductId(id){
    localStorage.setItem('editProduct',id);
    window.location = "editProduct.html";
}