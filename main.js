const productList = [];
productList.push({
    name: "Zapatilla",
    price: 100,
    image: "https://images.pexels.com/photos/8559045/pexels-photo-8559045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Camina con estilo y comodidad con nuestras zapatillas azules. Este calzado urbano fusiona moda y funcionalidad para que puedas destacar en cualquier ocasión. El color azul vibrante y moderno agrega un toque de frescura a tu outfit, haciéndote lucir a la moda en cada paso.",
    category: "calzado",
  });
  productList.push({
    name: "reloj Rolex",
    price: 828,
    image: "https://images.pexels.com/photos/9978940/pexels-photo-9978940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Descubre la excelencia relojera con este magnífico Rolex en tono rojo. Este icónico reloj de lujo personifica el estilo y la sofisticación, siendo el accesorio perfecto para aquellos que aprecian la elegancia y la precisión.",
    category: "electronico",
  });
  productList.push({
    name: "Iphone 14",
    price: 1210,
    image: "https://images.pexels.com/photos/7947956/pexels-photo-7947956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "La pantalla OLED de borde a borde de 6.5 pulgadas brinda colores vibrantes y detalles asombrosos, sumergiéndote en una experiencia visual inigualable. Su resolución mejorada y tasa de refresco suave hacen que cada interacción sea fluida y cautivadora.",
    category: "electronico",
  });
  productList.push({
    name: "Desk",
    price: 320,
    image: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Monopoly",
    price: 100,
    image: "https://images.pexels.com/photos/4004426/pexels-photo-4004426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Room",
    price: 5000,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Car Audi",
    price: 500000 ,
    image: "https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Motorcycle",
    price: 203,
    image: "https://images.pexels.com/photos/2830762/pexels-photo-2830762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "room Clasic",
    price: 4000,
    image: "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Games",
    price: 80,
    image: "https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Books",
    price: 44,
    image: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "cubo rubik",
    price: 50,
    image: "https://images.pexels.com/photos/1500610/pexels-photo-1500610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Zapatilla nike",
    price: 210,
    image: "https://images.pexels.com/photos/13236696/pexels-photo-13236696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "lentes",
    price: 20,
    image: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "TV apple",
    price: 700,
    image: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

const emailDesktop = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer =document.querySelector(".cards-container");
const productDetailAside = document.querySelector(".product-detail-aside")
const productDetailClosed = document.querySelector(".product-detail-close");
const countShoppingCart = document.querySelector(".navbar-shopping-cart div");
const totalAmount = document.querySelector(".total-amount");
const arrowClose = document.querySelector(".title-container img");
const buttonCheck = document.querySelector("#buttonCheck");
const tarjetaAside = document.querySelector(".tarjeta-aside");
const buttonAddtoCard = document.querySelector(".add-to-cart-button")
const buttonDeletetarjeta = document.querySelector("#productCheakoutButton")
const arrayProductCart =[];


const darkenScreen = document.querySelector(".darken");

buttonCheck.addEventListener("click", buttonCheckDelete);
buttonCheck.addEventListener("click", toggleShoppingCart);
buttonDeletetarjeta.addEventListener("click", deleteListTarjeta);
emailDesktop.addEventListener("click", toggleMenuDesktop);
menuHamburgerIcon.addEventListener("click", toggleMenuMobile);
shoppingCartIcon.addEventListener("click", toggleShoppingCart);
productDetailClosed.addEventListener("click", productCloseAside);
arrowClose.addEventListener("click",toggleShoppingCart);


function darkenChange(){
    darkenScreen.classList.toggle("inactive");
}
function deleteListTarjeta(){
  location.reload()
}
function toggleMenuDesktop(){
    menuDesktop.classList.toggle("inactive");    
    productDetail.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailAside.classList.add("inactive");

    const isMenuDesktop = !menuDesktop.classList.contains("inactive")

    if(isMenuDesktop){
        darkenScreen.classList.remove("inactive");
    } else {
        darkenScreen.classList.add("inactive");
    }
}
function toggleMenuMobile(){
    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
    menuDesktop.classList.add("inactive");
    productDetailAside.classList.add("inactive");

    const isMobileMenu = !mobileMenu.classList.contains("inactive");

    if(isMobileMenu){
        darkenScreen.classList.remove("inactive");
    } else {
        darkenScreen.classList.add("inactive");
    }
}
function toggleShoppingCart(){
    productDetail.classList.toggle("inactive");
    menuDesktop.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailAside.classList.add("inactive"); 

    const isShoppingCart= !productDetail.classList.contains("inactive");

    if(isShoppingCart){
        darkenScreen.classList.remove("inactive");
    } else {
        darkenScreen.classList.add("inactive");
    }

}
function productCloseAside(){
    productDetailAside.classList.add("inactive");
    productDetail.classList.add("inactive");
    menuDesktop.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    darkenScreen.classList.add("inactive");
}
function toggleCloseMenu(){
    productDetail.classList.add("inactive");
    menuDesktop.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailAside.classList.remove("inactive");
    darkenScreen.classList.remove("inactive");

}
function buttonCheckDelete(){
  
  buttonCheck.disabled = true;
  buttonCheck.classList.add("inactive")
  tarjetaAside.classList.toggle("inactive"); 
    

  const isTarjetAside = !productDetail.classList.contains("inactive")

    if(isTarjetAside){
        productDetail.classList.remove("inactive");

    } else {
        productDetail.classList.add("inactive");
    }
  
};
function reiniciarLista(){
  location.reload()
}
/*Renderizamos losproductucos en un costado de la pantalla*/

function renderProducts(arr){
    arr.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");


        const productImageCard = document.createElement("img");
        productImageCard.setAttribute("src", product.image);
        productImageCard.addEventListener("click", function(){
            renderDetailsAside(product);
            toggleCloseMenu();
        });
        

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const divInfo = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$"+product.price;
        const productName = document.createElement("p");
        productName.innerHTML = product.name;

        const productFigure = document.createElement("figure");
        productFigure.addEventListener("click", function(){
            renderMyOrder(product);
        });

        const imageIconCart = document.createElement("img");
        imageIconCart.setAttribute("src","./icons/bt_add_to_cart.svg");

        productFigure.appendChild(imageIconCart);
        divInfo.appendChild(productName);
        divInfo.appendChild(productPrice);

        productInfo.appendChild(divInfo);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImageCard);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }) 

}

renderProducts(productList);


function renderDetailsAside(product){
    productDetailAside.classList.remove("inactive");

    const productImgeDetail = document.querySelector(".detail-img")
    const productPrice = document.querySelector(".product-info-aside .product-price-detail");
    const productName = document.querySelector(".product-info-aside .product-name-detail");
    const productDescription = document.querySelector(".product-description-detail");
    productPrice.innerHTML = "$ " + product.price;
    productName.innerHTML = product.name;
    productImgeDetail.setAttribute('src', product.image);
    productDescription.innerHTML = product.description;
}

/*<div class="shopping-cart">
    <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    </figure>
    <p>Bike</p>
    <p>$30,00</p>
    <img src="./icons/icon_close.png" alt="close">
</div>*/


function renderMyOrder(product){
    //console.log("click");
    const shoppingCart = document.querySelector(".shopping-cart");
    
    const divShopingCart = document.createElement("div")
    divShopingCart.classList.add("div-ShopingCart")
    const figureMyOrder = document.createElement("figure");
    const imgIconMyOrder = document.createElement("img");
    imgIconMyOrder.setAttribute("src", product.image);
    const productName = document.createElement("p");
    productName.classList.add("name-my-order");
    productName.innerHTML =  product.name;
    const productPrice = document.createElement("p");
    productPrice.classList.add("price-my-order");
    productPrice.innerHTML = "$ "+ product.price;
    const imgIconDelete = document.createElement("img");
    imgIconDelete.setAttribute("src", "./icons/icon_close.png");
    
    shoppingCart.appendChild(divShopingCart);
    divShopingCart.appendChild(figureMyOrder);
    figureMyOrder.appendChild(imgIconMyOrder);
    divShopingCart.appendChild(productName);
    divShopingCart.appendChild(productPrice);
    divShopingCart.appendChild(imgIconDelete);

    /*---- Actualizamos la cantidad de productos y sumamos el resultado.*/
    totalAmount.innerHTML = '$0.00'
    

    //const priceOrder = document.querySelectorAll(".price-my-order");
    //countShoppingCart.innerHTML = priceOrder.length;
    countShoppingCart.innerHTML = shoppingCart.childElementCount;
    totalAmount.innerHTML = Number(totalAmount.innerHTML.substring(1)) + product.price;
    arrayProductCart.push(Number(totalAmount.innerHTML));

    
    totalAmount.innerHTML ="$ "+ sumProducts(arrayProductCart); 

    /*Elimina producto de My Order* y actualiza eldato en el carrito*/
    imgIconDelete.addEventListener("click", function(){
        divShopingCart.remove();
        countShoppingCart.innerHTML = shoppingCart.childElementCount;
        
        const getTotal = document.querySelectorAll(".total-amount");
        const getTotalNumber = Number(Array.from(getTotal)[0].innerHTML.substring(1));

        getTotal[0].innerHTML = "$ " + (getTotalNumber - product.price);
        arrayProductCart.splice(-1,1); 
    })
}

function sumProducts(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
