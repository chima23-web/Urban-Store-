/* =========================
   PRODUCT DATA
========================= */

const products = [
    {
        id: 1,
        name: "Classic Sneakers",
        category: "footwear",
        price: 35000,
        image: "images/shoes.jpg",
        rating: 5,
        description: "Comfortable sneakers suitable for everyday activities."
    },

    {
        id: 2,
        name: "Leather Backpack",
        category: "bags",
        price: 28500,
        image: "images/bags.jpg",
        rating: 4,
        description: "A stylish and durable backpack for everyday use."
    },

    {
        id: 3,
        name: "Smart Watch",
        category: "watches",
        price: 45000,
        image: "images/watches.jpg",
        rating: 5,
        description: "A modern smartwatch designed for everyday convenience."
    },

    {
        id: 4,
        name: "Casual T-Shirt",
        category: "fashion",
        price: 15000,
        image: "images/mens-fashion.jpg",
        rating: 4,
        description: "A comfortable casual shirt for everyday wear."
    },

    {
        id: 5,
        name: "Wireless Headphones",
        category: "electronics",
        price: 32000,
        image: "images/electronics.jpg",
        rating: 5,
        description: "Wireless headphones with clear sound and comfortable fit."
    },

    {
        id: 6,
        name: "Crossbody Bag",
        category: "bags",
        price: 22000,
        image: "images/bags.jpg",
        rating: 4,
        description: "A compact and stylish bag for everyday activities."
    },

    {
        id: 7,
        name: "Denim Jacket",
        category: "fashion",
        price: 40000,
        image: "images/womens-fashion.jpg",
        rating: 5,
        description: "A fashionable denim jacket that works with different outfits."
    },

    {
        id: 8,
        name: "Running Shoes",
        category: "footwear",
        price: 38000,
        image: "images/shoes.jpg",
        rating: 4,
        description: "Lightweight running shoes designed for comfort."
    }
];


/* =========================
   DOM ELEMENTS
========================= */

const productContainer =
    document.getElementById("productContainer");

const noProducts =
    document.getElementById("noProducts");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartTotal =
    document.getElementById("cartTotal");

const deliveryFee =
    document.getElementById("deliveryFee");

const cart =
    document.getElementById("cart");


/* =========================
   CART
========================= */

let cartProducts = [];


/* =========================
   FORMAT PRICE
========================= */

function formatPrice(price) {

    return "₦" + price.toLocaleString("en-NG");

}


/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        noProducts.style.display = "block";

        return;
    }

    noProducts.style.display = "none";


    productList.forEach(function(product) {

        const productCard =
            document.createElement("article");

        productCard.classList.add("product-card");


        productCard.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-price">
                    ${formatPrice(product.price)}
                </p>

                <div class="rating">
                    ${"★".repeat(product.rating)}
                    ${"☆".repeat(5 - product.rating)}
                </div>


                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <button
                        class="view-details"
                        onclick="viewProduct(${product.id})"
                    >
                        Details
                    </button>

                </div>

            </div>
        `;


        productContainer.appendChild(productCard);

    });

}


/* =========================
   ADD TO CART
========================= */

function addToCart(productId) {

    const product =
        products.find(function(item) {
            return item.id === productId;
        });


    const existingProduct =
        cartProducts.find(function(item) {
            return item.id === productId;
        });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cartProducts.push({
            ...product,
            quantity: 1
        });

    }


    updateCart();

}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    cartItems.innerHTML = "";


    if (cartProducts.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cartProducts.forEach(function(product) {

        const cartItem =
            document.createElement("div");

        cartItem.classList.add("cart-item");


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <h4>
                    ${product.name}
                </h4>

                <p>
                    ${formatPrice(product.price)}
                </p>

                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(${product.id}, -1)"
                    >
                        -
                    </button>

                    <span>
                        ${product.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                    >
                        +
                    </button>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${product.id})"
                >
                    Remove
                </button>

            </div>
        `;


        cartItems.appendChild(cartItem);

    });


    calculateCartTotal();

    updateCartCount();

}


/* =========================
   CHANGE QUANTITY
========================= */

function changeQuantity(productId, amount) {

    const product =
        cartProducts.find(function(item) {
            return item.id === productId;
        });


    if (!product) return;


    product.quantity += amount;


    if (product.quantity <= 0) {

        removeFromCart(productId);

        return;
    }


    updateCart();

}


/* =========================
   REMOVE FROM CART
========================= */

function removeFromCart(productId) {

    cartProducts =
        cartProducts.filter(function(product) {
            return product.id !== productId;
        });


    updateCart();

}


/* =========================
   CART TOTAL
========================= */

function calculateCartTotal() {

    const subtotal =
        cartProducts.reduce(function(total, product) {

            return total +
                (product.price * product.quantity);

        }, 0);


    const delivery =
        subtotal > 0 ? 2500 : 0;


    const total =
        subtotal + delivery;


    cartSubtotal.textContent =
        formatPrice(subtotal);

    deliveryFee.textContent =
        formatPrice(delivery);

    cartTotal.textContent =
        formatPrice(total);

}


/* =========================
   CART COUNT
========================= */

function updateCartCount() {

    const count =
        cartProducts.reduce(function(total, product) {

            return total + product.quantity;

        }, 0);


    cartCount.textContent = count;

}


/* =========================
   FILTER PRODUCTS
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const category =
            button.dataset.category;


        if (category === "all") {

            displayProducts(products);

        } else {

            const filteredProducts =
                products.filter(function(product) {

                    return product.category === category;

                });


            displayProducts(filteredProducts);

        }

    });

});


/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function() {

    const searchTerm =
        searchInput.value.toLowerCase().trim();


    const results =
        products.filter(function(product) {

            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );

        });


    displayProducts(results);

});


/* =========================
   CATEGORY BUTTONS
========================= */

const categoryButtons =
    document.querySelectorAll(".category-btn");


categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category =
            button.dataset.category;


        const results =
            products.filter(function(product) {

                return product.category === category;

            });


        displayProducts(results);


        document
            .getElementById("shop")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================
   VIEW PRODUCT
========================= */

function viewProduct(productId) {

    const product =
        products.find(function(item) {
            return item.id === productId;
        });


    if (!product) return;


    alert(
        `${product.name}\n\n` +
        `${product.description}\n\n` +
        `Price: ${formatPrice(product.price)}`
    );

}


/* =========================
   OPEN CART
========================= */

document
    .getElementById("cartBtn")
    .addEventListener("click", function() {

        cart.classList.add("active");

    });


/* =========================
   CLOSE CART
========================= */

document
    .getElementById("closeCart")
    .addEventListener("click", function() {

        cart.classList.remove("active");

    });


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navlinks =
    document.getElementById("navlinks");


menuBtn.addEventListener("click", function() {

    navlinks.classList.toggle("active");

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all required fields.";

        return;
    }


    formMessage.textContent =
        "Your message has been sent successfully!";


    contactForm.reset();

});


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterEmail =
    document.getElementById("newsletterEmail");

const newsletterMessage =
    document.getElementById("newsletterMessage");


newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        newsletterEmail.value.trim();


    if (email === "") {

        newsletterMessage.textContent =
            "Please enter your email.";

        return;
    }


    if (!email.includes("@")) {

        newsletterMessage.textContent =
            "Please enter a valid email.";

        return;
    }


    newsletterMessage.textContent =
        "Thank you for subscribing!";


    newsletterForm.reset();

});


/* =========================
   COUNTDOWN TIMER
========================= */

const saleDate =
    new Date().getTime() +
    (3 * 24 * 60 * 60 * 1000);


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        saleDate - now;


    if (difference <= 0) {

        document.getElementById("countdown")
            .innerHTML = "Sale Ended";

        return;
    }


    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .textContent = days;

    document.getElementById("hours")
        .textContent = hours;

    document.getElementById("minutes")
        .textContent = minutes;

    document.getElementById("seconds")
        .textContent = seconds;

}


setInterval(updateCountdown, 1000);

updateCountdown();


/* =========================
   INITIAL DISPLAY
========================= */

displayProducts(products);

updateCart();
