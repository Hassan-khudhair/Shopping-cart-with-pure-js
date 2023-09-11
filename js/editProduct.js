let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let productId = JSON.parse(localStorage.getItem('editProduct'));

let getProductId = products.find(i => i.id === productId);

let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSize = document.getElementById('product-size');
let inputfile = document.getElementById('upload-file');
let updateForm = document.getElementById('update-form');
let productSizeValue;
let productImage;

productName.value = getProductId.title;
productDesc.value = getProductId.desc;
productSize.value  = getProductId.size;
productImage = getProductId.imageurl;

productSize.addEventListener('change',getProductSizeValue)
updateForm.addEventListener('submit',UpdateProductFun)
inputfile.addEventListener('change',uploadImage)

function getProductSizeValue(e){
    productSizeValue = e.target.value;
}



function UpdateProductFun(e){
    e.preventDefault();

    getProductId.title = productName.value;
    getProductId.desc = productDesc.value;
    getProductId.size = productSizeValue;
    getProductId.imageurl = productImage;

    localStorage.setItem('products', JSON.stringify(products))

    setTimeout(() => {
        window.location = "index.html" ;
    }, 500);
    
}

let preview;
function uploadImage(e){
    let file = this.files[0];
    let types = ["image/jpeg","image/png"]

    if(types.indexOf(file.type)== -1){
        alert('type note supported');
        return;
    }

    if(file.size > 2 * 1024 * 1024){
        alert('image not exced 2MG');
        return;
    }
    // productImage = URL.createObjectURL(file);
    getImageBase64(file);

}

function getImageBase64(file){
    let reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload = function (){
        productImage = reader.result;
    };

    reader.onerror = function (){
        alert('Error !!')
    }
}