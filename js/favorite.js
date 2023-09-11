let productsDom = document.querySelector(".products");
let NoProducts = document.querySelector(".noproducts");

function drawFavoriteProducts(allproducts = []) {
  if (JSON.parse(localStorage.getItem("porductsFavorite")).length === 0)
    NoProducts.innerHTML = "there is no items favorite !!";

  let productsInCart =
    JSON.parse(localStorage.getItem("porductsFavorite")) || allproducts;
  let productsUi = productsInCart.map((item) => {
    return `
            <div class="product-item">
                <img src=${item.imageurl} alt="" class="porduct-item-img">
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>Lorem ipsum dolor sit elit. Repellendus, optio!</p>
                    <span>size: ${item.size}</span><br>
                    <span>quantity: ${item.qty}</span>
                </div>
                <div class="product-item-action">
                    <button class="add-to-card " onClick="removeFromFavorites(${item.id})">
                        Remove From Favorite
                    </button>
                        <i class="fa-solid fa-heart favorite c-red"></i>
                </div>
            </div>
        `;
  });
  productsDom.innerHTML = productsUi.join("");
}
drawFavoriteProducts();



function removeFromFavorites(id) {
  let porductsFavorite = localStorage.getItem("porductsFavorite");

  if (porductsFavorite) {
    let items = JSON.parse(porductsFavorite);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("porductsFavorite", JSON.stringify(filteredItems));
    drawFavoriteProducts(filteredItems);
  }
}
