'use strict';
const CartI = function (name, price, type, path) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.path = path;
    CartI.allProducts.push(this);
}
CartI.allProducts = [];
new CartI('lower', 15, 'lowers', '../assets/accessories/accssories1.jpg');
new CartI('lower', 15, 'lowers', '../assets/accessories/accssories2.jpg');
new CartI('ower', 12, 'owers', '../assets/accessories/accssories3.jpg');
let button = document.getElementById('test');
button.addEventListener('click', submitter);
function submitter(event) {
    event.preventDefault();
    localStorage.setItem('added', JSON.stringify(CartI.allProducts));
}




// here loadcart starts
let cartItems;
function loadCart() {
    for (let i = 0; i < localStorage.length; i++) {
        cartItems = JSON.parse(localStorage.getItem(`added`)) || [];
    }

}
loadCart();
console.log(cartItems);
let cartCont = document.getElementById('tableResult');

for (let i = 0; i < cartItems.length; i++) {

    let tableRow = document.createElement('tr');
    cartCont.appendChild(tableRow);

    let naming = document.createElement('td');
    tableRow.appendChild(naming);
    naming.textContent = cartItems[i].name;
    console.log(cartItems[i].name)
    let itemImg = document.createElement('img');
    itemImg.setAttribute('src', `${cartItems[i].path}`);
    tableRow.appendChild(itemImg);
    let quantity = document.createElement('td');
    tableRow.appendChild(quantity);
    let inputQuantity = document.createElement('input');
    inputQuantity.setAttribute('type', 'number');
    inputQuantity.setAttribute('value', '1');
    inputQuantity.setAttribute('min', '1');
    inputQuantity.setAttribute('name', 'quantity');
    inputQuantity.setAttribute('id', 'quan');
    quantity.appendChild(inputQuantity);
    console.log(inputQuantity);
    let pricing = document.createElement('td');
    tableRow.appendChild(pricing);
    pricing.textContent = cartItems[i].price;
    let remove = document.createElement('td');
    tableRow.appendChild(remove);
    remove.setAttribute('id', i);
    remove.textContent = 'x';
}

console.log(localStorage);


let itemCount = document.getElementById('totalItems').textContent = cartItems.length;


// popup message code 


let modal = document.getElementById("myModal");


let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
    localStorage.clear();
    loadCart();
    setTimeout(function () {
        location.reload();
    }, 3000);
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}