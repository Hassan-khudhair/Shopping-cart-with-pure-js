let productsDom = document.querySelector(".products");
let NoProducts = document.querySelector(".noproducts");

function adawCartProducts(allproducts = []) {
  if (JSON.parse(localStorage.getItem("porductsItem")).length === 0)
    NoProducts.innerHTML = "there is no items !!";

  let productsInCart =
    JSON.parse(localStorage.getItem("porductsItem")) || allproducts;
  let productsUi = productsInCart.map((item) => {
    return `
            <div class="product-item">
                <img src=${item.imageurl} alt="" class="porduct-item-img">
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                    <span>size: ${item.size}</span><br>
                    <span>quantity: ${item.qty}</span>
                </div>
                <div class="product-item-action">
                    <button class="add-to-card " onClick="removeCart(${item.id})">
                        Remove From Cart
                    </button>
                        <i class="fa-regular fa-heart favorite"></i>
                </div>
            </div>
        `;
  });
  productsDom.innerHTML = productsUi.join("");
}
adawCartProducts();
function removeCart(id) {
  let productsInCart = localStorage.getItem("porductsItem");

  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("porductsItem", JSON.stringify(filteredItems));
    adawCartProducts(filteredItems);
  }
}
