function getLocalStorage(r){return JSON.parse(localStorage.getItem(r))}function getCartContents(){let r="";const a=getLocalStorage("so-cart");console.log(a.Name);const c=renderCartItem(a);document.querySelector(".product-list").innerHTML=c,document.querySelector(".product-list").innerHTML=renderCartItem(a)}function renderCartItem(r){const a=`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${r.Image}"
      alt="${r.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${r.Name}</h2>
  </a>
  <p class="cart-card__color">${r.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${r.FinalPrice}</p>
</li>`;return console.log(a),a}getCartContents();
