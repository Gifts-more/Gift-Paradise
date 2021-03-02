/* eslint-disable no-empty */
/* eslint-disable indent */
'use strict';


let items = document.getElementById('items');
let cartItems = [];
let firstRun = true;

const Product = function (name, price, type, path) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.path = path;
    this.quantity = 0;
    Product.allProducts.push(this);
};
Product.allProducts = [];







function renderItems(type) {

    switch (type) {
        case 'flowers':
            generate('flowers');

            break;
        case 'chocolate':
            generate('chocolate');
            break;
        case 'candy':
            generate('candy');
            break;
        case 'gift-boxes':
            generate('gift-boxes');
            break;
        case 'accessories':
            generate('accessories');
            break;
        case 'balloons':
            generate('balloons');
            break;

        default:

            generate('all');
            console.log('default switch');

            break;
    }
}



function generate(type) {

    for (let i = 0; i < Product.allProducts.length; i++) {

        if (Product.allProducts[i].type === type) {

            let item = document.createElement('div');
            item.setAttribute('class', 'item');
            items.appendChild(item);
            let img = document.createElement('img');
            img.setAttribute('class', 'itemImg');
            img.setAttribute('src', Product.allProducts[i].path);
            item.appendChild(img);
            let info = document.createElement('div');
            item.appendChild(info);
            let leftInfo = document.createElement('div');
            leftInfo.setAttribute('class', 'leftInfo');
            info.appendChild(leftInfo);
            let itemName = document.createElement('h3');
            leftInfo.appendChild(itemName);
            itemName.textContent = Product.allProducts[i].name;
            let itemPrice = document.createElement('h4');
            leftInfo.appendChild(itemPrice);
            itemPrice.textContent = Product.allProducts[i].price + ' JD\'s';

            let rightInfo = document.createElement('div');
            rightInfo.setAttribute('class', 'rightInfo');
            info.appendChild(rightInfo);

            let addBtn = document.createElement('button');
            addBtn.setAttribute('id', i);
            rightInfo.appendChild(addBtn);
            addBtn.textContent = 'Add to Cart';
        } else if (type === 'all') {

            let item = document.createElement('div');
            item.setAttribute('class', 'item');
            items.appendChild(item);
            let img = document.createElement('img');
            img.setAttribute('class', 'itemImg');
            img.setAttribute('src', Product.allProducts[i].path);
            item.appendChild(img);
            let info = document.createElement('div');
            item.appendChild(info);
            let leftInfo = document.createElement('div');
            leftInfo.setAttribute('class', 'leftInfo');
            info.appendChild(leftInfo);
            let itemName = document.createElement('h3');
            leftInfo.appendChild(itemName);
            itemName.textContent = Product.allProducts[i].name;
            let itemPrice = document.createElement('h4');
            leftInfo.appendChild(itemPrice);
            itemPrice.textContent = Product.allProducts[i].price + ' JD\'s';

            let rightInfo = document.createElement('div');
            rightInfo.setAttribute('class', 'rightInfo');
            info.appendChild(rightInfo);

            let addBtn = document.createElement('button');
            addBtn.setAttribute('id', i);
            rightInfo.appendChild(addBtn);
            addBtn.textContent = 'Add to Cart';


        }
    }


} //end of generate function




new Product('candy1', 10, 'candy', 'assets/candies/candy1.jpg');
new Product('flower', 120, 'flowers', 'assets/flowers/lavander flower.jpg');
new Product('balloons', 120, 'balloons', 'assets/balloons/balloons.jpg');
new Product('balloons', 120, 'balloons', 'assets/balloons/balloons.jpg');
new Product('balloons', 120, 'balloons', 'assets/balloons/balloons.jpg');

renderItems('all');


for (let i = 0; i < Product.allProducts.length; i++) {
    let addbutton = document.getElementById(i);
    addbutton.addEventListener('click', submitter);
}



function submitter(event) {
    event.preventDefault();
    console.log('inside submitter');
    console.log(event.target.id);

    if (firstRun) {

        let storedCart = localStorage.getItem('cartItems');

        if (storedCart) {

            cartItems = JSON.parse(storedCart);

        }
        firstRun = false;
        localStorage.removeItem('cartItems');
        sessionStorage.removeItem('cartItems');

    }






    if (cartItems.includes(Product.allProducts[event.target.id])) {

        console.log('increase quantity before refreshing');
        let index = cartItems.indexOf(Product.allProducts[event.target.id]);
        cartItems[index].quantity++;

    } else {

        console.log('adding a new item');
        Product.allProducts[event.target.id].quantity++;
        cartItems.push(Product.allProducts[event.target.id]);

    }


    let data = JSON.stringify(cartItems);
    localStorage.setItem('cartItems', data);



}




