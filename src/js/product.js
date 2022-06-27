import ProductData from './productData.js';
import productDetails from './productDetails.js';
import { getParam } from './utils.js';

const productId = getParam('id');
const dataSource = new ProductData('tents');

const product = new productDetails(productId, dataSource);
product.init();

let products = [];
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

//getProductsData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);