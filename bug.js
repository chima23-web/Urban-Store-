/* =========================
   PRODUCT DATA
========================= */
const products = [
    {
        id: 1,
        name: "Classic Sneakers",
        category: "footwear",
        price: 35000,
        image: "Classic-sneakers.webp",
        rating: 5,
        description: "Comfortable sneakers suitable for everyday activities."
    },

    {
        id: 2,
        name: "Leather Backpack",
        category: "bags",
        price: 28500,
        image: "arnos-backpack-392.webp",
        rating: 4,
        description: "A stylish and durable backpack for everyday use."
    },

    {
        id: 3,
        name: "Smart Watch",
        category: "watches",
        price: 45000,
        image: "OIP (17).webp",
        rating: 5,
        description: "A modern smartwatch designed for everyday convenience."
    },

    {
        id: 4,
        name: "Casual T-Shirt",
        category: "fashion",
        price: 15000,
        image: "T-shirt.jpg",
        rating: 4,
        description: "A comfortable casual shirt for everyday wear."
    },

    {
        id: 5,
        name: "Wireless Headphones",
        category: "electronics",
        price: 32000,
        image: "Wireless-Headphones.jpg",
        rating: 5,
        description: "Wireless headphones with clear sound and comfortable fit."
    },

    {
        id: 6,
        name: "Crossbody Bag",
        category: "bags",
        price: 22000,
        image: "crossbody-bag.jpg",
        rating: 4,
        description: "A compact and stylish bag for everyday activities."
    },

    {
        id: 7,
        name: "Denim Jacket",
        category: "fashion",
        price: 40000,
        image: "OIP (18).webp",
        rating: 5,
        description: "A fashionable denim jacket that works with different outfits."
    },

    {
        id: 8,
        name: "Running Shoes",
        category: "footwear",
        price: 38000,
        image: "OIP (19).webp",
        rating: 4,
        description: "Lightweight running shoes designed for comfort."
    },
    {
        id: 9,
        name: "Accessory",
        category: "Power Bank",
        price: 40000,
        image: "powerbank.jpg",
        rating: 5,
        description: "A 40000 watts quality battery."

    },
    {
        id: 10,
        name: "Condom Boxers",
        category: "Men's Underwear",
        price: 10000,
        image: "condom-boxers.jpg",
        rating: 5,
        description: "Elastic band boxer durable for a year."
    },
    {
        id: 11,
        name: "Rounded White Collar Shirt",
        category: "Fashion",
        price: 25000,
        image: "rounded-white-collar.jpg",
        rating: 5,
        description: "A well branded white roundneck polo shirt with a quality."
    },
    {
        id: 12,
        name: "Multicolored Baggy Jeans",
        category: "Men's Fashion",
        price: 40000,
        image: "baggy-jean.jpg",
        rating: 5,
        description: " A well designed baggy jean."
    },
    {
        id: 13,
        name: "Facecap",
        category: "Men's Cap",
        price: 20000,
        image: "men-facecap.webp",
        rating: 5,
        description: "A comfortable stylish cap for the head."
    },
    {
        id: 14,
        name: "Palm Slippers",
        category: "Footwear",
        price: 30000,
        image: "palm-slippers.jpg",
        rating: 4,
        description: "A high quality made comfortable palm  for the foot."

    },
    {
        id: 15,
        name: "Leather Wallet",
        category: "Accessories",
        price: 25000,
        image: "leather-wallet.jpg",
        rating: 5,
        description: "A genuine leather wallet with multiple card slots."

    },
    {
        id: 16,
        name: "Sunglasses",
        category: "Acessories",
        price: 30000,
        image: "sunglasses.webp",
        rating: 4,
        description: "Stylish sunglasses with UV protection for everyday wear."

    },
    {
        id: 17,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 40000,
        image: "bluetooth-speaker.jpg",
        rating: 5,
        description: "A portable Bluetooth speaker with high-quality sound."
    },
    {
    id: 18,
    name: "Fitness Tracker",
    category: "electronics",
    price: 35000,
    image: "fitness-tracker.jpg",
    rating: 4,
    description: "A fitness tracker that matters."
},
{
    id: 19,
    name: "Google Pixel 10 Pro XL -16G",
    category: "electronics",
    price: 1750000,
    image: "googel-pixel.jpg",
    rating: 5,
    description: "A higly rated phone with a 16GB RAM and 1TB ROM."
},
{
    id: 20,
    name: "Riggs London BODY SPRAY (Power ) 250ML",
    category: "Fragrances && Perfumes",
    price: 6000,
    image: "riggs-london.jpg",
    rating: 3,
    description: "A body spray with a 24hr smell."


},
{
    id: 21,
    name: "Karis All Day Fresh Body Deodorant Spray - 200ML (Pack)",
    category: "Fragrances && Perfumes",
    price: 13000,
    image: "karis.jpg",
    rating: 4,
    description: "A 48hr active protection: offers long-lasting odour protection to keep you feeling fresh throughout the day."
},
{
    id: 22,
    name: "Old Spice GentleMan's Total Body Deodorant Nitro Body Spray",
    category: "Fragrances && Perfumes",
    price: 18999,
    image: "Old_Spice_2.webp",
    rating: 5,
    description: "Delivers a captivating and long-lasting aroma."
},
{
    id: 23,
    name: "Sugar Green Eau De Perfume Long Lasting Spray 30ML",
    category: "Fragrances && Perfumes",
    price: 6649,
    image: "sugar-green.jpg",
    rating: 4,
    description: "Leaves a pleasant, refreshing scent trail throughout the day."
},
{
    id: 24,
    name: "Storm Elixir (OUR ,MAGIC) Perfumed Deodorant Body Spray",
    category: "Fragrances && Perfumes",
    price: 25000,
    image: "storm-elixir.jpg",
    rating: 5,
    description: "Good value for money Long lasting fragrance affordable Exiotic scentLast all day."
},
{
    id: 25,
    name: "Iphone 17 pro max",
    categories: "electronics",
    price: 1940000,
    image: "apple.jpg",
    rating: 5,
    description: " A apple phone with a operating system -IOS 26."
},
{
    id: 26,
    name: "Iphone 17 Air",
    categories: "electronis",
    price: 1430000,
    image: "apple-2.jpg",
    rating: 4,
    description: "The thinnest iphone ever, with the power of a pro chip inside."

},
{
    id: 27,
    name: "Samsung Galaxy S26 ultra",
    categories: "electronics",
    price: 2400000,
    image: "samsung-galaxy.jpg",
    rating: 5,
    description: "Samsung operating system with a 200MP camera and front camera 12MP."
},
{
    id: 28,
    name: "Samsung Galaxy S26",
    categories: "electronics",
    price: 105000,
    image: "samsung-galaxy-26.jpg",
    rating: 4,
    description: "A 5000mAH Battery all day power."
},
{
    id: 29,
    name: "Apple MacBook air m5 16/512GB midnight black Laptop",
    categories: "electronics",
    price: 1955000,
    image: "apple-macbook.jpg",
    rating: 5,
    description: "M5 Chip: Powered by a 10-core CPU with four performance cores and six efficiency cores."
},
{
    id: 30,
    name: "HP VICTUS 15 GAMING 13TH GEN INTEL CORE I5 16GB RAM Laptop",
    categories: "electronics",
    price: 1550000,
    image: "hp-laptop.jpg",
    rating: 5,
    description: "Processor 13TH Gen, Intel Core i5 up to 4.6gHz."
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
