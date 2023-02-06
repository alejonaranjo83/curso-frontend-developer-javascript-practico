// alert("Chacking that JS is working")

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartMenu = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const productDetailCloseIcon = document.querySelector(".product-detail-big-close")
const cardsContainer = document.querySelector(".cards-container") 

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
shoppingCartMenu.addEventListener("click", toggleShoppingCartAside)
// productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

// The next functions are created to show or hide certain cards of the code, and while doing so, closing or opening other elements
function toggleDesktopMenu() {
    // Creating constants in order to represent when the tags are closed
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")
    
    // If the tag "is not" (!) closed... then its open, so please close it
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
    
    // ".toggle" allows me to remove or set the class "inactive"
    desktopMenu.classList.toggle("inactive")
    
    // Close the product detail container
    productDetailContainer.classList.add("inactive")
}

function toggleMobileMenu() { 
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")
    
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }

    closeProductDetailAside();
    
    mobileMenu.classList.toggle("inactive")
}

function toggleShoppingCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    
    shoppingCartContainer.classList.toggle("inactive");

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive")
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive")
    desktopMenu.classList.add("inactive")

    // productDetailContainer.classList.remove("inactive")
    detailContainer.classList.remove("inactive")
    // productDetail[2].classList.remove("inactive")
}

function closeProductDetailAside() {
    // productDetailContainer.classList.add("inactive")
    detailContainer.classList.add("inactive")
}

// Array created with the products to be shown, so that is not necessary to have them in HTML. Ideally, this must be loaded from a database, but for this course it´s going to be done in this way:
const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Screen",
    price: 310,
    image: "https://images.pexels.com/photos/5861325/pexels-photo-5861325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Computer",
    price: 2400,
    image: "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
});

productList.push({
    name: "Stationery",
    price: 80,
    image: "https://images.pexels.com/photos/7718747/pexels-photo-7718747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Lamp",
    price: 437,
    image: "https://images.pexels.com/photos/6029034/pexels-photo-6029034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Bench",
    price: 689,
    image: "https://images.pexels.com/photos/4559954/pexels-photo-4559954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Armchair",
    price: 550,
    image: "https://images.pexels.com/photos/5749125/pexels-photo-5749125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});


// Function for creating a card
function renderProducts(arr) {
    // Iterating through each object of the array, in order to manipulate the DOM
    for (product of productList) {
        // console.log(product.name)
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)

        // Clicking on a card to view its details
        // productCard.addEventListener("click", function (e) {
        //     console.log("a click was made")
        //   });
        // const btnPressed = () => {
        //     console.log("se hizo click")
        // } 

        // const productPressed = (e) => {
        //     console.log("a click was made on " + e.target.src)
        //     console.log("the next element to the image is " + e.target.nextElementSibling)
        // } 

        // productImg.addEventListener("click", productPressed)
    }
}

// // Iterating the array through the function created for this purpose
renderProducts(productList);


// Creating a detailed card when a product is clicked and 
// Following this alternative: https://platzi.com/tutoriales/3271-javascript-practico/22433-paso-a-paso-como-crear-un-descriptor-de-producto-variable-de-una-tienda-web-para-que-se-adapte-a-cada-producto/

// The previous requires this one, which is not practical at all:
// https://platzi.com/tutoriales/3271-javascript-practico/22434-paso-a-paso-como-darle-interaccion-a-las-cards-de-detalle-de-producto-con-javascript/
function creatingProductDetail (array) {
    for(card of array){
        const productDetail = document.createElement("aside")
        productDetail.setAttribute("id", "productDetail")
        productDetail.setAttribute("class", "product-detail inactive")

        const detailContainer = document.querySelector(".productDetail-container")
        detailContainer.append(productDetail)

        const closeCard = document.createElement("div")
        closeCard.setAttribute("class", "product-detail-close")
        productDetail.append(closeCard)

        const iconX = document.createElement("img")
        iconX.setAttribute("src", "./icons/icon_close.png")
        closeCard.append(iconX)

        const imgDetailProduct = document.createElement("img")
        imgDetailProduct.setAttribute("src", card.image)
        productDetail.append(imgDetailProduct)

        const productInfoDetail = document.createElement("div")
        productInfoDetail.setAttribute("class", "product-info")
        productDetail.append(productInfoDetail)

        const priceProductInfo = document.createElement("p")
        productInfoDetail.append(priceProductInfo)
        priceProductInfo.innerText = "$" + card.price

        const nameProductInfo = document.createElement("p")
        productInfoDetail.append(nameProductInfo)
        nameProductInfo.innerText = card.name

        const buttonDetail = document.createElement("button")
        buttonDetail.setAttribute("class", "primary-button add-to-cart-button")
        productInfoDetail.append(buttonDetail)
        buttonDetail.innerText = "Add to cart"

        const iconAddCartInfo = document.createElement("img")
        iconAddCartInfo.setAttribute("src", "./icons/bt_add_to_cart.svg")
        buttonDetail.append(iconAddCartInfo)
    }
}

creatingProductDetail(productList)