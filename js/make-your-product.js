'use strict '


const Product = function (name, price, type, path) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.path = path;
    this.quantity = 0;
    Product.allProducts.push(this);
};
Product.allProducts = [];

let selectYourProduct=[]; 
let parentForm = document.getElementById('ownProduct');
console.log(parentForm);
parentForm.addEventListener('submit' , addYourProduct );


//add your product
function addYourProduct(event){
console.log('hello',event);
event.preventDefault();
let nameOfProduct=event.target.name.value;
let priceOfProduct=event.target.priceOfProduct.value;
let categoriesOfProduct=event.target.Categories.value;
let image=event.target.pictures.value;
// add URL images 
new Product (nameOfProduct , priceOfProduct , categoriesOfProduct,image );
console.log(Product.allProducts) 
// parentForm.textContent='';
setItem(); 
}
// addYourProduct();

//set in local
function setItem() {
    let data = JSON.stringify(Product.allProducts);
    localStorage.setItem("product", data);
}

function message()
{
    let m1=alert('your Product has been added successfuly!!');

}


//get from local
// function getItems(){
//     let localObj= localStorage.getItem("product");
//     if (localObj){
//         Product.allProducts = JSON.parse(localObj);
//         console.log(JSON.parse(localObj));
//     }
// }
// getItems();