let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let makeinvoice = document.querySelector('.order');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
});
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
});
makeinvoice.addEventListener('click', ()=>{
    body.classList.toggle('active-popup');
});


let products = [
    {
        id: 1,
        name: 'CCTV Lightbulp',
        image: 'cctv.jpg',
        price: 1200000
    },
    {
        id: 2,
        name: 'Electronic Stove',
        image: 'electrikstove.jpg',
        price: 150000
    },
    {
        id: 3,
        name: 'Black Earphones',
        image: 'earbud.jpg',
        price: 250000
    },
    {
        id: 4,
        name: 'Autumn Light Stand',
        image: 'lightstand.png',
        price: 350000
    },
    {
        id: 5,
        name: 'Bed Head Light',
        image: 'headlight.jpg',
        price: 215000
    },
    {
        id: 6,
        name: 'Iron Man',
        image: 'setrika.jpg',
        price: 125000
    },
    {
        id: 7,
        name: 'Cooling AC',
        image: 'ac.jpg',
        price: 7500000
    },
    {
        id: 8,
        name: 'Washing Machine',
        image: 'drayer.png',
        price: 5000000
    },
    {
        id: 9,
        name: 'Modern Microwave',
        image: 'cooler-mirco.jpg',
        price: 850000
    },
    {
        id: 10,
        name: 'Smooth Electric Guitar',
        image: 'guitae.jpg',
        price: 3900000
    },
    {
        id: 11,
        name: 'Electronic Washer',
        image: 'washer2.png',
        price: 9000000
    },
    {
        id: 12,
        name: 'Crimson HeadPhone',
        image: 'earphone.jpg',
        price: 650000
    },
    {
        id: 13,
        name: 'Standing Fan',
        image: 'fan.png',
        price: 653000
    },
    {
        id: 14,
        name: 'Water Boiler',
        image: 'hotwater.png',
        price: 59000
    },
    {
        id: 15,
        name: 'Modern Socket',
        image: 'lightswitch.jpg',
        price: 45000
    },
    {
        id: 16,
        name: 'Microwave',
        image: 'microwave.jpg',
        price: 350000
    },
    {
        id: 17,
        name: 'Oven',
        image: 'oven.jpg',
        price: 5450000
    },
    {
        id: 18,
        name: 'PowerBamk',
        image: 'pb.png',
        price: 95000
    },
    {
        id: 19,
        name: 'Smasher',
        image: 'smasher.jpg',
        price: 359000
    },
    {
        id: 20,
        name: 'Vape Capsule',
        image: 'vape.png',
        price: 652000
    },  {
        id: 21,
        name: 'Electric Wire',
        image: 'wire.jpg',
        price: 89000
    },  {
        id: 22,
        name: 'Loot Box (Extra)',
        image: 'mystery box.png',
        price: 50000
    },

];

let listCards = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}


initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

