import { setLocalStorage } from "./utils";

export default class productDetails {
    constructor (productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
    async init () {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails();
        document.getElementById('addToCart').addEventListener('click', this.addToCart.bind(this))
    }
    addToCart() {
        setLocalStorage("so-cart", this.product);
    }
    renderProductDetails(){
        let product = this.product;
        if( product['Id'] == this.productId) {
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
    }
}