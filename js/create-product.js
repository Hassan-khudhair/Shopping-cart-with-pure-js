let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSize = document.getElementById('product-size');
let inputfile = document.getElementById('upload-file');
let createForm = document.getElementById('product-form');
let productSizeValue;
let productImage;

productSize.addEventListener('change',getProductSizeValue)
createForm.addEventListener('submit',createProductFun)
inputfile.addEventListener('change',uploadImage)

function getProductSizeValue(e){
    productSizeValue = e.target.value;
}
function createProductFun(e){
    e.preventDefault();

    let allProducts = JSON.parse(localStorage.getItem('products')) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    
    if(nameValue && descValue ){
        let obj = {
        id: allProducts ? allProducts.length + 1 : 1,
        qty:1,
        imageurl:productImage,
        size:productSizeValue,
        title:nameValue,
        desc:descValue,
        isMe:"Y"
        };

        let newProducts = allProducts ?  [...allProducts , obj] : [obj];
        localStorage.setItem('products' , JSON.stringify(newProducts));
        productSize.value ='';
        productName.value ='';
        productDesc.value ='';

        setTimeout(() => {
            window.location = "index.html" ;
        }, 500);
    }else{
        alert('Please Enter Data . .')
    }
    
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