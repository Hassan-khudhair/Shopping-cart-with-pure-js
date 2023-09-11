let products = JSON.parse(localStorage.getItem('products'));
let productId = localStorage.getItem('productId');
let itemDom = document.querySelector('.item-details');

let productDetailsItem = products.find( (item)=> item.id == productId );

itemDom.innerHTML= `
<img src="${productDetailsItem.imageurl}" alt="">
<h3>${productDetailsItem.title}</h3>
<p>${productDetailsItem.desc}</p>
<span>size : ${productDetailsItem.size}</span><br>
<span>quantity : ${productDetailsItem.qty}</span><br>
<button onclick="editProductId(${productId})"> Edit product </button>
`



function editProductId(id){
    localStorage.setItem('editProduct',id);
    window.location = "editProduct.html";
}