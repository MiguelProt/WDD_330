let products = [];
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  console.log(JSON.parse(localStorage.getItem(key)));
}

// get tents data
function getProductsData() {
  fetch("../json/tents.json")
    .then(convertToJson)
    .then((data) => {
      products = data;
    });
}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  //console.log(e.target.dataset.id);
  const product = products.find((item) => item.Id === e.target.dataset.id);
  setLocalStorage("so-cart", product);
  console.log(JSON.parse(localStorage.getItem('so-cart')));
}

//getProductsData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);

(function() {
  //get Url Variable  
  const query = window.location.search;
  const urlParams = new URLSearchParams(query);
  const idProduct = urlParams.get('id');

  getProductsData();
  setTimeout(() => {
    products.forEach(product => {
      if( product['Id'] == idProduct) {
        let brand = document.querySelector('.product-brand');
        let name = document.querySelector('.product-name');
        let img = document.querySelector('.product-img');
        let price = document.querySelector('.product-card__price');
        let color = document.querySelector('.product__color');
        let desc = document.querySelector('.product__description');
        let addToCart = document.querySelector('#addToCart');

        console.log(product)
        brand.textContent = product.Brand.Name;
        name.textContent = product.NameWithoutBrand;
        img.setAttribute('src', product.Image);
        img.setAttribute('alt', product.Name);
        price.textContent = `$${product.ListPrice}`;
        if( product.Colors.length > 0)
          color.textContent = product.Colors[0].ColorName;
        desc.innerHTML = product.DescriptionHtmlSimple

        addToCart.dataset.id = product.Id;
      }
    });
  }, 250);
})();