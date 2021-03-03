"use strict";
let outerIndex=[]
// const CartI = function (name, price, type, path) {
//   this.name = name;
//   this.price = price;
//   this.type = type;
//   this.path = path;
//   CartI.allProducts.push(this);
// };
// CartI.allProducts = [];
// new CartI("flower1", 15, "lowers", "../assets/accessories/accssories1.jpg");
// new CartI("flower2", 15, "lowers", "../assets/accessories/accssories2.jpg");
// new CartI("flower3", 12, "owers", "../assets/accessories/accssories3.jpg");
// let button = document.getElementById("test");
// button.addEventListener("click", submitter);
// function submitter(event) {
//   //   event.preventDefault();
//   localStorage.setItem("added", JSON.stringify(CartI.allProducts));
// }

////////////////////////////////////////OUR WORK STARTS HERE!////////////////////////////////////////////////////

let cartCont = document.getElementById("tableResult");
cartCont.addEventListener("click", removeItem);

let cartItems; 
// let qauntityInput = document.getElementById('quan').value;
let priceCalc= [];



function loadCart() {
  for (let i = 0; i < localStorage.length; i++) {
    cartItems = JSON.parse(localStorage.getItem(`cartItems`)) || [];
  }
}

loadCart(); // This one gets the local storage contents

if (cartItems !== undefined){
  addCart(); // this will render cart

  itemCount(); // items counter
}

function addCart() {
  calculatePrice();

  for (let i = 0; i < cartItems.length; i++) {
    console.log('lll',i);
    outerIndex.push(i)
    // console.log(outerIndex);
    
    let tableRow = document.createElement("tr");
    cartCont.appendChild(tableRow);

    let naming = document.createElement("td");
    tableRow.appendChild(naming);
    naming.textContent = cartItems[i].name;

    let itemImg = document.createElement("img");
    itemImg.setAttribute("src", `${cartItems[i].path}`);
    tableRow.appendChild(itemImg);

    let quantity = document.createElement("td");
    tableRow.appendChild(quantity);
    let inputQuantity = document.createElement("input");
    inputQuantity.setAttribute("type", "number");
    inputQuantity.setAttribute("value", `${cartItems[i].quantity}`);
    inputQuantity.setAttribute("min", "1");
    inputQuantity.setAttribute("name", "quantity");
    inputQuantity.setAttribute("id", "quan"+i);
    // inputQuantity.setAttribute("onchange", 'changePrice()')
    quantity.appendChild(inputQuantity);
    // console.log(inputQuantity);

    let pricing = document.createElement("td");
    tableRow.appendChild(pricing);
    // pricing.textContent = cartItems[i].price;
    pricing.setAttribute("id", "price"+i);
    pricing.textContent = `${priceCalc[i]} JD `;

    let remove = document.createElement("td");
    tableRow.appendChild(remove);
    remove.setAttribute("id", i);
    remove.setAttribute('class', 'removeButton')
    remove.textContent = "x";
    // let removeB = document.createElement('button');
    // remove.appendChild(removeB);
    // removeB.textContent = 'X';
    // removeB.addEventListener("click", removeItem);



    
  }
}

// popup message code

function popUp(params) {
  let modal = document.getElementById("myModal");

  let btn = document.getElementById("myBtn");

  let span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function () {
    modal.style.display = "block";
    // console.log('clicking');
    localStorage.clear();
    loadCart();
    setTimeout(function () {
      location.reload();
    }, 2500);
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

popUp();

function removeOne(item) {
  cartItems.splice(item, 1);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function removeItem(event) {

  // respobsible for row deletion
  const item = event.target.id;
  // console.log(cartItems,' cartItemsbefore deletion');
  for (let i =0; i< cartItems.length; i++){
    // if ()
  
    if (item === i.toString()) {
      console.log(cartCont)
      removeOne(item);
      clearCart();
      addCart();
      loadCart();
      // console.log(cartCont)
      cartCont.addEventListener("click", removeItem)
      // console.log(cartItems,' after deletion');
  
    }
    
    
    // tableHead();
  }

  // calculating total block
  let totalEl=document.getElementById('totalSum');
  totalEl.textContent = 0;
  for (let i = 0; i < priceCalc.length; i++) {
    // const element = priceCl[i];
    let elements=document.getElementById('price'+i)?.textContent.split(' ')[0];
    // console.log(elements);    
    if (elements) {
      totalEl.textContent = parseInt(totalEl.textContent) + parseInt(elements);
    }
    
  }

  // add row id dynamically
  let id=item.charAt(item.length-1)
  console.log('hello',id);
  let priceId=document.getElementById('price'+id);
  // console.log(priceId,' does this exist?')
  if (priceId) {
    let valueId=document.getElementById('quan'+id);
    
    let numberVlaue= valueId.value;
    // console.log('last val',numberVlaue);
    
    priceId.textContent=numberVlaue*cartItems[id].price+' JD'
  }
     
}

function clearCart() {
  document.getElementById("tableResult").textContent = "";
  itemCount();
  tableHead();

}

function itemCount() {
  let itemCount = (document.getElementById("totalItems").textContent =
    cartItems.length);

}
// console.log(cartItems);
loadCart();



let textCont = ['Item', 'Image', 'Quantity', 'Price', 'Remove'];

function tableHead() {
  for (let i = 0; i<textCont.length; i++){
    let cartCont= document.getElementById('tableResult');
    let headRow = document.createElement('th');
    cartCont.appendChild(headRow);
    headRow.textContent = textCont[i]
  }
  
}

// console.log(cartItems);




function calculatePrice() {
  for ( let i = 0; i< cartItems.length; i++){

    priceCalc.push (cartItems[i].price * cartItems[i].quantity)
    
  }
  // console.log(priceCalc, 'this is the calulcated price');

}

let totalSum = 0;

function total() {
  for (let i = 0; i < cartItems.length; i++){
    totalSum += priceCalc[i]
  }
  // console.log(totalSum);
  
}

let code = document.getElementById('voucher');


let voucherInput = document.getElementById('voucherButton');
voucherInput.addEventListener('click', voucherFunction);

if(cartItems){

  total();

}

let getTotalSum = document.getElementById('totalSum');
getTotalSum.textContent = `${totalSum}`;
// console.log(totalSum);
// console.log(getTotalSum);


function voucherFunction(event) {
  console.log(voucherInput);
  // let code = event.target.id.value;
  // console.log(event);

  if(code.value === '400SS'){
    // totalSum = totalSum* 0.7 
    getTotalSum.textContent = `${Math.floor(totalSum*=0.7)}`;

  // voucherInput = document.getElementById('voucherButton');
    voucherInput.removeEventListener('click', voucherFunction);    
  }  
}



// voucherFunction();





