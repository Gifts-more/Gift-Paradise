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
        case 'chocolates':
            generate('chocolates');
            break;
        case 'candies':
            generate('candies');
            break;
        case 'gift boxes':
            generate('gift-boxes');
            break;
        case 'accessories':
            generate('accessories');
            break;
        case 'balloons':
            generate('balloons');
            break;
        case 'cakes':
            generate('cakes');
            break;

        default:

            generate('all');
            console.log('default switch');

            break;
    }
}



function generate(type) {
items.textContent = '';
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
            addBtn.setAttribute('class', 'btn')
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
            addBtn.setAttribute('class', 'btn')
            rightInfo.appendChild(addBtn);
            addBtn.textContent = 'Add to Cart';


        }
    }


} //end of generate function



new Product('Islamic Wallpeper', 55, 'accessories', '../assets/accessories/islamic-wallpaper.png');
new Product('River Wallpaper', 50, 'accessories', '../assets/accessories/river-wallpaper.jpg');
new Product('Snowball Glass', 15, 'accessories', '../assets/accessories/snowball.jpg');
new Product('Table Lamp', 30, 'accessories', '../assets/accessories/table-lamp.jpg');
new Product('Tree Lamp', 25, 'accessories', '../assets/accessories/tree-lamp.jpg');
new Product('Wall Clock', 45, 'accessories', '../assets/accessories/wall-clock.jpg');

new Product('Emoji Balloons', 25, 'balloons', '../assets/balloons/emoji-balloons.jpg');
new Product('Glitter Balloons', 22, 'balloons', '../assets/balloons/glitter-balloons.jpg');
new Product('Mix Balloons', 20, 'balloons', '../assets/balloons/mix-balloons.jpg');
new Product('Rabit Balloons', 22, 'balloons', '../assets/balloons/rabit-balloons.jpg');
new Product('Red Balloons', 26, 'balloons', '../assets/balloons/red-balloons.jpg');
new Product('Star Balloons', 24, 'balloons', '../assets/balloons/star-balloons.jpg');

new Product('Chocolate CupCake', 24, 'cakes', '../assets/cakes/Chocolate-Cupcakes.jpg');
new Product('Easter Bunny CupCake', 24, 'cakes', '../assets/cakes/Easter-Bunny-Cupcakes.jpg');
new Product('Hearts CupCake', 24, 'cakes', '../assets/cakes/heart-Cupcakes.jpg');
new Product('Galaxy CupCake', 24, 'cakes', '../assets/cakes/Galaxy-Cupcakes.jpg');
new Product('Rainbow CupCake', 24, 'cakes', '../assets/cakes/rainbow-cupcakes.jpg');
new Product('Vanilla CupCake', 24, 'cakes', '../assets/cakes/Vanilla-Cupcakes.jpg');

new Product('Lavander Flower', 60, 'flowers', '../assets/flowers/lavander-flower.jpg');
new Product('Narcissus Flower', 35, 'flowers', '../assets/flowers/narcissus-flower.jpg');
new Product('Orange Flower', 38, 'flowers', '../assets/flowers/orange-flower.jpg');
new Product('Pink Flower', 40, 'flowers', '../assets/flowers/pink-flower.jpg');
new Product('Rose Flower', 55, 'flowers', '../assets/flowers/rose-flower.jpg');
new Product('Tulip Flower', 60, 'flowers', '../assets/flowers/tulip-flower.jpg');

new Product('Gift Box 1', 75, 'gift-boxes', '../assets/gift-boxes/giftbox1.jpg');
new Product('Gift Box 2', 150, 'gift-boxes', '../assets/gift-boxes/giftbox2.jpg');
new Product('Gift Box 3', 100, 'gift-boxes', '../assets/gift-boxes/giftbox3.jpg');
new Product('Gift Box 4', 80, 'gift-boxes', '../assets/gift-boxes/giftbox4.jpg');
new Product('Gift Box 5', 90, 'gift-boxes', '../assets/gift-boxes/giftbox5.jpg');
new Product('Gift Box 6', 120, 'gift-boxes', '../assets/gift-boxes/giftbox6.jpg');

new Product('Choclate Box1', 15, 'chocolates', '../assets/chocolates/choclate1.jpg');
new Product('Choclate Box2', 20, 'chocolates', '../assets/chocolates/choclate2.jpg');
new Product('Choclate Box3', 13, 'chocolates', '../assets/chocolates/choclate3.jpg');
new Product('Choclate Box4', 40, 'chocolates', '../assets/chocolates/choclate4.jpg');
new Product('Choclate Tube', 12, 'chocolates', '../assets/chocolates/choclate5.jpg');
new Product('Choclate Box5', 30, 'chocolates', '../assets/chocolates/choclate6.jpg');

new Product('Cone Candy', 6, 'candies', '../assets/candies/cone-candy.jpg');
new Product('Jelly Candy ', 5, 'candies', '../assets/candies/jelly-candy.png');
new Product('Milky Candy', 7, 'candies', '../assets/candies/milky-candy.png');
new Product('Mix Candy', 10, 'candies', '../assets/candies/mix-candy.jpg');
new Product('Mixcone Candy', 12, 'candies', '../assets/candies/mixcone-candy.png');
new Product('Pink Candy ', 5, 'candies', '../assets/candies/pink-candy.jpg');

renderItems('all');



let nav = document.getElementById('nav-accessories');
nav.addEventListener('click', filter);

let nav1 = document.getElementById('nav-balloons');
nav1.addEventListener('click', filter);

let nav2 = document.getElementById('nav-cakes');
nav2.addEventListener('click', filter);

let nav3 = document.getElementById('nav-candies');
nav3.addEventListener('click', filter);

let nav4 = document.getElementById('nav-chocolates');
nav4.addEventListener('click', filter);

let nav5 = document.getElementById('nav-flowers');
nav5.addEventListener('click', filter);

let nav6 = document.getElementById('nav-gift-boxes');
nav6.addEventListener('click', filter);

let nav7 = document.getElementById('nav-all');
nav7.addEventListener('click', filter);


function filter(event) {
    event.preventDefault();
    console.log(event.target.textContent);
    renderItems((event.target.textContent).toLowerCase());


}



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

        setTimeout(function(){
            var x = document.getElementById('note');
            var modifiedClass = document.getElementById('notecontext');
            modifiedClass.textContent = (Product.allProducts[event.target.id].name + ' Got Added To The Cart');
            x.style.display = 'block';
        });
        setTimeout(function(){
            var modifiedClass = document.getElementById('note');
            modifiedClass.style.display = 'none';
        }, 4000);



        console.log('increase quantity before refreshing');
        let index = cartItems.indexOf(Product.allProducts[event.target.id]);
        cartItems[index].quantity++;

    } else {

        setTimeout(function(){
            var x = document.getElementById('note');
            var modifiedClass = document.getElementById('notecontext');
            modifiedClass.textContent = (Product.allProducts[event.target.id].name + ' Got Added To The Cart');
            x.style.display = 'block';
        });
        setTimeout(function(){
            var modifiedClass = document.getElementById('note');
            modifiedClass.style.display = 'none';
        }, 4000);

        Product.allProducts[event.target.id].quantity++;
        cartItems.push(Product.allProducts[event.target.id]);

    }


    let data = JSON.stringify(cartItems);
    localStorage.setItem('cartItems', data);



}




