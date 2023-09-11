let productsDom = document.querySelector(".products");
let NoProducts = document.querySelector(".noproducts");


let drawProductsUI;
(drawProductsUI = function (products = []) {
    let myProducts = products.filter((item)=> item.isMe === "Y" );
    if(myProducts.length != 0 ){
        let productsUi = myProducts.map((item) => {
        return `
                <div class="product-item" style="border: ${item.isMe === 'Y' ? '1px solid green' : 'none'}">
                    <img src='${
                        item.imageurl
                    }' alt="no products img" class="porduct-item-img" >
                    <div class="product-item-desc">
                        <a onclick='saveItem(${item.id})'>${item.title}</a>
                        <p>${item.desc}</p>
                        <span>size: ${item.size}</span>
                        <button class="edit-product" onclick="editProductId(${item.id})">Edit product</button>
                        <br>
                        <button  class="edit-product" onclick="deleteProduct(${item.id})"> Delete</button>
                    </div>
                    
                </div>
                `;
        });

        productsDom.innerHTML = productsUi.join("");
    }else{
        NoProducts.innerHTML = "There is no Data"
    }
})(JSON.parse(localStorage.getItem("products")) || productsDB);



function editProductId(id){
    localStorage.setItem('editProduct',id);
    window.location = "editProduct.html";
}


function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let myProducts = products.filter((item)=> item.isMe === "Y" );
    let filterd = myProducts.filter(i=> i.id !== id);
    let clickedItem = myProducts.find((i)=>i.id === id);
    products = products.filter(i => i.id !== clickedItem.id);
    localStorage.setItem('products',JSON.stringify(products));
    drawProductsUI(filterd);

}