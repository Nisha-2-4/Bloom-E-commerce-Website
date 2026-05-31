let products = [
    {
        id: 1,
        name: "AirFlex Runner",
        price: 89,
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=687&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Urban Sneakers",
        price: 92.048848488488484,
        image: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=880&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Street Runner",
        price: 95,
        image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Classic Shoes",
        price: 89,
        image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=735&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Modern Sneakers",
        price: 99,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: "Sport Runner",
        price: 85,
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        name: "Casual Shoes",
        price: 79,
        image: "https://images.unsplash.com/photo-1516767254874-281bffac9e9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        name: "Flex Walkers",
        price: 88,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        name: "Daily Sneakers",
        price: 91,
        image: "https://images.unsplash.com/photo-1621315271772-28b1f3a5df87?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10,
        name: "Elite Trainers",
        price: 110,
        image: "https://images.unsplash.com/photo-1496202703211-aa28e9500c30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


const getProductById = (id) => {
    const product = products.filter(el => { // find query
        return el.id == id
    })

    return product[0];
}



const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");

searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("hidden");
            });

let qty = 1;

const qtyText = document.getElementById("qty");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {
    qty++;
    qtyText.textContent = qty;
});

minus.addEventListener("click", () => {
    if (qty > 0) {
        qty--;
        qtyText.textContent = qty;
    }
});


function increment() {

    const countValue = document.querySelector("#count");

    let value = parseInt(countValue.innerText);

    value = value + 1;

    countValue.innerText = value;
}

function decrement() {

    const countValue = document.querySelector("#count");

    let value = parseInt(countValue.innerText);

    if (value > 1) {

        value = value - 1;

        countValue.innerText = value;
    }
}