/* eslint-disable no-empty */
/* eslint-disable indent */
'use strict';

const Product = function (name, price, type, path, quantity) {
  this.name = name;
  this.price = price;
  this.type = type;
  this.path = path;
  this.changeQuantity = function (qua) {
    this.quantity = 0;
  };
  Product.allProducts.push(this);
};
Product.allProducts = [];

const Cart = function (items) {
  this.items = items;
};

let items = document.getElementById('items');
let cat = function (category) {
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (Product.allProducts[i].type === category) {
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
      itemPrice.textContent = Product.allProducts[i].price + ' JD';
      let itemQ = document.createElement('input');
      itemQ.setAttribute('type', 'number');
      itemQ.setAttribute('id', `quantity${i}`);
      itemQ.setAttribute('min', '1');
      itemQ.setAttribute('value', '1');
      itemQ.setAttribute('name', 'quantity');
      leftInfo.appendChild(itemQ);

      let rightInfo = document.createElement('div');
      rightInfo.setAttribute('class', 'rightInfo');
      info.appendChild(rightInfo);

      let addBtn = document.createElement('button');
      addBtn.setAttribute('id', i);
      rightInfo.appendChild(addBtn);
      addBtn.textContent = 'Add';
    }
  }
};

function generateItems(type) {
  if (type === 'flowers') {
    new Product('candy1', 10, 'flowers', 'assets/candy1.jpg', 0);
    new Product('candy2', 120, 'flowers', 'assets/candy2.jpg', 0);
  }
  if (type === 'chocolate') {
    new Product('candy3', 30, 'chocolate', 'assets/candy3.jpg', 0);
  }
  if (type === 'candy') {

  }

  if (type === 'gift-boxes') {

  }
  if (type === 'accessories') {

  }
  if (type === 'baloons') {

  }

  

  switch (type) {
    case 'flowers':
      cat('flowers');

      break;
    case 'chocolate':
      cat('chocolate');
      break;
    case 'candy':
      cat('candy');
      break;
    case 'gift-boxes':
      cat('gift-boxes');
      break;
    case 'accessories':
      cat('accessories');
      break;
    case 'baloons':
      cat('baloons');
      break;

    default:
      break;
  }
}

function submitter(event) {
  // event.preventDefault();

  for (let i = 0; i < Product.allProducts.length; i++) {
    if (event.target.id == i) {
      let getQuantity = document.getElementById(`quantity${i}`).value;
      Product.allProducts[i].changeQuantity(getQuantity);
      localStorage.setItem(`added${i}`, JSON.stringify(Product.allProducts[i]));
    }
  }
}

generateItems('flowers');

for (let i = 0; i < Product.allProducts.length; i++) {
  let addbutton = document.getElementById(i);
  addbutton.addEventListener('click', submitter);
}
