/* eslint-disable indent */
'use strict';

const Product = function (name, price, type, path) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.path = path;
    this.quantity = 0;
    Product.allProducts.push(this);
};
Product.allProducts = [];




const Cart = function (items) {
    // this.items is an array of CartItem instances.
    this.items = new Array;
    this.total = this.calculate();
  };










function generateItems(type) {

    new Product('name', 10, 'flowers', 'assets/flwoer.jpg');
    //new Product('name2', 120, 'flowers', 'assets/flwoer.jpg');

    let items = document.getElementById('items');


    switch (type) {
        case 'flowers':

            for (let i = 0; i < Product.allProducts.length; i++) {

                if (Product.allProducts[i].type === 'flowers') {


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
                    itemPrice.textContent = (Product.allProducts[i].price + ' JD');
                    let itemQ = document.createElement('input');
                    itemQ.setAttribute('type', 'number');
                    itemQ.setAttribute('id', 'quantity');
                    itemQ.setAttribute('min', '1');
                    itemQ.setAttribute('value', '1');
                    itemQ.setAttribute('name', 'quantity');
                    leftInfo.appendChild(itemQ);

                    let rightInfo = document.createElement('div');
                    rightInfo.setAttribute('class', 'rightInfo');
                    info.appendChild(rightInfo);

                    let addBtn = document.createElement('button');
                    addBtn.setAttribute('id',i);
                    rightInfo.appendChild(addBtn);
                    addBtn.textContent = 'Add';




                }

            }



            break;
        case 'chocolate':

            break;
        case 'candy':

            break;
        case 'gift-boxes':

            break;
        case 'accessories':

            break;
        case 'baloons':

            break;

        default:


            break;
    }
}





function submitter(event) {
        event.preventDefault();
        console.log('from submitter');
    }

    generateItems('flowers');

    let addbutton = document.getElementById('0');
addbutton.addEventListener('click', submitter);

    console.log(document.getElementById('0'));
